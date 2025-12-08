import NextAuth, { AuthOptions, Session, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { sendOtpEmail } from "@/lib/sendOtp";

// Note: Using 'any' for credentials in authorize to handle dynamic properties.
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "OTP Login",
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Name", type: "text" },
        mobile: { label: "Mobile", type: "tel" },
        otp: { label: "OTP", type: "text" },
        action: { label: "Action", type: "text" }, // 'send-otp' or 'verify-otp'
      },
      async authorize(credentials: any, req?: any) {
        await dbConnect();

        if (!credentials?.email) {
          throw new Error("Email is required.");
        }

        // Action 0: Check if user exists to direct the UI
        if (credentials.action === "check-user") {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            // Signal that user exists, so UI should proceed to OTP for login
            throw new Error("USER_EXISTS");
          } else {
            // Signal that user does not exist, so UI should show sign-up form
            throw new Error("USER_NOT_FOUND");
          }
        }

        // Action 1: Send OTP for login or sign-up
        if (credentials.action === "send-otp") {
          const user = await User.findOne({ email: credentials.email });

          // Generate OTP
          const otp = Math.floor(100000 + Math.random() * 900000).toString();
          const otpExpires = new Date(new Date().getTime() + 5 * 60000); // 5 minutes

          if (user) {
            // Existing user: update OTP for login
            user.otp = otp;
            user.otpExpires = otpExpires;
            await user.save();
          } else { // This case is for a new user from the sign-up form
            if (!credentials.name || !credentials.mobile) {
              throw new Error("Name and mobile are required for sign-up.");
            }
            // Create the new user
            await User.create({
              email: credentials.email,
              name: credentials.name,
              mobile: credentials.mobile,
              otp: otp,
              otpExpires: otpExpires,
              isVerified: false,
              role: 'student',
            });
          }

          await sendOtpEmail(credentials.email, otp);
          // This step doesn't log the user in, so we return null but signal success.
          // We throw a specific error that the frontend can catch to know OTP was sent.
          throw new Error("OTP_SENT");
        }

        // Action 2: Verify OTP and log in
        if (credentials.action === "verify-otp") {
          if (!credentials.otp) {
            throw new Error("OTP is required.");
          }

          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found.");
          }

          if (!user.otp || !user.otpExpires) {
            throw new Error("No pending OTP found. Please request a new one.");
          }

          const isOtpValid = user.otp === credentials.otp;
          const isOtpExpired = new Date() > user.otpExpires;

          if (!isOtpValid || isOtpExpired) {
            throw new Error("Invalid or expired OTP.");
          }

          // Mark user as verified and clear OTP
          user.isVerified = true;
          user.otp = undefined;
          user.otpExpires = undefined;
          await user.save();

          // Return the full user document (cast to any to satisfy the provider's expected User shape)
          return user as any;
        }

        return null; // Default case
      },
    }),
  ],
  pages: {
    signIn: '/', // Your modal is on the homepage
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
      if (user) {
        token.id = user.id as string;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        // Make sure the name from the token is passed to the session user
        if (token.name) {
          session.user.name = token.name as string;
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };