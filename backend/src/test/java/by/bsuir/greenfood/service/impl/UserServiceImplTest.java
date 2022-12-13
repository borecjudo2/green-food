package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.UserMapper;
import by.bsuir.greenfood.model.dto.User;
import by.bsuir.greenfood.model.entity.UserEntity;
import by.bsuir.greenfood.repo.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

  private static final String USER_EXIST_MESSAGE = "User already exist with username ";

  @InjectMocks
  private UserServiceImpl service;

  @Mock
  private UserMapper mapper;

  @Mock
  private PasswordEncoder passwordEncoder;

  @Mock
  private UserRepository repository;

  @Test
  void createUser() {
    // given
    User user = new User();
    UserEntity userEntity = new UserEntity();
    when(repository.findByUsername(any())).thenReturn(Optional.empty());
    when(mapper.dtoToEntity(user)).thenReturn(userEntity);
    when(repository.save(userEntity)).thenReturn(userEntity);
    when(mapper.entityToDto(userEntity)).thenReturn(user);

    // when
    User createdUser = service.createUser(user);

    // then
    assertThat(createdUser).isEqualTo(user);
  }

  @Test
  void createUserIfUserExist() {
    // given
    User user = new User();
    UserEntity userEntity = new UserEntity();
    when(repository.findByUsername(any())).thenReturn(Optional.of(userEntity));

    // when -> then
    assertThatThrownBy(() -> service.createUser(user)).hasMessage(USER_EXIST_MESSAGE + user.getUsername());
  }
}
