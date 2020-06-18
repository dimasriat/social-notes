import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
	const [logged, setLogged] = useState(false);
	const [userData, setUserData] = useState({});
	return (
		<>
			<Component
				{...pageProps}
				logged={logged}
				setLogged={setLogged}
				userData={userData}
				setUserData={setUserData}
			/>
			<style jsx global>{`
				* {
					box-sizing: border-box;
					font-family: "Hlvtc", sans-serif;
				}
				@font-face {
					font-family: "Hlvtc";
					src: url("/fonts/font-regular.ttf") format("truetype");
					font-weight: normal;
					font-style: normal;
				}
				@font-face {
					font-family: "Hlvtc";
					src: url("/fonts/font-bold.ttf") format("truetype");
					font-weight: bold;
					font-style: normal;
				}
				body {
					margin: 0;
					padding: 0;
				}
				html,
				body,
				body > div:first-child,
				div#_next,
				div#_next > div,
				div#_next > div > div {
					min-height: 100%;
				}
			`}</style>
		</>
	);
}
