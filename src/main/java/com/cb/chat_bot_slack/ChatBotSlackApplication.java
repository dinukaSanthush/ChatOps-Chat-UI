package com.cb.chat_bot_slack;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class ChatBotSlackApplication {

    @Value("${chat.url}")
    private String chatUrl;

    @Value("${alert.manager.url}")
    private String alertManagerUrl;

    public static void main(String[] args) {
        SpringApplication.run(ChatBotSlackApplication.class, args);
    }


    @Bean
    @Qualifier("chatWebClient")
    public WebClient getChatWebClient(){

        return WebClient.builder()
                .baseUrl(chatUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    @Bean
    @Qualifier("alertWebClient")
    public WebClient getAlertWebClient(){

        return WebClient.builder()
                .baseUrl(alertManagerUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }
}
