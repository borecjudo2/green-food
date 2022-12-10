package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.OrderMapper;
import by.bsuir.greenfood.model.dto.Bag;
import by.bsuir.greenfood.model.dto.Order;
import by.bsuir.greenfood.model.entity.OrderEntity;
import by.bsuir.greenfood.repo.OrderRepository;
import by.bsuir.greenfood.service.BagService;
import by.bsuir.greenfood.service.OrderService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
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

  private static final ObjectMapper MAPPER = new ObjectMapper();

  private final OrderMapper mapper;

  private final OrderRepository orderRepository;
  private final BagService bagService;

  @Override
  @Transactional
  @SneakyThrows
  public Order createOrder(Order order) {
    OrderEntity orderForCreate = mapper.dtoToEntity(order);
    List<Bag> bagList = bagService.findAllByUserId(order.getUserId());

    orderForCreate.setData(bagList);
    orderForCreate.setOrderDate(OffsetDateTime.now());
    orderForCreate.setPrice(bagService.sumBags(order.getUserId()));

    Order createdOrder = mapper.entityToDto(orderRepository.save(orderForCreate));

    bagService.deleteAllBagsByUserId(order.getUserId());

    return createdOrder;
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
