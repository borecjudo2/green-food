package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.DishMapper;
import by.bsuir.greenfood.model.dto.Dish;
import by.bsuir.greenfood.model.entity.DishEntity;
import by.bsuir.greenfood.model.enums.DishType;
import by.bsuir.greenfood.repo.DishRepository;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class DishServiceImplTest {

  private static final UUID ID = UUID.fromString("3aae579c-b8c9-4bb6-8f7a-3b864c1a552e");
  private static final String NAME = "NAME";
  private static final String ICON_URL = "ICON_URL";
  private static final DishType DISH_TYPE = DishType.PLATTERS;
  private static final String DESCRIPTION = "DESCRIPTION";
  private static final Double PRICE = 100.0;


  @InjectMocks
  private DishServiceImpl service;

  @Mock
  private DishMapper mapper;

  @Mock
  private DishRepository dishRepository;

  @Test
  void testCreateDish() {
    // given
    when(dishRepository.findDishByName(anyString())).thenReturn(Optional.empty());

    Dish dishToCreate = getDish();
    DishEntity dishEntity = getDishEntity();
    when(mapper.dtoToEntity(dishToCreate)).thenReturn(dishEntity);
    when(dishRepository.save(dishEntity)).thenReturn(dishEntity);
    when(mapper.entityToDto(dishEntity)).thenReturn(dishToCreate);

    // when
    Dish createdDish = service.createDish(dishToCreate);

    // then
    assertThat(createdDish).isEqualTo(dishToCreate);
  }

  @Test
  void testCreateDishIfExist() {
    // given
    DishEntity dishEntity = getDishEntity();
    when(dishRepository.findDishByName(anyString())).thenReturn(Optional.of(dishEntity));

    Dish dishToCreate = getDish();
    when(mapper.entityToDto(dishEntity)).thenReturn(dishToCreate);

    // when
    Dish createdDish = service.createDish(dishToCreate);

    // then
    assertThat(createdDish).isEqualTo(dishToCreate);
  }

  @NotNull
  private Dish getDish() {
    return new Dish(ID, NAME, ICON_URL, DISH_TYPE, DESCRIPTION, PRICE);

  }

  @NotNull
  private DishEntity getDishEntity() {
    return new DishEntity(ID, NAME, ICON_URL, DISH_TYPE, DESCRIPTION, PRICE);
  }
}
