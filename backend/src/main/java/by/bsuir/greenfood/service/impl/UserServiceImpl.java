package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.UserMapper;
import by.bsuir.greenfood.model.dto.User;
import by.bsuir.greenfood.model.entity.UserEntity;
import by.bsuir.greenfood.repo.UserRepository;
import by.bsuir.greenfood.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

  private final UserMapper mapper;

  private final PasswordEncoder passwordEncoder;

  private final UserRepository repository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return repository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User not found with username " + username));
  }

  @Override
  public User createUser(User user) {
    getUserByUsername(user.getUsername());

    UserEntity userForCreate = mapper.dtoToEntity(user);
    userForCreate.setPassword(passwordEncoder.encode(userForCreate.getPassword()));

    return mapper.entityToDto(repository.save(userForCreate));
  }

  @Override
  public User updateUser(User user) {
    getUserById(user.getId());

    UserEntity userForUpdate = mapper.dtoToEntity(user);
    return mapper.entityToDto(repository.save(userForUpdate));
  }

  @Override
  public User getUserByUsername(String username) {
    return repository.findByUsername(username).map(mapper::entityToDto)
        .orElseThrow(() -> new UsernameNotFoundException("User not found with username " + username));
  }

  @Override
  public User getUserById(UUID id) {
    return repository.findById(id).map(mapper::entityToDto)
        .orElseThrow(() -> new UsernameNotFoundException("User not found with id " + id));
  }

  @Override
  public List<User> getUsers() {
    return repository.findAll().stream().map(mapper::entityToDto).toList();
  }

  @Override
  public void deleteUser(UUID id) {
    repository.deleteById(id);
  }
}
