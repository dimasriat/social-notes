export default function Home(props) {
	return (
		<div>
			<h1>Hellooo cukkk</h1>
			<p>{props.pesan}</p>
			<style jsx>{`
				* {
					font-family: sans-serif;
				}
				h1 {
					color: crimson;
				}
			`}</style>
		</div>
	);
}

export async function getStaticProps() {
	const api = await fetch("http://localhost:8000/dbtest");
	const pesan = JSON.stringify(await api.json());
	return {
		props: {
			pesan,
		},
	};
}
