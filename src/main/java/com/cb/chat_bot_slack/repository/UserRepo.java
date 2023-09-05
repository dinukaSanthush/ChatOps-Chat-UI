package com.cb.chat_bot_slack.repository;

import com.cb.chat_bot_slack.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User findByUsernameOrEmail(String username, String email);

    User findByEmail(String email);

}
