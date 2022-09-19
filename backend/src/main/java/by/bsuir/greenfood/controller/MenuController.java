package by.bsuir.greenfood.controller;

import by.bsuir.greenfood.model.dto.Dish;
import by.bsuir.greenfood.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@RestController
@RequestMapping("/menu")
@RequiredArgsConstructor
public class MenuController {

  private final MenuService menuService;

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  public List<Dish> getDishes() {
    return menuService.getDishes();
  }
}
