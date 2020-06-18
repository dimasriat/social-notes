import { useState } from "react";

export default function LoginForm(props) {
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
				if (data.status) {
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
