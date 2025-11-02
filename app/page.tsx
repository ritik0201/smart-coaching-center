// app/page.tsx
"use client";
import { motion } from "framer-motion";
import { Star, PlayCircle, Users, BookOpen, Award } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Online Smart Coaching
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-300 mb-8"
          >
            Learn from the best teachers — Live classes, recorded lessons, and flexible learning.
          </motion.p>
          <div className="space-x-4">
            <a
              href="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Browse Courses
            </a>
            <a
              href="/demo"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black font-medium"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { icon: <Users className="w-10 h-10" />, number: "10,000+", label: "Students" },
              { icon: <PlayCircle className="w-10 h-10" />, number: "500+", label: "Video Lessons" },
              { icon: <BookOpen className="w-10 h-10" />, number: "50+", label: "Expert Teachers" },
              { icon: <Award className="w-10 h-10" />, number: "25+", label: "Course Categories" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-6 bg-gray-800 rounded-2xl"
              >
                <div className="mx-auto w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MOTIVE */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Our Motive
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                At <span className="text-blue-500 font-medium">Online Smart Coaching</span>, 
                our goal is to make quality education accessible for everyone. 
                We bridge the gap between expert teachers and motivated learners — 
                empowering students with live classes, downloadable lessons, and 
                personalized mentorship that fits your schedule.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Live Classes", desc: "Interactive sessions with real-time doubt solving" },
                { title: "Expert Teachers", desc: "Learn from industry professionals" },
                { title: "Flexible Learning", desc: "Study at your own pace with recorded sessions" },
                { title: "24/7 Support", desc: "Get help whenever you need it" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-900 rounded-xl"
                >
                  <h3 className="text-lg font-semibold mb-2 text-blue-500">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="min-h-screen py-20 bg-gray-950 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                desc: "Learn MERN stack with real-world projects.",
                img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                duration: "6 months",
                level: "Intermediate",
                students: "2.5k+",
                price: "$499",
              },
              {
                title: "Data Science & AI",
                desc: "Master Python, ML, and AI techniques.",
                img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                duration: "8 months",
                level: "Advanced",
                students: "1.8k+",
                price: "$599",
              },
              {
                title: "Digital Marketing",
                desc: "Build your brand online with modern strategies.",
                img: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                duration: "4 months",
                level: "Beginner",
                students: "3k+",
                price: "$299",
              },
              {
                title: "UI/UX Design",
                desc: "Create stunning user interfaces and experiences.",
                img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                duration: "5 months",
                level: "Intermediate",
                students: "1.5k+",
                price: "$449",
              },
              {
                title: "Mobile App Development",
                desc: "Build iOS and Android apps with React Native.",
                img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                duration: "7 months",
                level: "Advanced",
                students: "1.2k+",
                price: "$549",
              },
              {
                title: "Cloud Computing",
                desc: "Master AWS, Azure, and DevOps practices.",
                img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                duration: "6 months",
                level: "Advanced",
                students: "900+",
                price: "$649",
              },
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.desc}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Level</p>
                      <p className="font-medium">{course.level}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Students</p>
                      <p className="font-medium">{course.students}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Price</p>
                      <p className="font-medium text-blue-500">{course.price}</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* WHY CHOOSE US */}
      <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Interactive Sessions",
                desc: "Engage in real-time with instructors and fellow students. Ask questions, participate in discussions, and get immediate feedback.",
                icon: <PlayCircle className="w-12 h-12" />,
              },
              {
                title: "Expert Instructors",
                desc: "Learn from industry professionals with years of experience. Our teachers are passionate about sharing their knowledge.",
                icon: <Users className="w-12 h-12" />,
              },
              {
                title: "Flexible Learning",
                desc: "Access recorded sessions, study materials, and assignments at your convenience. Learn at your own pace.",
                icon: <BookOpen className="w-12 h-12" />,
              },
              {
                title: "Project-Based Learning",
                desc: "Work on real-world projects to build a strong portfolio. Get hands-on experience with industry tools and practices.",
                icon: <Award className="w-12 h-12" />,
              },
              {
                title: "Career Support",
                desc: "Get guidance on career paths, resume building, and interview preparation. Connect with our industry partners.",
                icon: <Award className="w-12 h-12" />,
              },
              {
                title: "Community Learning",
                desc: "Join a vibrant community of learners. Participate in group projects, hackathons, and networking events.",
                icon: <Users className="w-12 h-12" />,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="min-h-screen py-20 bg-gray-950 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Meet Our Expert Teachers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Amit Sharma",
                subject: "Web Development",
                img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                experience: "8+ years",
                students: "1.2k+",
                expertise: ["React", "Node.js", "MongoDB"],
              },
              {
                name: "Priya Gupta",
                subject: "Data Science",
                img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                experience: "6+ years",
                students: "800+",
                expertise: ["Python", "Machine Learning", "Deep Learning"],
              },
              {
                name: "Rahul Mehta",
                subject: "Digital Marketing",
                img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                experience: "10+ years",
                students: "2k+",
                expertise: ["SEO", "Social Media", "Content Marketing"],
              },
              {
                name: "Sneha Patel",
                subject: "English Communication",
                img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                experience: "7+ years",
                students: "1.5k+",
                expertise: ["Business English", "IELTS", "Public Speaking"],
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800"
              >
                <div className="relative mb-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    <p className="text-blue-400">{t.subject}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Experience</span>
                    <span className="font-medium">{t.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Students</span>
                    <span className="font-medium">{t.students}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {t.expertise.map((skill, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT REVIEWS */}
      <section className="min-h-screen py-20 bg-gray-900 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Riya Verma",
                role: "Web Developer at TechCorp",
                review:
                  "The live sessions are amazing! Teachers are so supportive and clear with every concept. I landed my dream job after completing the web development course.",
                course: "Full Stack Web Development",
                img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                name: "Arjun Singh",
                role: "Data Scientist at DataTech",
                review:
                  "I loved how I could watch recordings after class. The flexible learning approach helped me transition my career while working full-time. The projects we worked on were industry-relevant.",
                course: "Data Science & AI",
                img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                name: "Neha Sharma",
                role: "Digital Marketing Manager",
                review:
                  "Affordable, flexible, and the quality of teaching is just awesome. The instructors share real-world examples and strategies that I could immediately apply in my work.",
                course: "Digital Marketing",
                img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                name: "Raj Malhotra",
                role: "UI/UX Designer",
                review:
                  "The project-based learning approach gave me practical experience. The mentorship from industry experts helped me build a strong portfolio.",
                course: "UI/UX Design",
                img: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                name: "Meera Patel",
                role: "Mobile App Developer",
                review:
                  "The course content is up-to-date with the latest industry trends. The hands-on projects helped me understand complex concepts easily.",
                course: "Mobile App Development",
                img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                name: "Vikram Reddy",
                role: "Cloud Engineer",
                review:
                  "The cloud computing course provided excellent practical exposure. The labs and assignments were well-structured and helped in deep learning.",
                course: "Cloud Computing",
                img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{r.name}</h3>
                    <p className="text-sm text-gray-400">{r.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-blue-400">{r.course}</span>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{r.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-10 text-center text-gray-400 border-t border-gray-800">
        <p className="text-xl font-semibold text-white mb-2">
          Online Smart Coaching
        </p>
        <p>Empowering learning through technology and mentorship.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Online Smart Coaching. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
