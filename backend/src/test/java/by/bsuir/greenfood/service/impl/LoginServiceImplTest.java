package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.model.dto.User;
import by.bsuir.greenfood.model.dto.UserCredentials;
import by.bsuir.greenfood.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class LoginServiceImplTest {

  private static final String USERNAME = "USERNAME";
  private static final String PASSWORD = "PASSWORD";
  private static final String WRONG_PASSWORD_MESSAGE = "Wrong password!";

  @InjectMocks
  private LoginServiceImpl service;

  @Mock
  private UserService userService;

  @Mock
  private PasswordEncoder passwordEncoder;

  @Test
  void testLogin() {
    // given
    User existingUser = new User();
    existingUser.setPassword(PASSWORD);
    when(userService.getUserByUsername(USERNAME)).thenReturn(existingUser);
    when(passwordEncoder.matches(PASSWORD, existingUser.getPassword())).thenReturn(true);

    // when
    User returnedUser = service.login(new UserCredentials(USERNAME, PASSWORD));

    // then
    assertThat(returnedUser).isEqualTo(existingUser);
  }

  @Test
  void testLoginWithWrongPassword() {
    // given
    User existingUser = new User();
    existingUser.setPassword(PASSWORD);
    when(userService.getUserByUsername(USERNAME)).thenReturn(existingUser);
    when(passwordEncoder.matches(PASSWORD, existingUser.getPassword())).thenReturn(false);

    // when -> then
    assertThatThrownBy(() -> service.login(new UserCredentials(USERNAME, PASSWORD)))
        .hasMessage(WRONG_PASSWORD_MESSAGE);
  }
}
