package me.pluse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public class SequenceGeneratorService {


    @Autowired
    private MongoOperations mongoOperations;
}
