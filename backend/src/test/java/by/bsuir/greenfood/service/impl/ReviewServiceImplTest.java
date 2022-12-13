package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.ReviewMapper;
import by.bsuir.greenfood.model.dto.Review;
import by.bsuir.greenfood.model.entity.ReviewEntity;
import by.bsuir.greenfood.repo.ReviewRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ReviewServiceImplTest {

  @InjectMocks
  private ReviewServiceImpl service;

  @Mock
  private ReviewMapper mapper;

  @Mock
  private ReviewRepository reviewRepository;

  @Test
  void createReview() {
    // given
    Review review = new Review();
    ReviewEntity reviewEntity = new ReviewEntity();
    when(mapper.dtoToEntity(review)).thenReturn(reviewEntity);
    when(reviewRepository.save(reviewEntity)).thenReturn(reviewEntity);
    when(mapper.entityToDto(reviewEntity)).thenReturn(review);

    // when
    Review createdReview = service.createReview(review);

    // then
    assertThat(createdReview).isEqualTo(review);
  }

  @Test
  void createReviewWithDbException() {
    // given
    Review review = new Review();
    ReviewEntity reviewEntity = new ReviewEntity();
    when(mapper.dtoToEntity(review)).thenReturn(reviewEntity);
    when(reviewRepository.save(reviewEntity)).thenThrow(new RuntimeException());

    // when -> then
    assertThatThrownBy(() -> service.createReview(review));
  }
}