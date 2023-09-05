


function chatSendBtnAction() {

    let userRole = $("#logged_user_role").text();
    let role = userRole.split("_")
    role = role[1].replace(']', '');

    $.ajax({
        type: "POST",
        url: baseURLAPI + 'chat-bot',
        contentType: "application/json",
        data: JSON.stringify({
            sender: role.toLowerCase() + "_" + $("#logged_user").text(),
            message: $("#chat_box_text").val()
        }),
        xhrFields: {
            withCredentials: true // Send cookies with the request
        },
        success: function (data) {
            messageLoading.hide();
            for (let i in data) {
                let response = data[i];

                let leftMsg = `<div class="msg left-msg">
                            <div class="msg-img"
                                 style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)">
                            </div>
                            <div class="msg-bubble">
                                <div class="msg-info">
                                    <div class="msg-info-name">BOT</div>
                                    <div class="msg-info-time">${formatDate(new Date())}</div>
                                </div>
                                <div class="msg-text">
                                     ${response['text']}
                                </div>
                            </div>
                        </div>`;

                $("#chat_bot_msg_body").append(leftMsg);

            }
        }
    });
}


$('#chat_bot_send_button').click(function () {

    let chatText = $("#chat_box_text").val();

    messageLoading.show();
    // let incrementID = 1;
    // let senderEle = "<li class=\"sender\">\n" +
    //     "<p>" + chatText + "</p>\n" +
    //     "<span class=\"time\">10:06 am</span>\n" +
    //     "</li>";
    //
    // let replyEle = "<li id=\"replyEle" + incrementID + "\" class=\"repaly\">\n" +
    //     "<p >" + chatText + "</p>\n" +
    //     "<span class=\"time\">10:20 am</span>\n" +
    //     "</li>";
    //
    // $("#chat_bot_msg_body").append(replyEle);
    //
    //
    // smooth("replyEle" + incrementID);
    // // console.log("Hello")
    // chatSendBtnAction();
    // messageLoading.hide();
    // ++incrementID;



    let rightMsg = `<div class="msg right-msg">
                            <div class="msg-img"
                                 style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"></div>
                            <div class="msg-bubble">
                                <div class="msg-info">
                                    <div class="msg-info-name">${$("#logged_user").text()}</div>
                                    <div class="msg-info-time">${formatDate(new Date())}</div>
                                </div>
                                <div class="msg-text">
                                   ${chatText}
                                </div>
                            </div>
                        </div>`;

    $("#chat_bot_msg_body").append(rightMsg);
    smooth("right-msg")
    // $(".right-msg").last().focus();
    // target.scrollIntoView({behavior: "smooth"}); // Smooth scrolling
    chatSendBtnAction();

});

function smooth(asd) {
    // let target =  $("."+asd);
    // let target = document.getElementsByClassName(asd);


    const target = Array.from(
        document.getElementsByClassName(asd)
    ).pop();
    target.focus();
    target.scrollIntoView({behavior: "smooth"}); // Smooth scrolling
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}

