package com.cb.chat_bot_slack.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserDetailsService userDetailsService;
    private final CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;


    @Autowired
    public SecurityConfig(UserDetailsService userDetailsService, CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler) {
        this.userDetailsService = userDetailsService;
        this.customAuthenticationSuccessHandler = customAuthenticationSuccessHandler;
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterSecurity(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests((authorize) ->
                                authorize
                                        // Allow these URLs to be accessed without authentication
                                        .requestMatchers("signup").permitAll()
                                        .requestMatchers("admin-dashboard").hasRole("ADMIN")
                                        .requestMatchers("user-dashboard").hasRole("DEV")
//                                .requestMatchers("admin-dashboard").permitAll()
//                                .requestMatchers("user-dashboard").permitAll()
//                                .requestMatchers("dashboard").permitAll()
//                                .requestMatchers("api/*").permitAll()
//                                        .requestMatchers(HttpMethod.POST, "api/chat-bot/").authenticated()
//                                        .requestMatchers( "api/*/").authenticated()
//                                        .anyRequest().authenticated()
                                        .anyRequest().permitAll()


                ).formLogin(
                form -> form
                        .loginPage("/login")
                        .loginProcessingUrl("/login")
//                        .defaultSuccessUrl("/")
                        .successHandler(customAuthenticationSuccessHandler)
                        .permitAll()
        ).logout(
                logout -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                        .logoutSuccessUrl("/login")
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                        .permitAll()
        );
        return http.build();
    }


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean
    WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/favicon.ico", "/assets/**");
    }
}
