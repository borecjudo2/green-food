package by.bsuir.greenfood.mapper;

import by.bsuir.greenfood.model.dto.Review;
import by.bsuir.greenfood.model.entity.ReviewEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Mapper
public interface ReviewMapper {

  ReviewMapper INSTANCE = Mappers.getMapper(ReviewMapper.class);

  ReviewEntity dtoToEntity(Review groupDto);

  Review entityToDto(ReviewEntity group);
}
