package com.cb.chat_bot_slack.service;


import com.cb.chat_bot_slack.modal.AlertType;
import com.fasterxml.jackson.databind.JsonNode;

public interface AlertService {

    JsonNode getAlertDetails(AlertType alertType);
}
