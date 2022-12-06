package by.bsuir.greenfood.service;

import by.bsuir.greenfood.model.dto.Bag;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface BagService {

  void createBag(UUID userId, UUID dishId);

  List<Bag> findAllByUserId(UUID userId);

  List<Bag> findAllByUserIdAndDishId(UUID userId, UUID dishId);

  void deleteAllBagsByUserId(UUID userId);

  void deleteBag(UUID userId, UUID dishId);
}
