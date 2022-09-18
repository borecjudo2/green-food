package com.hajime.backend.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ApiController {

  @GetMapping
  public List<User> getAllUsers() {
    List<User> users = new ArrayList<>();
    users.add(new User(UUID.randomUUID(), "Vlad"));
    users.add(new User(UUID.randomUUID(), "Oleg"));
    users.add(new User(UUID.randomUUID(), "Ilya"));
    return users;
  }
}

@AllArgsConstructor
@Getter
@Setter
class User {
  private UUID id;
  private String name;
}
