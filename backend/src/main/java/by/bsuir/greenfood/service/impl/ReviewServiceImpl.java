package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.ReviewMapper;
import by.bsuir.greenfood.model.dto.Review;
import by.bsuir.greenfood.model.entity.ReviewEntity;
import by.bsuir.greenfood.repo.ReviewRepository;
import by.bsuir.greenfood.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {

  private final ReviewMapper mapper;

  private final ReviewRepository reviewRepository;

  @Override
  public Review createReview(Review review) {
    ReviewEntity reviewForCreate = mapper.dtoToEntity(review);

    reviewForCreate.setReviewDate(OffsetDateTime.now());

    return mapper.entityToDto(reviewRepository.save(reviewForCreate));
  }

  @Override
  public Review updateReview(Review review) {
    getReviewById(review.getId());

    ReviewEntity reviewForUpdate = mapper.dtoToEntity(review);
    return mapper.entityToDto(reviewRepository.save(reviewForUpdate));
  }

  @Override
  public Review getReviewById(UUID id) {
    return reviewRepository.findById(id).map(mapper::entityToDto)
        .orElseThrow(() -> new UsernameNotFoundException("Review not found with id " + id));
  }

  @Override
  public List<Review> getReviewsByCommenterId(UUID id) {
    return reviewRepository.findAllByCommenterId(id).stream().map(mapper::entityToDto).toList();
  }

  @Override
  public List<Review> getReviews() {
    return reviewRepository.findAll().stream()
        .sorted(Comparator.comparing(ReviewEntity::getReviewDate).reversed())
        .map(mapper::entityToDto)
        .toList();
  }

  @Override
  public void deleteReview(UUID id) {
    reviewRepository.deleteById(id);
  }
}
