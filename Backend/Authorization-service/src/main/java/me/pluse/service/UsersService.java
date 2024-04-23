package me.pluse.service;

import me.pluse.model.Users;
import me.pluse.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public List<Users> getUsersList() {
        List<Users> usersLst = new ArrayList<Users>();
        usersRepository.findAll().forEach(user -> usersLst.add(user));
        return usersLst;
    }




}
