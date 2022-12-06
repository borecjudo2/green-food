package by.bsuir.greenfood.mapper;

import by.bsuir.greenfood.model.dto.Order;
import by.bsuir.greenfood.model.entity.OrderEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Mapper
public interface OrderMapper {

  OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

  OrderEntity dtoToEntity(Order dto);

  Order entityToDto(OrderEntity entity);
}
