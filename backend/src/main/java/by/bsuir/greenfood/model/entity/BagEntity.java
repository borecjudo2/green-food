package by.bsuir.greenfood.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Entity
@Table(name = "bags")
@IdClass(BagEntityId.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BagEntity {

  @Id
  private UUID userId;

  @Id
  private UUID dishId;

  @Column(nullable = false)
  private Integer count;
}
