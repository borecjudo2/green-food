package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.BagMapper;
import by.bsuir.greenfood.model.dto.Bag;
import by.bsuir.greenfood.model.entity.BagEntity;
import by.bsuir.greenfood.repo.BagRepository;
import by.bsuir.greenfood.service.BagService;
import by.bsuir.greenfood.service.DishService;
import by.bsuir.greenfood.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Service
@RequiredArgsConstructor
public class BagServiceImpl implements BagService {

  private final BagMapper mapper;
  private final BagRepository repository;
  private final UserService userService;
  private final DishService dishService;

  @Autowired
  private BagService bagService;

  @Override
  @Transactional
  public void createBag(UUID userId, UUID dishId) {
    Bag bag = bagService.findByUserIdAndDishId(userId, dishId);

    if (bag != null) {
      bag.setCount(bag.getCount() + 1);
      repository.save(mapper.dtoToEntity(bag));
    } else {
      userService.getUserById(userId);
      dishService.getDishById(dishId);

      repository.save(new BagEntity(userId, dishId, 1));
    }
  }

  @Override
  @Transactional
  public List<Bag> findAllByUserId(UUID userId) {
    return repository.findAllByUserId(userId).stream()
        .map(mapper::entityToDto)
        .toList();
  }

  @Override
  @Transactional
  public Bag findByUserIdAndDishId(UUID userId, UUID dishId) {
    return repository.findByUserIdAndDishId(userId, dishId)
        .map(mapper::entityToDto)
        .orElse(null);
  }

  @Override
  public void deleteAllBagsByUserId(UUID userId) {
    repository.deleteAllByUserId(userId);
  }

  @Override
  public void deleteBag(UUID userId, UUID dishId) {
    repository.deleteByUserIdAndDishId(userId, dishId);
  }
}