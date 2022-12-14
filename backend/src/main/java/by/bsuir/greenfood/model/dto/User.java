package by.bsuir.greenfood.model.dto;

import by.bsuir.greenfood.model.enums.UserType;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Set;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
public class User {

  private UUID id;

  @NotNull
  private String iconUrl;

  private UserType userType;

  @NotNull
  private String username;

  @NotNull
  private String password;

  private Set<UUID> reviews;

  private Set<UUID> orders;
}
