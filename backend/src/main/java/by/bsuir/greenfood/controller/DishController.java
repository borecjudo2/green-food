package by.bsuir.greenfood.controller;

import by.bsuir.greenfood.model.dto.Dish;
import by.bsuir.greenfood.model.enums.DishType;
import by.bsuir.greenfood.service.DishService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@RestController
@RequestMapping("/dishes")
@RequiredArgsConstructor
public class DishController {

  private final DishService dishService;

  @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.CREATED)
  public Dish createDish(@Valid @RequestBody Dish dish) {
    return dishService.createDish(dish);
  }

  @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public Dish updateDish(@PathVariable UUID id, @Valid @RequestBody Dish dish) {
    return dishService.updateDish(id, dish);
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public List<Dish> getDishes(@RequestParam(required = false) DishType dishType) {
    return dishService.getDishes(dishType);
  }

  @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public Dish getDishesById(@PathVariable UUID id) {
    return dishService.getDishById(id);
  }

  @DeleteMapping(value = "/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteDishById(@PathVariable UUID id) {
    dishService.deleteDishById(id);
  }
}
