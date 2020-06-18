import { useState } from "react";

function LoginForm(props) {
	const [uname, setUname] = useState("");
	const [pw, setPw] = useState("");
	const setLogged = props.setLogged;
	const logged = props.logged;
	const loginHandler = (e) => {
		e.preventDefault();
		const formData = { username: uname, password: pw };
		fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.msg === "sukses") {
					alert("login sukses!");
					setLogged(true);
					setUname("");
					setPw("");
				} else {
					alert("login gagal!");
				}
			});
	};

	const loginForm = (
		<form onSubmit={loginHandler}>
			<fieldset>
				<h2>Login</h2>
				<input
					type="text"
					placeholder="username"
					value={uname}
					onChange={(e) => setUname(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					value={pw}
					onChange={(e) => setPw(e.target.value)}
				/>
			</fieldset>
			<input type="submit" name="login" value="login dulu bosq" />
			<style jsx>{`
				fieldset {
					padding: 1rem;
					display: flex;
					flex-direction: column;
					border: 1px solid black;
					margin: 0.5rem 0;
				}

				fieldset input,
				fieldset textarea {
					margin: 0.5rem 0;
					width: 480px;
					padding: 0.5rem;
				}
			`}</style>
		</form>
	);

	const logoutHandler = (e) => {
		e.preventDefault();
		setLogged(false);
	};

	const logoutForm = (
		<form onSubmit={logoutHandler}>
			<fieldset>
				<h2>Logouut</h2>
			</fieldset>
			<input type="submit" name="logout" value="kuy logout bang jago" />
			<style jsx>{`
				fieldset {
					padding: 1rem;
					display: flex;
					flex-direction: column;
					border: 1px solid black;
					margin: 0.5rem 0;
				}

				fieldset input,
				fieldset textarea {
					margin: 0.5rem 0;
					width: 480px;
					padding: 0.5rem;
				}
			`}</style>
		</form>
	);

	return <>{logged === false ? loginForm : logoutForm}</>;
}

function AddNoteForm() {
	return (
		<form>
			<fieldset>
				<h2>Notes</h2>
				<input type="text" placeholder="title..." />
				<textarea placeholder="notes..." />
			</fieldset>
			<input type="submit" name="insert" value="submit note kamu" />
			<style jsx>{`
				fieldset {
					padding: 1rem;
					display: flex;
					flex-direction: column;
					border: 1px solid black;
					margin: 0.5rem 0;
				}

				fieldset input,
				fieldset textarea {
					margin: 0.5rem 0;
					width: 480px;
					padding: 0.5rem;
				}
			`}</style>
		</form>
	);
}

export default function Home(props) {
	const [logged, setLogged] = useState(false);
	return (
		<div className="insert">
			<h1>Notes</h1>
			<LoginForm logged={logged} setLogged={setLogged} />
			{logged && <AddNoteForm />}
			<style jsx>{`
				.insert {
					width: 50%;
				}
				h1 {
					color: crimson;
					margin: 0;
				}
			`}</style>
		</div>
	);
}

// export async function getStaticProps() {
// 	const api = await fetch("http://localhost:8000/dbtest");
// 	const pesan = JSON.stringify(await api.json());
// 	return {
// 		props: {
// 			pesan,
// 		},
// 	};
// }

// Home.getInitialProps = async ({ req }) => {
// 	const api = await fetch("http://localhost:8000/dbtest");
// 	const pesan = await api.json();
// 	return {
// 		pesan,
// 	};
// };
