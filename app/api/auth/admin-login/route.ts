import dbConnect  from "@/lib/dbConnect"; // Adjust path to your DB connection
import User from "@/models/User"; // Adjust path to your User model
import { NextResponse } from "next/server";
import { sendOtpEmail } from "@/lib/sendOtp";

export async function POST(request: Request) {
  try {
    // Connect to the database
    await dbConnect();

    const { email } = await request.json();

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    // Check if the user has the 'admin' role
    if (user.role !== 'admin') {
      return NextResponse.json(
        { error: "Access denied. Only admins can login here." }, 
        { status: 403 }
      );
    }

    // Generate a 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Set OTP and Expiry (e.g., 15 minutes from now)
    user.otp = generatedOtp;
    user.otpExpires = new Date(Date.now() + 15 * 60 * 1000); 
    
    await user.save();

    // Send Email
    await sendOtpEmail(user.email, generatedOtp);

    return NextResponse.json({
      message: "OTP sent to your email.",
      success: true,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
