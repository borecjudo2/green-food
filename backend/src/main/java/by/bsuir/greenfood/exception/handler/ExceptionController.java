package by.bsuir.greenfood.exception.handler;

import by.bsuir.greenfood.exception.model.Error;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
@Slf4j
@RestControllerAdvice
public class ExceptionController {

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public Error handleRuntimeException(Exception exception) {
    log.error(exception.getLocalizedMessage(), exception);

    return new Error(exception.getLocalizedMessage());
  }
}
