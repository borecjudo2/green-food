package by.bsuir.greenfood.mapper;

import by.bsuir.greenfood.model.dto.Bag;
import by.bsuir.greenfood.model.entity.BagEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Mapper
public interface BagMapper {

  BagMapper INSTANCE = Mappers.getMapper(BagMapper.class);

  BagEntity dtoToEntity(Bag dto);

  Bag entityToDto(BagEntity entity);
}
