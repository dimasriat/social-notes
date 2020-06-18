export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<style jsx global>{`
				* {
					font-family: sans-serif;
					box-sizing: border-box;
				}
				body {
					display: flex;
					justify-content: center;
				}
			`}</style>
		</>
	);
}
