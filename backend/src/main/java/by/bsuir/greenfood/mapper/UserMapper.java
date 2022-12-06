package by.bsuir.greenfood.mapper;

import by.bsuir.greenfood.model.dto.User;
import by.bsuir.greenfood.model.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Mapper
public interface UserMapper {

  UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

  UserEntity dtoToEntity(User dto);

  User entityToDto(UserEntity entity);
}
