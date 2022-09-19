package by.bsuir.greenfood.model.dto;

import by.bsuir.greenfood.model.enums.DishType;
import lombok.Data;

import java.util.UUID;
import javax.validation.constraints.NotNull;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
public class Dish {

  private UUID id;

  @NotNull
  private String name;

  @NotNull
  private String iconUrl;

  @NotNull
  private DishType dishType;

  @NotNull
  private String description;

  @NotNull
  private Double price;
}
