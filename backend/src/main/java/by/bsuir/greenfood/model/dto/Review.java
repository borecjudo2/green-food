package by.bsuir.greenfood.model.dto;

import lombok.Data;

import java.time.OffsetDateTime;
import java.util.UUID;
import javax.validation.constraints.NotNull;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Data
public class Review {

  private UUID id;

  @NotNull
  private User commenter;

  @NotNull
  private String review;

  private OffsetDateTime reviewDate;
}
