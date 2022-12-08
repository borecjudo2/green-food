package by.bsuir.greenfood.repo;

import by.bsuir.greenfood.model.entity.BagEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

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

  @Modifying
  @Query("delete from BagEntity bag where bag.userId=:userId and bag.dishId=:dishId")
  void deleteByUserIdAndDishId(UUID userId, UUID dishId);
}
