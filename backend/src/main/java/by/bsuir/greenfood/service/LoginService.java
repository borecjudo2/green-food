package by.bsuir.greenfood.service;

import by.bsuir.greenfood.model.dto.UserCredentials;
import by.bsuir.greenfood.model.dto.User;

/**
 * DESCRIPTION
 *
 * @author Vladislav_Karpeka
 * @version 1.0.0
 */
public interface LoginService {

  User login(UserCredentials userCredentials);
}
