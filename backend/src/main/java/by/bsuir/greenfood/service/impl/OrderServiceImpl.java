package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.OrderMapper;
import by.bsuir.greenfood.model.dto.Order;
import by.bsuir.greenfood.model.entity.OrderEntity;
import by.bsuir.greenfood.repo.OrderRepository;
import by.bsuir.greenfood.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

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
public class OrderServiceImpl implements OrderService {

  private final OrderMapper mapper;

  private final OrderRepository orderRepository;

  @Override
  public Order createOrder(Order order) {
    OrderEntity orderForCreate = mapper.dtoToEntity(order);
    return mapper.entityToDto(orderRepository.save(orderForCreate));
  }

  @Override
  public Order updateOrder(Order order) {
    getOrderById(order.getId());

    OrderEntity orderForUpdate = mapper.dtoToEntity(order);
    return mapper.entityToDto(orderRepository.save(orderForUpdate));
  }

  @Override
  public Order getOrderById(UUID id) {
    return orderRepository.findById(id).map(mapper::entityToDto)
        .orElseThrow(() -> new UsernameNotFoundException("Order not found with id " + id));
  }

  @Override
  public List<Order> getOrdersByOwnerId(UUID id) {
    return orderRepository.findAllByOwnerId(id).stream().map(mapper::entityToDto).toList();
  }

  @Override
  public List<Order> getOrders() {
    return orderRepository.findAll().stream().map(mapper::entityToDto).toList();
  }

  @Override
  public void deleteOrder(UUID id) {
    orderRepository.deleteById(id);
  }
}
