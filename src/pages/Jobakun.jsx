import React, { useRef, useState, useEffect } from "react";
import JobakunNavbar from "../components/JobakunNavbar";
import loveImage from "../images/joba/joba01.jpg";

function Jobakun() {
	const [darkMode, setDarkMode] = useState(false);
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);
	const [modeEffect, setModeEffect] = useState("");
	const audioRef = useRef(null);

	const toggleDarkMode = () => {
		if (!darkMode) setModeEffect("dark-mode-effect");
		else setModeEffect("light-mode-effect");

		setTimeout(() => setModeEffect(""), 1500);
		setDarkMode((prev) => !prev);
	};

	const toggleMusic = () => {
		if (!audioRef.current) return;
		if (isMusicPlaying) audioRef.current.pause();
		else audioRef.current.play().catch((err) => console.log(err));
		setIsMusicPlaying(!isMusicPlaying);
	};

	// Fireflies and hearts
	const [fireflies, setFireflies] = useState([]);
	const [hearts, setHearts] = useState([]);
	const [magicalParticles, setMagicalParticles] = useState([]);

	useEffect(() => {
		// Dark mode particles
		if (darkMode) {
			const flies = Array.from({ length: 20 }, (_, i) => ({
				id: i,
				left: Math.random() * 100,
				top: Math.random() * 100,
				size: Math.random() * 4 + 2,
				delay: Math.random() * 5,
			}));
			const heartParticles = Array.from({ length: 10 }, (_, i) => ({
				id: i,
				left: Math.random() * 100,
				top: Math.random() * 100,
				size: Math.random() * 10 + 8,
				delay: Math.random() * 5,
			}));
			setFireflies(flies);
			setHearts(heartParticles);
		} else {
			setFireflies([]);
			setHearts([]);
		}

		// Magical particles for both modes
		const magic = Array.from({ length: 30 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: Math.random() * 3 + 1,
			delay: Math.random() * 5,
			color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(255,255,200,0.8)",
		}));
		setMagicalParticles(magic);
	}, [darkMode]);

	return (
		<div
			className={`relative transition-colors duration-1000 overflow-hidden ${
				darkMode
					? "bg-gray-900 text-green-400"
					: "bg-pink-100 text-purple-900"
			} ${modeEffect}`}
		>
			<JobakunNavbar
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				isMusicPlaying={isMusicPlaying}
				toggleMusic={toggleMusic}
			/>

			{/* Magical floating particles */}
			{magicalParticles.map((p) => (
				<span
					key={p.id}
					className="absolute rounded-full animate-magic"
					style={{
						width: p.size,
						height: p.size,
						top: `${p.top}%`,
						left: `${p.left}%`,
						backgroundColor: p.color,
						animationDelay: `${p.delay}s`,
					}}
				/>
			))}

			{/* Fireflies */}
			{darkMode &&
				fireflies.map((fly) => (
					<span
						key={fly.id}
						className="absolute rounded-full bg-yellow-400 opacity-80 animate-firefly"
						style={{
							width: fly.size,
							height: fly.size,
							top: `${fly.top}%`,
							left: `${fly.left}%`,
							animationDelay: `${fly.delay}s`,
						}}
					></span>
				))}

			{/* Floating Hearts */}
			{darkMode &&
				hearts.map((heart) => (
					<span
						key={heart.id}
						className="absolute text-pink-400 animate-heart"
						style={{
							fontSize: `${heart.size}px`,
							top: `${heart.top}%`,
							left: `${heart.left}%`,
							animationDelay: `${heart.delay}s`,
						}}
					>
						❤️
					</span>
				))}

			<div className="flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6 py-12 relative z-10">
				<div
					className={`text-6xl mb-4 animate-pulse ${
						darkMode ? "text-red-400" : "text-red-500"
					}`}
				>
					❤️
				</div>
				<h1
					className={`text-5xl font-bold mb-6 ${
						darkMode ? "text-pink-400" : "text-pink-600"
					}`}
				>
					পাঠিকা
				</h1>

				{/* Love Image with sparkle effect */}
				<div className="relative w-auto h-auto mb-6">
					<img
						src={loveImage}
						alt="পাঠিকা"
						className={`w-64 h-64 rounded-full shadow-lg object-cover border-4 ${
							darkMode ? "border-pink-500" : "border-pink-300"
						}`}
					/>
					{darkMode && (
						<span className="absolute inset-0 rounded-full animate-sparkle pointer-events-none"></span>
					)}
				</div>

				<p
					className={`max-w-xl text-lg mb-8 ${
						darkMode ? "text-gray-200" : "text-gray-800"
					}`}
				>
					This page is dedicated to my dearest <strong>পাঠিকা</strong>
					. Every moment with you is special, and I wanted to make
					this little corner of the internet just for you. 💖
				</p>
				<a
					href="#hero"
					className={`px-6 py-3 rounded-lg font-medium transition ${
						darkMode
							? "bg-pink-500 text-gray-900 hover:bg-pink-400"
							: "bg-pink-600 text-white hover:bg-pink-700"
					}`}
				>
					Go to Hero Section
				</a>
			</div>

			<audio
				ref={audioRef}
				src="/genshin-main-theme.mp3"
				loop
				preload="auto"
			/>

			{/* Custom CSS for mode effects */}
			<style jsx>{`
				/* Light mode refresh effect */
				.light-mode-effect::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: white;
					animation: flash 0.8s ease-in-out;
					pointer-events: none;
					z-index: 50;
				}

				@keyframes flash {
					0% {
						opacity: 0;
					}
					50% {
						opacity: 0.7;
						transform: scale(1.05);
					}
					100% {
						opacity: 0;
					}
				}

				/* Fireflies animation */
				.animate-firefly {
					animation: firefly 6s infinite ease-in-out alternate;
				}
				@keyframes firefly {
					0% {
						transform: translate(0, 0) scale(1);
						opacity: 0.3;
					}
					50% {
						transform: translate(20px, -15px) scale(1.3);
						opacity: 1;
					}
					100% {
						transform: translate(-10px, 10px) scale(1);
						opacity: 0.3;
					}
				}

				/* Heart animation */
				.animate-heart {
					animation: heart-float 6s infinite ease-in-out alternate;
				}
				@keyframes heart-float {
					0% {
						transform: translate(0, 0) scale(1);
						opacity: 0.5;
					}
					50% {
						transform: translate(0, -30px) scale(1.2);
						opacity: 1;
					}
					100% {
						transform: translate(0, -60px) scale(1);
						opacity: 0.5;
					}
				}

				/* Sparkle around image */
				.animate-sparkle::before {
					content: "";
					position: absolute;
					inset: 0;
					border-radius: 50%;
					box-shadow: 0 0 15px 5px rgba(255, 182, 193, 0.7),
						0 0 25px 10px rgba(255, 105, 180, 0.5),
						0 0 35px 15px rgba(255, 20, 147, 0.3);
					animation: sparkle 2s infinite alternate;
					pointer-events: none;
				}

				@keyframes sparkle {
					0% {
						transform: scale(1);
						opacity: 0.5;
					}
					50% {
						transform: scale(1.05);
						opacity: 0.9;
					}
					100% {
						transform: scale(1);
						opacity: 0.5;
					}
				}

				/* Magical particles */
				.animate-magic {
					animation: floatMagic 8s infinite ease-in-out alternate;
					border-radius: 50%;
				}

				@keyframes floatMagic {
					0% {
						transform: translate(0, 0) scale(1);
						opacity: 0.3;
					}
					50% {
						transform: translate(15px, -20px) scale(1.2);
						opacity: 1;
					}
					100% {
						transform: translate(-10px, 15px) scale(1);
						opacity: 0.3;
					}
				}
			`}</style>
		</div>
	);
}

export default Jobakun;
