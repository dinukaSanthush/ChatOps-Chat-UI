$(function () {
    let dashboard_user = $('.dashboard-users');
    let chats = $('.chats');
    let attendance = $('.attendance');
    let user_manage = $('.user_manage');
    let user_report = $('.user_report');
    let navigate_location = $('#navigate-location');
    let user_add_form = $('#user_add_form');
    let manage_user_area = $('#manage-user-area');
    let manage_update_area = $('#user_update_form');

    dashboard_user.show();
    chats.hide();
    attendance.hide();
    user_manage.hide();
    user_report.hide();
    user_add_form.hide();
    manage_update_area.hide();


    $('#dashboard_nav').click(function () {
        navigate_location.text("DASHBOARD")
        chats.hide();
        attendance.hide();
        user_manage.hide();
        user_report.hide();
        dashboard_user.show();
    });
    $('#chats_nav').click(function () {
        navigate_location.text("CHATS")
        dashboard_user.hide();
        attendance.hide();
        user_manage.hide();
        user_report.hide();
        chats.show();
    });


    $('#manage_user').click(function () {
        navigate_location.text("MANAGE USERS")
        dashboard_user.hide();
        chats.hide();
        attendance.hide();
        user_report.hide();
        user_add_form.hide();
        manage_update_area.hide();
        user_manage.show();
        manage_user_area.show();
    });
    $('#reports_nav').click(function () {
        navigate_location.text("PROMETHEUS MONITORING REPORTS")
        dashboard_user.hide();
        chats.hide();
        user_manage.hide();
        attendance.hide();
        user_report.show();
    });
    $('#attendance_nav').click(function () {
        navigate_location.text("ATTENDANCE")
        dashboard_user.hide();
        chats.hide();
        user_manage.hide();
        user_report.hide();
        attendance.show();
    });

});
