package by.bsuir.greenfood.model.dto;

import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;
import jakarta.validation.constraints.NotNull;

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

  @NotNull
  private Double price;

  @NotNull
  private String address;

  private OffsetDateTime orderDate;
}
