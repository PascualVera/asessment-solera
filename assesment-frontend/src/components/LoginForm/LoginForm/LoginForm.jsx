import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

export default function LoginForm({ setUser }) {
	const navigate = useNavigate();
	const handleSubmit = async e => {
		e.preventDefault();
		const user = Object.fromEntries(new FormData(e.target));
		console.log(user);
		let param = {
			headers: {
				"content-type": "application/json; charset=UTF-8",
			},
			method: "POST",
			body: JSON.stringify(user),
		};
		try {
			const data = await fetch("http://localhost:8080/login", param);
			const response = await data.json();
			setUser(response);
			navigate("/user");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<article className={styles.form_container}>
			{" "}
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.input_container}>
					<input name="email" type="text" placeholder="email" />
					<input name="password" type="text" placeholder="password" />
				</div>
				<button className={styles.button} type="submit">
					Log In
				</button>
			</form>
		</article>
	);
}
