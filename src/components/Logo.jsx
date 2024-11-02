
// Logo.jsx
import React from "react";

const Logo = () => {
	return (
		<div className="flex items-center space-x-2 select-none">
			<h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
				Abir
			</h1>
			<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent italic tracking-wide drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
				Khan
			</h1>
		</div>
	);
};

export default Logo;
