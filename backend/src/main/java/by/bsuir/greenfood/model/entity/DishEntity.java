package by.bsuir.greenfood.model.entity;

import by.bsuir.greenfood.model.enums.DishType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Entity
@Table(name = "dishes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DishEntity {

  @Id
  @GeneratedValue
  private UUID id;

  @Column(unique = true, nullable = false)
  private String name;

  @Column(unique = true, nullable = false)
  private String iconUrl;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private DishType dishType;

  @Column(nullable = false)
  private String description;

  @Column(nullable = false)
  private Double price;

  private Integer rate;
}
