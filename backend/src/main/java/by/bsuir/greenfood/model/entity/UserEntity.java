package by.bsuir.greenfood.model.entity;

import by.bsuir.greenfood.model.enums.UserType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity implements UserDetails {

  @Id
  @GeneratedValue
  private UUID id;

  @Column(nullable = false)
  private boolean isAccountNonExpired;

  @Column(nullable = false)
  private boolean isAccountNonLocked;

  @Column(nullable = false)
  private boolean isCredentialsNonExpired;

  @Column(nullable = false)
  private boolean isEnabled;

  @Column(nullable = false)
  private String iconUrl;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private UserType userType;

  @Column(unique = true)
  private String username;

  @Column(nullable = false)
  private String password;

  @ElementCollection(targetClass = UUID.class)
  @CollectionTable(name = "reviews", joinColumns = @JoinColumn(name = "userId"))
  @Column(name = "id")
  private Set<UUID> reviews;

  @ElementCollection(targetClass = UUID.class)
  @CollectionTable(name = "orders", joinColumns = @JoinColumn(name = "userId"))
  @Column(name = "id")
  private Set<UUID> orders;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return userType != null ? userType.getAuthority() : Collections.emptySet();
  }
}
