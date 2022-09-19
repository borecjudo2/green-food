package by.bsuir.greenfood.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Getter
@AllArgsConstructor
public enum UserType {

  ADMIN(Set.of(new SimpleGrantedAuthority("ROLE_ADMIN"))),
  USER(Set.of(new SimpleGrantedAuthority("ROLE_USER")));

  private final Set<SimpleGrantedAuthority> authority;
}
