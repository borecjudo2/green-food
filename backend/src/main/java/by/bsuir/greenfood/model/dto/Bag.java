package by.bsuir.greenfood.model.dto;

import lombok.Data;

import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
public class Bag {

  private UUID id;

  private UUID userId;

  private UUID dishId;
}
