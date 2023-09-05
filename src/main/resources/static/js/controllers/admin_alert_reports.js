$(function () {
    $('#alert_detail').empty();
    $('#alert_detail_status').empty();

    let alertArea = $('#alert_area');

    function loadAllAlerts() {

        alertArea.empty();

        let formData = {alertType: "alert"};
        $.ajax({
            type: "GET",
            url: baseURLAPI + 'alert-manager/' + formData.alertType,
            async: true,
            dataType: "json",
            success: (response) => {
                console.log(response);
                console.log(response['status']);
                console.log(response['data'].groups);
                let groups = response['data'].groups;

                for (let i in groups) {
                    let group = groups[i];
                    console.log(group);
                    let alertName = group['name'];
                    console.log(alertName);
                    let alertFile = group['file'];
                    let interval = group['interval'];
                    let limit = group['limit'];
                    let evaluationTime = group['evaluationTime'];
                    let lastEvaluation = group['lastEvaluation'];


                    let rules = group['rules'];

                    console.log(rules);

                    for (let z in rules) {
                        let rule = rules[z];

                        let state = rule.state
                        console.log(state);
                        let name = rule['name']
                        console.log(name);
                        let type = rule['type']
                        let lastEvaluation = rule['lastEvaluation']
                        let evaluationTime = rule['evaluationTime']
                        let health = rule['health']

                        // input from the user
                        const min = parseInt("1");
                        const max = parseInt("5");

// generating a random number
                        const a = Math.floor(Math.random() * (max - min + 1)) + min;


                        let alertDiv = `<div class="card card-${a}">
                                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                                <h2 class="card__title" id="alert_detail-${z}">ALERT NAME :<span style="color: grey">${name}</span><br>  STATE : <span style="color: firebrick">${state}</span></h2>
                                <p class="card__apply">
                                <h2 id="alert_detail_status-" ${z}> HEALTH : <span style="color: grey">${health}</span></h2>
                                <h2 id="alert_detail_status-" ${z}> LAST EVALUATION :<span style="color: brown">${lastEvaluation}</span> </h2>
                                </p>
                            </div>`;

                        alertArea.append(alertDiv);

                    }


                }


                //     let userRoleString = "";
                //
                //     let userID = user['id'];
                //     let userEmail = user['email'];
                //     let userName = user['name'];
                //     // let date = user[3];
                //     let userUserName = user['username'];
                //     // let startTime = user[5];
                //
                //     if (user['roles'] !== undefined) {
                //         let userRoles = user['roles'];
                //         console.log(userRoles);
                //         for (let role in userRoles) {
                //             let userElement = userRoles[role];
                //             console.log(userElement);
                //             if (userRoles.length === 1) {
                //                 userRoleString = userRoleString.concat(userElement['name'], " ");
                //             } else {
                //                 userRoleString = userRoleString.concat(userElement['name'], ",");
                //             }
                //         }
                //     }
                //
                //
                //     let tableRow = "<tr>" +
                //         "<td class='text-center text-primary'>" + userID + "</td>" +
                //         "<td class='text-center'>" + userEmail + "</td>" +
                //         "<td class='text-center '>" + userName + "</td>" +
                //         "<td class='text-center text-danger'>" + userUserName + "</td>" +
                //         "<td class='text-center text-danger'>" + userRoleString + "</td>" +
                //         " <td><button id=\"" + userID + "\" onclick=\"searchUser(this.id)\"><i class='fas fa-user-pen' ></i>EDIT</button>" +
                //         "<button style='background-color: #fd0909;margin-left: 2px' id=\"" + userID + "\" " +
                //         "onclick=\"doRemoveUserById(this.id)\"><i class='fas fa-trash-can'></i>DELETE</button></td>" +
                //         // "<td class='text-center text-success'>" + time + "</td>" +
                //         // "<td class='text-center text-success'>" + startTime + "</td>"+
                //         "</tr>";
                //
                //     $('#alert_detail_2').append(tableRow);
                // }
            }
            , error: (error) => {
                console.log(error);
            }
        });
    }

    loadAllAlerts();
});














