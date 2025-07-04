import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SectionTitle from "../components/ui/SectionTitle";
import AnimatedSection from "../components/ui/AnimatedSection";
import { useInView } from "react-intersection-observer";
import teamMembers from "../data/teamData";
import { Link } from "react-router-dom";



const About = () => {
	// Page transition variants
	const pageVariants = {
		initial: {
			opacity: 0,
		},
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};

	// Add this hook for Achievements section
	const [achievementsRef, inView] = useInView({
		triggerOnce: true, // Only trigger once
		threshold: 0.3, // 30% of the section should be visible
	});

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={{ duration: 0.5 }}
		>
			{/* Hero Section */}
			<section className="relative py-24 md:py-32 overflow-hidden h-[66vh]">
				{/* Video Background */}
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					poster="/about-poster.jpg"
					className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-[-1] object-cover"
				>
					<source src="v3.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Content */}
				<div className="container-custom relative z-10 flex flex-col mx-auto justify-center items-center text-white px-4 text-center h-full">
					<h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
						About Us
					</h1>
					<p className="text-lg max-w-2xl pt-4 text-white">
						We are a team of passionate architects dedicated to creating spaces
						that inspire, function beautifully, and stand the test of time.
					</p>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-16 bg-white">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<AnimatedSection direction="left">
							<img
								src="/award.jpeg"
								alt="Architects working together"
								className="rounded-xl shadow-2xl border-4 border-primary-100 w-full h-full object-cover"
							/>
						</AnimatedSection>
						<AnimatedSection direction="right" delay={0.2}>
							<SectionTitle title="Our Story" subtitle="The journey" />
							<div className="space-y-6 text-primary-700 text-lg">
								<p>
									Anshul Architects, founded by Architect Anshul Sharma, is a trusted name in architecture and design, delivering quality projects across Kurukshetra, Mohali, Karnal, Ambala, Panipat, and nearby regions. With offices in Kurukshetra (Anshul Architects) and Mohali (AKA Architects), the firm has built a strong presence and reputation for thoughtful, innovative spaces.
								</p>
								<p>
									Architect Anshul Sharma, a Master’s graduate in Architecture from Delhi with over 18 years of experience, leads a dedicated team that specializes in residential, commercial, institutional, and industrial design. The firm’s diverse portfolio reflects a balance of creativity, functionality, and sustainability tailored to each client’s unique needs.
								</p>
								<p>
									Whether it’s a new build, renovation, or large-scale development, Anshul Architects works closely with clients to turn ideas into inspiring, practical spaces. From concept to completion, the team’s commitment to detail and client satisfaction makes them a dependable partner for any architectural vision.
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Philosophy */}
			<section className="py-16 bg-primary-50">
				<div className="container-custom">
					<SectionTitle
						title="Our Philosophy"
						subtitle="What drives us"
						center={true}
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						{[
							{
								icon: (
									<svg
										className="w-12 h-12"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								),
								title: "User-Centered Design",
								desc: "We believe that architecture should serve the people who inhabit it. By deeply understanding user needs and behaviors, we create spaces that enhance daily life and provide meaningful experiences.",
								delay: 0.1,
							},
							{
								icon: (
									<svg
										className="w-12 h-12"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
										/>
									</svg>
								),
								title: "Sustainable Futures",
								desc: "Environmental responsibility is integrated into every project we undertake. We design buildings that minimize resource consumption, reduce carbon footprint, and create healthy environments for occupants.",
								delay: 0.2,
							},
							{
								icon: (
									<svg
										className="w-12 h-12"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
										/>
									</svg>
								),
								title: "Contextual Innovation",
								desc: "We believe in innovation that responds to context—cultural, environmental, and social. Our designs respectfully engage with their surroundings while pushing boundaries to create architecture that is both timely and timeless.",
								delay: 0.3,
							},
						].map((item, idx) => (
							<AnimatedSection delay={item.delay} key={item.title}>
								<motion.div
									whileHover={{
										scale: 1.05,
										boxShadow: "0 8px 32px rgba(30,41,59,0.12)",
									}}
									className="bg-white p-8 rounded-lg shadow-md h-full transition-all duration-300"
								>
									<div className="flex justify-center text-primary-800 mb-4">
										<motion.div
											whileHover={{ rotate: 10 }}
											transition={{ type: "spring" }}
										>
											{item.icon}
										</motion.div>
									</div>
									<h3 className="text-xl font-heading font-semibold mb-3 text-center">
										{item.title}
									</h3>
									<p className="text-primary-600 text-center">{item.desc}</p>
								</motion.div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			 <div
      className="bg-cover bg-center h-[90vh] flex items-center justify-center relative"
      style={{ backgroundImage: "url('ourteam.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/70 backdrop-blur-sm px-10 py-6 rounded-lg shadow-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
          Our Team
        </h1>
      </motion.div>
    </div>

	 <section className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <Link to="/team/anshul">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/TeamMember/Anshul.jpg"
                alt="Anshul Sharma"
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6 text-center bg-gradient-to-r from-gray-100 to-gray-200">
              <h2 className="text-3xl font-bold text-gray-900">Anshul Sharma</h2>
              <p className="text-lg text-gray-600 font-semibold mt-1">
                Master in Architecture
              </p>
              <p className="text-sm text-gray-700 mt-1">Founder</p>
            </div>
          </div>
        </Link>
      </div>
    </section>


            


			{/* Team */}
			<section className="py-16 bg-white">
	<div className="container-custom">
		{/* Optional Section Title */}
		{/* <SectionTitle title="Our Team" subtitle="The people behind our success" center={true} /> */}

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
			{teamMembers.map((member, index) => (
				<AnimatedSection key={member.id} delay={index * 0.1}>
					<Link to={`/team/${member.id}`}>
						<div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden text-center cursor-pointer">
							<div className="h-72 overflow-hidden">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
								<p className="text-sm text-gray-500 mt-1">{member.role}</p>
							</div>
						</div>
					</Link>
				</AnimatedSection>
			))}
		</div>
	</div>
</section>


			{/* Achievements */}
			<section
				ref={achievementsRef}
				className="relative py-32 md:py-44 bg-primary-800 text-white bg-cover bg-center bg-no-repeat transition-all duration-500"
				style={{ backgroundImage: `url('/homepage/aahp2.jpg')` }}
			>
				<div className="container-custom relative z-10 flex flex-col items-center">
					<h1 className="text-4xl md:text-5xl font-heading font-bold shadow-white mb-12 text-center drop-shadow-lg">
						Our Achievements
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
						{[
							{ end: 120, suffix: "+", label: "Projects Completed", delay: 0 },
							{ end: 18, label: "Design Awards", delay: 0.1 },
							{ end: 20, suffix: "+", label: "Years of Excellence", delay: 0.2 },
						].map((item, idx) => (
							<AnimatedSection key={item.label} delay={item.delay}>
								<motion.div
									whileHover={{
										scale: 1.08,
										boxShadow: "0 8px 32px rgba(255,255,255,0.18)",
										background:
											"linear-gradient(135deg,rgba(255,255,255,0.12) 0%,rgba(255,255,255,0.04) 100%)",
										borderColor: "#fff",
									}}
									transition={{ type: "spring", stiffness: 300 }}
									className="text-center p-10 bg-white/10 rounded-2xl shadow-xl border-2 border-white/20 backdrop-blur-md transition-all duration-300"
								>
									<div className="text-5xl font-extrabold text-white mb-2 flex justify-center items-end gap-1 drop-shadow-lg">
										{inView ? (
											<CountUp
												end={item.end}
												duration={2}
												suffix={item.suffix || ""}
											/>
										) : (
											<span>0{item.suffix || ""}</span>
										)}
									</div>
									<div className="text-white text-lg font-medium tracking-wide drop-shadow">
										{item.label}
									</div>
								</motion.div>
							</AnimatedSection>
						))}
					</div>
				</div>
				{/* Optional: Add a subtle overlay for better contrast */}
				<div className="absolute inset-0 bg-black/40 pointer-events-none" />
			</section>
		</motion.div>
	);
};

export default About;
