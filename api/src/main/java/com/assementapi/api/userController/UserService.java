package com.assementapi.api.userController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.assementapi.api.bank.Bank;
import com.assementapi.api.user.User;

@Component
public class UserService {

	public static List<User> users = new ArrayList<>();
	private static int userCount = 0;
	static {
		users.add(new User(++userCount, "Solera", "Le Sabe", "Solerin", "solera@solera.com", "bootcamp2",
				Arrays.asList(new Bank("santander", 1231.2),new Bank("bbva", 12131.2),new Bank("caixa", -1231.2))));
		users.add(new User(++userCount, "David", "Beckam", "El makina", "davidbeckam@gmail.com", "contraseña",
				Arrays.asList(new Bank("santander", 1231.2))));
		users.add(new User(++userCount, "Gandalf", "El Gris", "Gandalfillo77", "gandalf@gmail.com", "contraseña",
				Arrays.asList(new Bank("santander", 1231.2))));
		users.add(new User(++userCount, "Alejandro", "Magno", "ElConquistadorOMG", "magno@gmail.com", "contraseña",
				Arrays.asList(new Bank("santander", 1231.2))));
	}

	public List<User> getAll() {
		return users;
	}

	public User logIn(User user) {

		for (User u : users) {
			if (u.getEmail().equals(user.getEmail())) {
				if (u.getPassword().equals(u.getPassword())) {
					
					User authUser = u;
					authUser.setPassword(null);
					return authUser;
				}
			}
		}
		return null;

	}

	public User save(User user) {
		user.setId(++userCount);
		users.add(user);
		return user;
	}
}
