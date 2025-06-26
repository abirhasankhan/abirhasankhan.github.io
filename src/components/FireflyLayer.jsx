// components/FireflyLayer.jsx
import { useEffect, useState } from "react";

const FireflyLayer = ({ darkMode, enabled, onUpdateCount }) => {
	const [fireflies, setFireflies] = useState([]);
	const [caughtIds, setCaughtIds] = useState([]);

	useEffect(() => {
		if (!enabled) return;

		const initial = Array.from({ length: 20 }).map(() => ({
			id: crypto.randomUUID(),
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			size: Math.random() * 6 + 4,
			dx: (Math.random() - 0.5) * 1.5,
			dy: (Math.random() - 0.5) * 1.5,
		}));
		setFireflies(initial);
		setCaughtIds([]);
	}, [enabled]);

	useEffect(() => {
		if (!enabled) return;

		const interval = setInterval(() => {
			setFireflies((prev) =>
				prev.map((f) => {
					let newX = f.x + f.dx;
					let newY = f.y + f.dy;
					if (newX < 0 || newX > window.innerWidth) f.dx *= -1;
					if (newY < 0 || newY > window.innerHeight) f.dy *= -1;
					return { ...f, x: newX, y: newY };
				})
			);
		}, 60);

		return () => clearInterval(interval);
	}, [enabled]);

	useEffect(() => {
		if (onUpdateCount) onUpdateCount(fireflies.length);
	}, [fireflies]);

	const catchFirefly = (id) => {
		setCaughtIds((prev) => [...prev, id]);
		setTimeout(() => {
			setFireflies((prev) => prev.filter((f) => f.id !== id));
		}, 300);
	};

	if (!enabled) return null;

	return (
		<div className="pointer-events-auto fixed inset-0 z-0">
			{fireflies.map((f) => (
				<div
					key={f.id}
					onClick={() => catchFirefly(f.id)}
					className={`absolute rounded-full cursor-pointer transition-all duration-300 ${
						caughtIds.includes(f.id) ? "scale-150 opacity-0" : ""
					}`}
					style={{
						left: f.x,
						top: f.y,
						width: f.size,
						height: f.size,
						backgroundColor: darkMode
							? "rgba(34,197,94,0.6)"
							: "rgba(139,92,246,0.6)",
						boxShadow: darkMode
							? "0 0 12px rgba(34,197,94,0.8)"
							: "0 0 10px rgba(139,92,246,0.6)",
					}}
				/>
			))}
		</div>
	);
};

export default FireflyLayer;
