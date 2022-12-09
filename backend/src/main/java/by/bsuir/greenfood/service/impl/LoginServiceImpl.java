package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.model.dto.UserCredentials;
import by.bsuir.greenfood.model.dto.User;
import by.bsuir.greenfood.service.LoginService;
import by.bsuir.greenfood.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

  private static final String WRONG_PASSWORD_MESSAGE = "Wrong password!";

  private final UserService userService;
  private final PasswordEncoder passwordEncoder;

  @Override
  public User login(UserCredentials userCredentials) {
    User user = userService.getUserByUsername(userCredentials.getUsername());

    if (passwordEncoder.matches(userCredentials.getPassword(), user.getPassword())) {
      return user;
    }

    throw new RuntimeException(WRONG_PASSWORD_MESSAGE);
  }
}
