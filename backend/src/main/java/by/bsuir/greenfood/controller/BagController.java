package by.bsuir.greenfood.controller;

import by.bsuir.greenfood.model.dto.Bag;
import by.bsuir.greenfood.service.BagService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
@RequestMapping("/users/{userId}/dishes")
@RequiredArgsConstructor
public class BagController {

  private final BagService service;

  @PostMapping(value = "/{dishId}", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.CREATED)
  public void createBag(@PathVariable UUID userId, @PathVariable UUID dishId) {
    service.createBag(userId, dishId);
  }

  @GetMapping(value = "/count", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public int countBags(@PathVariable UUID userId) {
    return service.countBags(userId);
  }

  @GetMapping(value = "/sum", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public Double sumBags(@PathVariable UUID userId) {
    return service.sumBags(userId);
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public List<Bag> findAllByUserId(@PathVariable UUID userId) {
    return service.findAllByUserId(userId);
  }

  @GetMapping(value = "/{dishId}", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public Bag findByUserIdAndDishId(@PathVariable UUID userId, @PathVariable UUID dishId) {
    return service.findByUserIdAndDishId(userId, dishId);
  }

  @DeleteMapping
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteAllBagsByUserId(@PathVariable UUID userId) {
    service.deleteAllBagsByUserId(userId);
  }

  @DeleteMapping(value = "/{dishId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteBag(@PathVariable UUID userId, @PathVariable UUID dishId) {
    service.deleteBag(userId, dishId);
  }
}
