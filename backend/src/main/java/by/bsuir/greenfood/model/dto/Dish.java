package by.bsuir.greenfood.model.dto;

import by.bsuir.greenfood.model.enums.DishType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;
import javax.validation.constraints.NotNull;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dish implements Serializable {

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
