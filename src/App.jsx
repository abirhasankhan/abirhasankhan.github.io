import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow">
				{" "}
				{/* Makes content take up remaining space */}
				<Outlet />
			</div>
			<Footer /> {/* Footer will stick to the bottom */}
		</div>
	);
}

export default App;
