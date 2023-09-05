//package com.cb.chat_bot_slack.security;
//
//
//import com.cb.chat_bot_slack.entity.User;
//import com.cb.chat_bot_slack.repository.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Collection;
//import java.util.stream.Collectors;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    private UserRepo userRepository;
//
//    @Autowired
//    public CustomUserDetailsService(UserRepo userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = userRepository.findByEmail(email);
//
//        if (user != null) {
//            return new org.springframework.security.core.userdetails.User(user.getEmail(),
//                    user.getPassword(),
//                    mapRolesToAuthorities(user.getRoles()));
//        } else {
//            throw new UsernameNotFoundException("Invalid username or password.");
//        }
//    }
//    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
//        Collection<? extends GrantedAuthority> mapRoles = roles.stream()
//                .map(role -> new SimpleGrantedAuthority(role.getName()))
//                .collect(Collectors.toList());
//        return mapRoles;
//    }
//}
