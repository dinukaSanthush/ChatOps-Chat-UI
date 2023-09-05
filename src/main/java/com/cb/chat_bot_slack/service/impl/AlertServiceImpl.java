package com.cb.chat_bot_slack.service.impl;


import com.cb.chat_bot_slack.modal.AlertType;
import com.cb.chat_bot_slack.service.AlertService;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.util.retry.Retry;

@Service
@Slf4j
public class AlertServiceImpl implements AlertService {

    @Autowired
    @Qualifier("alertWebClient")
    private WebClient alertWebClient;

    @Override
    public JsonNode getAlertDetails(AlertType alertType) {

        return this.alertWebClient
                .get()
                .uri("?type=" + alertType.getAlertType())
                .retrieve()
                .bodyToMono(JsonNode.class)
                .retryWhen(Retry.max(5))
                .block();
    }

}
