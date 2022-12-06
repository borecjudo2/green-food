package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.DishMapper;
import by.bsuir.greenfood.model.dto.Dish;
import by.bsuir.greenfood.model.entity.DishEntity;
import by.bsuir.greenfood.model.enums.DishType;
import by.bsuir.greenfood.repo.DishRepository;
import by.bsuir.greenfood.service.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import javax.persistence.EntityNotFoundException;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Service
@RequiredArgsConstructor
public class DishServiceImpl implements DishService {

  private final DishMapper mapper;

  private final DishRepository dishRepository;

  @Override
  public Dish createDish(Dish dish) {
    Optional<Dish> createdDish = getDishByName(dish.getName());
    if (createdDish.isPresent()) {
      return createdDish.get();
    }

    DishEntity dishEntity = mapper.dtoToEntity(dish);
    return mapper.entityToDto(dishRepository.save(dishEntity));
  }

  @Override
  public Dish updateDish(Dish dish) {
    getDishById(dish.getId());

    DishEntity dishToUpdate = mapper.dtoToEntity(dish);
    return mapper.entityToDto(dishRepository.save(dishToUpdate));
  }

  @Override
  public List<Dish> getDishes() {
    return dishRepository.findAll().stream()
        .map(mapper::entityToDto)
        .toList();
  }

  @Override
  public List<Dish> getDishesByDishType(DishType dishType) {
    return dishRepository.findAllByDishType(dishType).stream()
        .map(mapper::entityToDto)
        .toList();
  }

  @Override
  public Optional<Dish> getDishByName(String name) {
    return dishRepository.findDishByName(name)
        .map(mapper::entityToDto);
  }

  @Override
  @Transactional
  public Dish getDishById(UUID id) {
    return dishRepository.findById(id)
        .map(mapper::entityToDto)
        .orElseThrow(() -> new EntityNotFoundException("User not found with id " + id));
  }

  @Override
  public void deleteDishById(UUID id) {
    dishRepository.deleteById(id);
  }
}
