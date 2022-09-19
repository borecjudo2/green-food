package by.bsuir.greenfood.repo;

import by.bsuir.greenfood.model.entity.DishEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface DishRepository extends JpaRepository<DishEntity, UUID> {
}
