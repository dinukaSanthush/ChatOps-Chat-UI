package com.cb.chat_bot_slack.modal;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatBotRequest {

    private String sender;
    private String message;
    private String user_type;
}
