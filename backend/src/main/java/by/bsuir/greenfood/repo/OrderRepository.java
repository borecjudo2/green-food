package by.bsuir.greenfood.repo;

import by.bsuir.greenfood.model.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface OrderRepository extends JpaRepository<OrderEntity, UUID> {

  default List<OrderEntity> findAllByOwnerId(UUID ownerId) {
    // TODO: 9/20/2022
    return Collections.emptyList();
  }
}
