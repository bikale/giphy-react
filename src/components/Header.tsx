import "./Header.css";

const Header = () => {
	return (
		<header className="Header">
			<h1>GIF App</h1>
			<p className="Header__attribution">Powered By <a href="https://developers.giphy.com/">GIPHY</a></p>
		</header>
	);
};

export default Header;
