import { useState, useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import emailjs from "emailjs-com";



const ContactSection = ({ darkMode }) => {
	const formRef = useRef(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatusMessage("");

		// 1. Send user message to your email
		emailjs
			.sendForm(
				"service_z2trwox",
				"template_b5xrugi",
				formRef.current,
				"UZKjb5SR995m26Zzo"
			)
			.then(() => {
				return emailjs.send(
					"service_z2trwox",
					"template_eqf3qbw",
					{
						to_name: formData.name,
						message: formData.message,
						to_email: formData.email,
					},
					"UZKjb5SR995m26Zzo"
				);
			})
			.then(() => {
				setIsSubmitting(false);
				setStatusMessage("✅ Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });

				// Clear status message after 5 seconds
				setTimeout(() => {
					setStatusMessage("");
				}, 5000);
			})
			.catch((error) => {
				setIsSubmitting(false);
				setStatusMessage(
					"❌ Failed to send message. Please try again."
				);
				console.error("EmailJS error:", error);
			});
	};

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					className={`text-4xl font-bold text-center mb-12 ${
						darkMode ? "text-green-400" : "text-purple-800"
					} font-mono animate-bounce`}
				>
					📡 INITIATE CONTACT 📡
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Contact Info */}
					<div
						className={`p-6 sm:p-8 rounded-lg ${
							darkMode
								? "bg-gray-800/50 border-green-400"
								: "bg-white/50 border-purple-400"
						} border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500`}
					>
						<h3
							className={`text-2xl font-bold mb-6 ${
								darkMode ? "text-cyan-300" : "text-pink-600"
							} font-mono`}
						>
							[CONTACT CHANNELS]
						</h3>

						<div className="space-y-6">
							<a
								href="mailto:ak99.abirkhan@gmail.com"
								className={`flex items-center p-4 rounded-lg ${
									darkMode
										? "bg-gray-700 hover:bg-gray-600 text-green-400"
										: "bg-purple-100 hover:bg-purple-200 text-purple-600"
								} transition-all transform hover:scale-105 group`}
							>
								<Mail
									className="mr-3 group-hover:animate-bounce"
									size={20}
								/>
								<div>
									<div className="font-mono font-bold">
										[EMAIL]
									</div>
									<div className="text-sm">
										ak99.abirkhan@gmail.com
									</div>
								</div>
							</a>

							<a
								href="https://linkedin.com/in/mdabirhasankhan"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center p-4 rounded-lg ${
									darkMode
										? "bg-gray-700 hover:bg-gray-600 text-cyan-400"
										: "bg-pink-100 hover:bg-pink-200 text-pink-600"
								} transition-all transform hover:scale-105 group`}
							>
								<Linkedin
									className="mr-3 group-hover:animate-bounce"
									size={20}
								/>
								<div>
									<div className="font-mono font-bold">
										[LINKEDIN]
									</div>
									<div className="text-sm">
										Professional Network
									</div>
								</div>
							</a>

							<a
								href="https://github.com/abirhasankhan"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center p-4 rounded-lg ${
									darkMode
										? "bg-gray-700 hover:bg-gray-600 text-purple-400"
										: "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
								} transition-all transform hover:scale-105 group`}
							>
								<Github
									className="mr-3 group-hover:animate-bounce"
									size={20}
								/>
								<div>
									<div className="font-mono font-bold">
										[GITHUB]
									</div>
									<div className="text-sm">
										Code Repository
									</div>
								</div>
							</a>

							<div
								className={`flex items-center p-4 rounded-lg ${
									darkMode
										? "bg-gray-700 text-yellow-400"
										: "bg-yellow-100 text-yellow-600"
								}`}
							>
								<Phone
									className="mr-3 animate-pulse"
									size={20}
								/>
								<div>
									<div className="font-mono font-bold">
										[PHONE]
									</div>
									<div className="text-sm">
										+8801955223121
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div
						className={`p-6 sm:p-8 rounded-lg ${
							darkMode
								? "bg-gray-800/50 border-green-400"
								: "bg-white/50 border-purple-400"
						} border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500`}
					>
						<h3
							className={`text-2xl font-bold mb-6 ${
								darkMode ? "text-cyan-300" : "text-pink-600"
							} font-mono`}
						>
							[SEND MESSAGE]
						</h3>

						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="space-y-6"
						>
							{/* Name */}
							<div>
								<label
									className={`block text-sm font-mono mb-2 ${
										darkMode
											? "text-green-400"
											: "text-purple-600"
									}`}
								>
									[NAME]
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className={`w-full p-3 rounded-lg ${
										darkMode
											? "bg-gray-700 border-green-400 text-green-300"
											: "bg-white border-purple-400 text-purple-700"
									} border-2 font-mono focus:outline-none focus:ring-2 focus:ring-current transition-all duration-300`}
									placeholder="Enter your name..."
								/>
							</div>

							{/* Email */}
							<div>
								<label
									className={`block text-sm font-mono mb-2 ${
										darkMode
											? "text-green-400"
											: "text-purple-600"
									}`}
								>
									[EMAIL]
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className={`w-full p-3 rounded-lg ${
										darkMode
											? "bg-gray-700 border-green-400 text-green-300"
											: "bg-white border-purple-400 text-purple-700"
									} border-2 font-mono focus:outline-none focus:ring-2 focus:ring-current transition-all duration-300`}
									placeholder="Enter your email..."
								/>
							</div>

							{/* Message */}
							<div>
								<label
									className={`block text-sm font-mono mb-2 ${
										darkMode
											? "text-green-400"
											: "text-purple-600"
									}`}
								>
									[MESSAGE]
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									required
									rows={4}
									className={`w-full p-3 rounded-lg resize-none ${
										darkMode
											? "bg-gray-700 border-green-400 text-green-300"
											: "bg-white border-purple-400 text-purple-700"
									} border-2 font-mono focus:outline-none focus:ring-2 focus:ring-current transition-all duration-300`}
									placeholder="Enter your message..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={`w-full py-3 px-6 rounded-lg ${
									darkMode
										? "bg-gray-700 hover:bg-gray-600 text-green-400"
										: "bg-purple-600 hover:bg-purple-700 text-white"
								} font-mono font-bold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
									isSubmitting ? "animate-pulse" : ""
								}`}
							>
								{isSubmitting
									? "[SENDING...]"
									: "[SEND MESSAGE]"}
							</button>

							{/* Status Message */}
							{statusMessage && (
								<p
									className={`mt-4 font-mono font-bold text-center ${
										statusMessage.includes("✅")
											? "text-green-400"
											: "text-red-500"
									}`}
								>
									{statusMessage}
								</p>
							)}
						</form>
					</div>
				</div>

				<div
					className={`text-center mt-12 ${
						darkMode ? "text-gray-400" : "text-gray-600"
					} font-mono text-sm animate-pulse`}
				>
					"I do not fear compiler wrath - I am the architect of my own
					reality" — Abir Khan, "Codemagiica" ༒
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
