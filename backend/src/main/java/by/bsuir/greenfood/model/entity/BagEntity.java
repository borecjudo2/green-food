package by.bsuir.greenfood.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

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
