import { useEffect } from "react";
import { useState } from "react";
import styles from "./UserDetails.module.css";
export default function UserDetails({ user }) {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		setCurrentUser(user);
		console.log(currentUser);
	}, []);
	return (
		<div>
			{currentUser && (
				<article className={styles.user_details_container}>
					<section className={styles.user_details}>
						<h3 className={styles.user_details_title}>Personal Details</h3>
						<div className={styles.user_info}>
							<span>
								<p>Email:</p>
								<p>{user.email}</p>
							</span>
							<span>
								<p>Name:</p>
								<p>
									{user.first_name} {user.last_name}
								</p>
							</span>
							<span>
								<p>Nickname:</p> <p>{user.user_name}</p>
							</span>
						</div>
					</section>
					<section className={styles.bank_details}>
						<h3>Bank accounts details</h3>
						<div className={styles.column_bank_names}>
							<p>Branch: </p> <p>Budget: </p>
						</div>

						{user.accounts &&
							user.accounts.map(e => {
								return (
									<div className={styles.column_bank_names}>
										<p>{e.name}</p>
										<p>{e.budget}$</p>
									</div>
								);
							})}
					</section>
				</article>
			)}
		</div>
	);
}
