package com.toy.toy_petsitter_front_admin.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class MainController {

    /*
    로그인 화면
     */
    @GetMapping("/")
    public String main() {
        return "login";
    }

    /*
    메인화면
     */
    @GetMapping("/dashboard")
    public String dashboard() {
        return "main/dashboard";
    }

    /*
    일반회원
     */
    @GetMapping("/userList")
    public String userList() {
        return "user/userList";
    }

    /*
    시터회원
     */
    @GetMapping("/sitterList")
    public String sitterList() {
        return "user/sitterList";
    }

}
