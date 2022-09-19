package by.bsuir.greenfood.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

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

  private boolean isAccountNonExpired = true;

  private boolean isAccountNonLocked = true;

  private boolean isCredentialsNonExpired = true;

  private boolean isEnabled = true;

  @Transient
  private Set<GrantedAuthority> authorities;

  @Column(unique = true)
  private String username;

  @Column(nullable = false)
  private String password;

  @OneToMany(mappedBy = "commenter", cascade = CascadeType.ALL)
  private Set<ReviewEntity> reviews;

  @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
  private Set<OrderEntity> orders;
}
