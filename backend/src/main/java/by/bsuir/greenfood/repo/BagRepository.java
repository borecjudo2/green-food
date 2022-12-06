package by.bsuir.greenfood.repo;

import by.bsuir.greenfood.model.entity.BagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface BagRepository extends JpaRepository<BagEntity, UUID> {

  List<BagEntity> findAllByUserId(UUID userId);

  Optional<BagEntity> findByUserIdAndDishId(UUID userId, UUID dishId);

  void deleteAllByUserId(UUID userId);

  void deleteByUserIdAndDishId(UUID userId, UUID dishId);
}
