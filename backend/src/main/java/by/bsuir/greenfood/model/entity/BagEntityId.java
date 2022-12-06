package by.bsuir.greenfood.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
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
public class BagEntityId implements Serializable {

  private UUID userId;

  private UUID dishId;
}
