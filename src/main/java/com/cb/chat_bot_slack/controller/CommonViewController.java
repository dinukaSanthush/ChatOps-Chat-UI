package com.cb.chat_bot_slack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin("http://localhost:8080")
public class CommonViewController {
    /**
     * this method for render the file view
     * @return chat_bot.html
     */
    @RequestMapping("/chat_bot")
    public ModelAndView index() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("chat_bot.html");
        return modelAndView;
    }

    /**
     * this method for render the file view
     * @return user_dashboard.html
     */
    @RequestMapping("/user-dashboard")
    public ModelAndView userDashboard() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("user_dashboard.html");
        return modelAndView;
    }

    /**
     * this method for render the file view
     * @return admin_dashboard.html
     */
    @RequestMapping("/admin-dashboard")
    public ModelAndView adminDashboard() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin_dashboard.html");
        return modelAndView;
    }

    /**
     * this method for render the file view
     * @return login.html
     */
    @RequestMapping("/login")
    public ModelAndView userLogin() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login.html");
        return modelAndView;
    }

    /**
     * this method for render the file view
     * @return sign_up.html
     */
    @RequestMapping("/signup")
    public ModelAndView userSignup() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("signup.html");
        return modelAndView;
    }


}
