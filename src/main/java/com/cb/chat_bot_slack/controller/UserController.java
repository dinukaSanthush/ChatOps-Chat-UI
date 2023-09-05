package com.cb.chat_bot_slack.controller;


import com.cb.chat_bot_slack.entity.User;
import com.cb.chat_bot_slack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:8080")
public class UserController {


    @Autowired
    private UserService userService;


    /**
     * this method for all existing users
     *
     * @return all users
     */
    @GetMapping("/user_details")
    public ResponseEntity<List<User>> getAllUsers() {
        return userService.getAllUser();
    }

    /**
     * this method for create a new user
     *
     * @param user type {@link User}
     * @return newly created user
     */
    @PostMapping("/user-create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        System.out.println("USER = [" + user + "]");
        return userService.createUser(user);
    }

    /**
     * this method for update exist user details
     *
     * @param userID  type {@link Integer}
     * @param userDTO type {@link User}
     * @return updated user
     */
    @PutMapping("/user-details/{userID}")
    public ResponseEntity<User> updateUser(@PathVariable("userID") Integer userID,
                                           @RequestBody User userDTO) {
        System.out.println("USER DTO = [" + userDTO + "]");

        return userService.updateUser(userID, userDTO);
    }

    /**
     * this method for delete user
     *
     * @param userID type {@link Integer}
     * @return boolean
     */
        @DeleteMapping("user-details/{userID}")
    public Map<String, Boolean> deleteUser(@PathVariable("userID") Integer userID) {
        return userService.deleteUser(userID);
    }

    /**
     * this method for get specific user
     *
     * @param userID type {@link Integer}
     * @return specific user
     */
    @GetMapping("/user-details/{userID}")
    public ResponseEntity<User> searchUser(@PathVariable("userID") Integer userID) {
        return userService.searchUser(userID);
    }
}
