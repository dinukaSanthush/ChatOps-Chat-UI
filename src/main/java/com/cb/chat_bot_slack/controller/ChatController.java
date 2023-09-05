package com.cb.chat_bot_slack.controller;


import com.cb.chat_bot_slack.modal.ChatBotRequest;
import com.cb.chat_bot_slack.modal.ChatBotResponse;
import com.cb.chat_bot_slack.service.impl.ChatServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:8080/")
public class ChatController {


    @Autowired
    private ChatServiceImpl chatService;


    @PostMapping("/chat-bot")
    public Mono<List<ChatBotResponse>> createChat(@RequestBody ChatBotRequest chatBotRequest) {
        return chatService.chatBotAction(chatBotRequest);
    }

}
