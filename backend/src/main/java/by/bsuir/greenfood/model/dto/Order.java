package by.bsuir.greenfood.model.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
public class Order {

  private UUID id;

  @NotNull
  private UUID userId;

  private String data;

  private Double price;

  @NotNull
  private String address;

  private OffsetDateTime orderDate;
}
