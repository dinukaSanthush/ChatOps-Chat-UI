package com.cb.chat_bot_slack.controller;


import com.cb.chat_bot_slack.modal.AlertType;
import com.cb.chat_bot_slack.modal.ChatBotRequest;
import com.cb.chat_bot_slack.modal.ChatBotResponse;
import com.cb.chat_bot_slack.service.impl.AlertServiceImpl;
import com.cb.chat_bot_slack.service.impl.ChatServiceImpl;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:8080/")
public class AlertController {


    @Autowired
    private AlertServiceImpl alertService;


    @GetMapping("/alert-manager/{alertType}")
    public JsonNode getAlerts(@PathVariable("alertType") AlertType alertType) {
        return alertService.getAlertDetails(alertType);
    }

}
