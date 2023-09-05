package com.cb.chat_bot_slack.service.impl;


import com.cb.chat_bot_slack.modal.ChatBotRequest;
import com.cb.chat_bot_slack.modal.ChatBotResponse;
import com.cb.chat_bot_slack.service.ChatService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
@Slf4j
public class ChatServiceImpl implements ChatService {

    @Autowired
    @Qualifier("chatWebClient")
    private WebClient chatWebClient;

    @Override
    public Mono<List<ChatBotResponse>> chatBotAction(ChatBotRequest chatBotRequest) {
        return chatWebClient.post()
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .body(Mono.just(chatBotRequest), ChatBotRequest.class)
                .retrieve().bodyToMono(new ParameterizedTypeReference<List<ChatBotResponse>>() {
                });
    }
}
