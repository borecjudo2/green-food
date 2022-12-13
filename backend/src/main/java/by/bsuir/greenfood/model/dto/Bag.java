package by.bsuir.greenfood.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bag {

  private Integer count;

  private UUID userId;

  private UUID dishId;
}
