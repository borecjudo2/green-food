package by.bsuir.greenfood.service;

import by.bsuir.greenfood.model.dto.Review;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface ReviewService {

  Review createReview(Review review);

  Review updateReview(Review review);

  Review getReviewById(UUID id);

  List<Review> getReviewsByCommenterId(UUID id);

  List<Review> getReviews();

  void deleteReview(UUID id);
}
