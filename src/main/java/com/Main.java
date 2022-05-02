package com;

import com.dto.*;
import com.models.enums.Genres;
import com.models.enums.MediaType;
import com.models.users.Client;
import com.service.ClientService;
import com.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.List;

@SpringBootApplication
public class Main implements CommandLineRunner {
    @Autowired
    ClientService clientService;
    @Autowired
    EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(Main.class,args);
    }


    @Override
    public void run(String... args){

    }
}
