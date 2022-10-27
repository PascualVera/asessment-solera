import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm/LoginForm";
import styles from "./Styles/Header.module.css";
import RegisterForm from "./components/LoginForm/RegisterForm/RegisterForm";
import { useEffect, useState } from "react";
import UserDetails from "./components/LoginForm/UserDetails/UserDetails";
function App({ user }) {
	const [loggedUser, setLoggedUser] = useState(null);
	const addUser = user => {
		setLoggedUser(user);
	};
	useEffect(() => {
		console.log(loggedUser);
	}, [loggedUser]);

	return (
		<Router>
			<div className="App">
				<header className={styles.header}>
					<h2 className={styles.title}>Solera Assesment</h2>
					<span className={styles.link_container}>
						<Link to="/login">
							{" "}
							<a>Log in</a>{" "}
						</Link>
						<Link to="/signup">
							{" "}
							<a>Sign up</a>{" "}
						</Link>
					</span>
				</header>
				<main className="app_container">
					<Routes>
						<Route
							path="/login"
							element={<LoginForm setUser={addUser} />}
						></Route>
						<Route path="/signup" element={<RegisterForm />}></Route>

						<Route
							path="/user"
							element={<UserDetails user={loggedUser} />}
						></Route>
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
