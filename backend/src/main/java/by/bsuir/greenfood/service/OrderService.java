package by.bsuir.greenfood.service;

import by.bsuir.greenfood.model.dto.Order;

import java.util.List;
import java.util.UUID;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface OrderService {

  Order createOrder(Order order);

  Order updateOrder(Order order);

  Order getOrderById(UUID id);

  List<Order> getOrdersByOwnerId(UUID id);

  List<Order> getOrders();

  void deleteOrder(UUID id);
}
