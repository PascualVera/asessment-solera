import { json, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		const user = Object.fromEntries(new FormData(e.target));
		console.log(user);
		let param = {
			headers: {
				"content-type": "application/json; charset=UTF-8",
			},
			method: "POST",
			body: JSON.stringify(user),
			mode: "cors",
		};

		fetch("http://localhost:8080/add", param)
			.then(data => {
				console.log(data);
				data.json();
			})
			.then(json => {
				console.log(json);
			});
		navigate("/login");
	};

	return (
		<article className={styles.form_container}>
			{" "}
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.input_container}>
					<input name="first_name" type="text" placeholder="Name" />
					<input name="last_name" type="text" placeholder="Last name" />
					<input name="user_name" type="text" placeholder="User name" />
					<input name="email" type="text" placeholder="email" />
					<input name="password" type="text" placeholder="password" />
				</div>
				<button className={styles.button} type="submit">
					Sign up
				</button>
			</form>
		</article>
	);
}
