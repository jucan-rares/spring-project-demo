package autoservice.autoservice.controller;

import autoservice.autoservice.model.Repair;
import autoservice.autoservice.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/repairs")
public class RepairController {

    @Autowired
    private RepairRepository repairRepository;

    @GetMapping
    public List<Repair> getAllRepairs(){
        return repairRepository.findAll();
    }
}
