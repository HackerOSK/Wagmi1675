import ResponsiveAppBar from "./Navbar";
import Hero from "./Hero";
import Need from "./Need";
import Features from "./Features";
import Demo from "./Demo";
import Benefits from "./Benefits";

function MainPage() {
	return (
		<>
			<div className="overflow-hidden">
				<ResponsiveAppBar />
				<Hero />
				<Need />
				<Features />
				<Demo />
				<Benefits />
			</div>
		</>
	);
}

export default MainPage;
