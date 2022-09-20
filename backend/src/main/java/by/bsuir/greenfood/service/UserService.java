package by.bsuir.greenfood.service;

import by.bsuir.greenfood.model.dto.User;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface UserService {

  User createUser(User user);

  User updateUser(User user);

  User getUserByUsername(String username);

  User getUserById(UUID id);

  List<User> getUsers();

  void deleteUser(UUID id);
}
