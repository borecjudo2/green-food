package by.bsuir.greenfood.security.config;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configuration class for Spring Security.
 *
 * @author Vladislav Karpeka
 * @since 1.0.0
 */
@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class ApplicationSecurityConfig {

  private final PasswordEncoder passwordEncoder;

  private final UserDetailsService userDetailsService;

  @Bean
  public DaoAuthenticationProvider daoAuthenticationProvider() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setPasswordEncoder(passwordEncoder);
    provider.setUserDetailsService(userDetailsService);

    return provider;
  }

  @Bean
  public AuthenticationManager authManager(HttpSecurity http) throws Exception {
    AuthenticationManagerBuilder authenticationManagerBuilder =
        http.getSharedObject(AuthenticationManagerBuilder.class);
    authenticationManagerBuilder.authenticationProvider(daoAuthenticationProvider());
    return authenticationManagerBuilder.build();
  }

  //  @Bean
  //  public CorsConfigurationSource corsConfigurationSource() {
  //    CorsConfiguration configuration = new CorsConfiguration();
  //    configuration.setAllowedOrigins(List.of("http://localhost:3000"));
  //    //    configuration.setAllowedMethods(Arrays.asList("GET","POST"));
  //    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  //    source.registerCorsConfiguration("/**", configuration);
  //    return source;
  //  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .authorizeHttpRequests(authorize ->
            authorize.requestMatchers(HttpMethod.GET, "/dishes")
                .permitAll()
                .requestMatchers(HttpMethod.GET, "/reviews")
                .permitAll()
                .requestMatchers(HttpMethod.POST, "/dishes").hasRole("ADMIN")
                .anyRequest()
                .authenticated()
        )
        .httpBasic();

    return http.build();
  }
}
