package by.bsuir.greenfood.service;

import by.bsuir.greenfood.model.dto.Dish;
import by.bsuir.greenfood.model.enums.DishType;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface DishService {

  Dish createDish(Dish dish);

  Dish updateDish(UUID id, Dish dish);

  List<Dish> getDishes(DishType dishType);

  Optional<Dish> getDishByName(String name);

  Dish getDishById(UUID id);

  void deleteDishById(UUID id);
}
