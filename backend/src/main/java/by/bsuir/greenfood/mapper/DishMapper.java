package by.bsuir.greenfood.mapper;

import by.bsuir.greenfood.model.dto.Dish;
import by.bsuir.greenfood.model.entity.DishEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Mapper
public interface DishMapper {

  DishMapper INSTANCE = Mappers.getMapper(DishMapper.class);

  DishEntity dtoToEntity(Dish groupDto);

  Dish entityToDto(DishEntity group);
}
