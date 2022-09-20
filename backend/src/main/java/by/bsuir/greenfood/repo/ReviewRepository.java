package by.bsuir.greenfood.repo;

import by.bsuir.greenfood.model.entity.ReviewEntity;
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
public interface ReviewRepository extends JpaRepository<ReviewEntity, UUID> {

  default List<ReviewEntity> findAllByCommenterId(UUID commenterId) {
    // TODO: 9/20/2022
    return Collections.emptyList();
  }
}
