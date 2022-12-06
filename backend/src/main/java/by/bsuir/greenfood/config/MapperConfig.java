package by.bsuir.greenfood.config;

import by.bsuir.greenfood.mapper.BagMapper;
import by.bsuir.greenfood.mapper.DishMapper;
import by.bsuir.greenfood.mapper.OrderMapper;
import by.bsuir.greenfood.mapper.ReviewMapper;
import by.bsuir.greenfood.mapper.UserMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Configuration
public class MapperConfig {

  @Bean
  public UserMapper userMapper() {
    return UserMapper.INSTANCE;
  }

  @Bean
  public DishMapper dishMapper() {
    return DishMapper.INSTANCE;
  }

  @Bean
  public OrderMapper orderMapper() {
    return OrderMapper.INSTANCE;
  }

  @Bean
  public ReviewMapper reviewMapper() {
    return ReviewMapper.INSTANCE;
  }

  @Bean
  public BagMapper bagMapper() {
    return BagMapper.INSTANCE;
  }
}
