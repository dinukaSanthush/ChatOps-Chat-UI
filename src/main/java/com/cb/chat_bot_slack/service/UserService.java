package com.cb.chat_bot_slack.service;

import com.cb.chat_bot_slack.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;


public interface UserService {

    ResponseEntity<List<User>> getAllUser();

    ResponseEntity<User> createUser(User UserDTO);

    ResponseEntity<User> updateUser(Integer UserID, User UserDTO);

    Map<String, Boolean> deleteUser(Integer UserID);

    ResponseEntity<User> searchUser(Integer UserID);
}
