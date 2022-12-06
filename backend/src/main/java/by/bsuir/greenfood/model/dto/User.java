package by.bsuir.greenfood.model.dto;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.Set;
import java.util.UUID;
import javax.validation.constraints.NotNull;

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
  private String username;

  @NotNull
  private String password;

  private Set<Review> reviews;

  private Set<Order> orders;
}
