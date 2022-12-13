package by.bsuir.greenfood.service.impl;

import by.bsuir.greenfood.mapper.OrderMapper;
import by.bsuir.greenfood.model.dto.Bag;
import by.bsuir.greenfood.model.dto.Order;
import by.bsuir.greenfood.model.entity.OrderEntity;
import by.bsuir.greenfood.repo.OrderRepository;
import by.bsuir.greenfood.service.BagService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class OrderServiceImplTest {

  private static final UUID USER_ID = UUID.fromString("3239b41c-5088-4001-b1e6-cd8505510195");
  private static final UUID DISH_ID = UUID.fromString("3aae579c-b8c9-4bb6-8f7a-3b864c1a552e");

  @InjectMocks
  private OrderServiceImpl service;

  @Mock
  private OrderMapper mapper;

  @Mock
  private OrderRepository orderRepository;

  @Mock
  private BagService bagService;

  @Test
  void testCreateOrder() {
    // given
    Order orderToCreate = new Order();
    orderToCreate.setUserId(USER_ID);

    OrderEntity mappedOrderEntity = new OrderEntity();
    mappedOrderEntity.setUserId(USER_ID);

    when(mapper.dtoToEntity(orderToCreate)).thenReturn(mappedOrderEntity);
    when(bagService.findAllByUserId(USER_ID)).thenReturn(List.of(new Bag()));
    when(orderRepository.save(any())).thenReturn(mappedOrderEntity);
    when(mapper.entityToDto(mappedOrderEntity)).thenReturn(orderToCreate);

    // when
    Order createdOrder = service.createOrder(orderToCreate);

    // then
    assertThat(createdOrder).isEqualTo(orderToCreate);
    verify(bagService).deleteAllBagsByUserId(USER_ID);
  }

  @Test
  void testCreateOrderWithDbException() {
    // given
    Order orderToCreate = new Order();
    orderToCreate.setUserId(USER_ID);

    OrderEntity mappedOrderEntity = new OrderEntity();
    mappedOrderEntity.setUserId(USER_ID);

    when(mapper.dtoToEntity(orderToCreate)).thenReturn(mappedOrderEntity);
    when(bagService.findAllByUserId(USER_ID)).thenThrow(new RuntimeException());

    // when -> then
    assertThatThrownBy(() -> service.createOrder(orderToCreate));
    verify(bagService, never()).deleteAllBagsByUserId(USER_ID);
  }
}