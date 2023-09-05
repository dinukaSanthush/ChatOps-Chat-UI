$(function () {
    let dashboard_user = $('.dashboard-users');
    let chats = $('.chats');
    let attendance = $('.attendance');
    // let user_manage = $('.user_manage');
    let user_report = $('.user_report');
    let navigate_location = $('#navigate-location');

    dashboard_user.show();
    chats.hide();
    attendance.hide();
    // user_manage.hide();
    user_report.hide();


    $('#dashboard_nav').click(function () {
        navigate_location.text("DASHBOARD")
        chats.hide();
        attendance.hide();
        user_report.hide();
        dashboard_user.show();
    });
    $('#chats_nav').click(function () {
        navigate_location.text("CHATS")
        dashboard_user.hide();
        attendance.hide();
        user_report.hide();
        chats.show();
    });

    $('#reports_nav').click(function () {
        navigate_location.text("REPORTS")
        dashboard_user.hide();
        chats.hide();
        attendance.hide();
        user_report.show();
    });
    $('#attendance_nav').click(function () {
        navigate_location.text("ATTENDANCE")
        dashboard_user.hide();
        chats.hide();
        user_report.hide();
        attendance.show();
    });

});
