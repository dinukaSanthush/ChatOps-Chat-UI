//------------------------getAllUser-------------------------------------


function loadAllUsers() {
    $('#userTable').empty();

    $.ajax({
        type: "GET",
        url: baseURLAPI + 'user_details',
        async: true,
        dataType: "json",
        success: (response) => {
            console.log(response);
            for (let i in response) {
                let user = response[i];
                let userRoleString = "";

                let userID = user['id'];
                let userEmail = user['email'];
                let userName = user['name'];
                // let date = user[3];
                let userUserName = user['username'];
                // let startTime = user[5];

                if (user['roles'] !== undefined) {
                    let userRoles = user['roles'];
                    console.log(userRoles);
                    for (let role in userRoles) {
                        let userElement = userRoles[role];
                        console.log(userElement);
                        if (userRoles.length === 1) {
                            userRoleString = userRoleString.concat(userElement['name'], " ");
                        } else {
                            userRoleString = userRoleString.concat(userElement['name'], ",");
                        }
                    }
                }


                let tableRow = "<tr>" +
                    "<td class='text-center text-primary'>" + userID + "</td>" +
                    "<td class='text-center'>" + userEmail + "</td>" +
                    "<td class='text-center '>" + userName + "</td>" +
                    "<td class='text-center text-danger'>" + userUserName + "</td>" +
                    "<td class='text-center text-danger'>" + userRoleString + "</td>" +
                    " <td><button id=\"" + userID + "\" onclick=\"searchUser(this.id)\"><i class='fas fa-user-pen' ></i>EDIT</button>" +
                    "<button style='background-color: #fd0909;margin-left: 2px' id=\"" + userID + "\" " +
                    "onclick=\"doRemoveUserById(this.id)\"><i class='fas fa-trash-can'></i>DELETE</button></td>" +
                    // "<td class='text-center text-success'>" + time + "</td>" +
                    // "<td class='text-center text-success'>" + startTime + "</td>"+
                    "</tr>";

                $('#userTable').append(tableRow);
            }
        }
        , error: (error) => {
            console.log(error);
        }
    });
}

loadAllUsers();

$('#user_add_btn').click(function () {
    $('#manage-user-area').hide();
    $('#user_update_form').hide();
    $('#user_add_form').show();
});

$('#user_insert_action_btn').click(function () {

    let userInsertForm = $('#userInsertForm')[0];
    let fname = $('#fname').val();
    let username = $('#username').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let roles = $('#roles').val();
    let id;
    if (roles == "ADMIN") {
        id = 1;
    }
    if (roles == "DEV") {
        id = 2;
    }
    let formDataJSON = {
        'name': fname,
        'username': username,
        'email': email,
        'password': password,
        'roles': [{
            'id': id,
            'name': roles,
        }
        ]
    }
    console.log(formDataJSON);
    $.ajax({
        type: "POST",
        url: baseURLAPI + 'user-create',
        data: JSON.stringify(formDataJSON),
        async: true,
        contentType: 'application/json;',
        xhrFields: {
            withCredentials: true // Send cookies with the request
        },
        success: function (response) {
            if (response['email'] == email) {
                swal({
                    title: "Success...!",
                    text: `Your ${roles} account has been created..!`,
                    icon: "success",

                });
                userInsertForm.reset();
                loadAllUsers();
            }

        },
        error: function (er) {
            alert("added failed");
            swal({
                title: "Unsuccessful...!",
                text: "Please input details password again..!",
                icon: "error",
            });
        }
    });

});


function removeUserById(id) {
    $.ajax({
        type: "DELETE",
        url: baseURLAPI + 'user-details/' + id,
        dataType: 'json',
    }).done(function (data) {

        if (data['isDeleted']) {
            // alert("deleted");
            swal({
                title: "Success...!",
                text: `Your account has been deleted..!`,
                icon: "success",

            });
            loadAllUsers();
        } else {
            // alert("not deleted");
            swal({
                title: 'User account not Deleted.!',
                text: 'User account delete unsuccessful..!',
                icon: 'error'
            })
        }
    });


}


function doRemoveUserById(id) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this account details!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                removeUserById(id);
            } else {
                swal("Your user account is safe!");
            }
        });
}


function updateOrderByID(userID) {

    let editUserForm = $('#userUpdateForm')[0];

    let fname = $('#edit_fname').val();
    let username = $('#edit_username').val();
    let email = $('#edit_email').val();
    let password = $('#edit_password').val();
    let roles = $('#edit_roles').val();
    let id;
    if (roles == "ADMIN") {
        id = 1;
    }
    if (roles == "DEV") {
        id = 2;
    }
    let editedFormDataJSON = {
        'name': fname,
        'username': username,
        'email': email,
        'password': password,
        'roles': [{
            'id': id,
            'name': roles,
        }
        ]
    }
    $.ajax({
        type: "PUT",
        url: baseURLAPI + 'user-details/' + userID,
        async: true,
        dataType: 'json',
        data: JSON.stringify(editedFormDataJSON),
        contentType: 'application/json;',
    }).done(function (data) {
        if(data['id'] == userID) {

            console.log(data)
            swal({
                title: "Success...!",
                text: `Your account has been updated..!`,
                icon: "success",

            });
            editUserForm.reset()
            $('#edit_user_id').text("");
            loadAllUsers();
        }else{
            swal({
                title: "Unsuccessful...!",
                text: `Your account hasn't been updated..!`,
                icon: "error",

            });
        }
    });
}

function searchUser(userID) {
    $.ajax({
        type: "GET",
        url: baseURLAPI + 'user-details/' + userID,
        dataType: 'json',
    }).done(function (data) {
        console.log(data);

        $('#edit_fname').val(data['name']);
        $('#edit_username').val(data['username']);
        $('#edit_email').val(data['email']);
        $('#edit_password').val(data['password']);
        // $('#edit_roles').val(data['roles']);
        $('#roles').val(data['roles']);
        $('#edit_user_id').text(userID);
        $('#manage-user-area').hide();
        $('#user_update_form').show();

    });
}

$('#user_edit_action_btn').click(function () {

    updateOrderByID($('#edit_user_id').text());
    $('#userUpdateForm')[0].reset();
});
