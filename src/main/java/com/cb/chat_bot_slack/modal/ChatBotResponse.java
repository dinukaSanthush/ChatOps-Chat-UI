package com.cb.chat_bot_slack.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatBotResponse {

    private String recipient_id;
    private String text;

}
