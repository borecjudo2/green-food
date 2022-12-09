package by.bsuir.greenfood.model.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
public class UserCredentials {

  @NotNull
  private String username;

  @NotNull
  private String password;
}
