package autoservice.autoservice.controller;

import autoservice.autoservice.exception.ResourceNotFoundException;
import autoservice.autoservice.model.Repair;
import autoservice.autoservice.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/repairs")
public class RepairController {

    @Autowired
    private RepairRepository repairRepository;

    @GetMapping
    public List<Repair> getAllRepairs() {
        return repairRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Repair> getRepairById(@PathVariable int id) {
        Repair repair = repairRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Repair with id " + id + " was not found in the database!"));
        return ResponseEntity.ok(repair);
    }

    @PostMapping
    public Repair createRepair(@RequestBody Repair repair) {
        return repairRepository.save(repair);
    }

    @PutMapping("{id}")
    public ResponseEntity<Repair> updateRepair(@PathVariable int id, @RequestBody Repair newRepairInfo) {
        Repair repair = repairRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Repair with id " + id + " was not found in the database!"));

        repair.setCar(newRepairInfo.getCar());
        repair.setDamage(newRepairInfo.getDamage());
        repair.setPrice(newRepairInfo.getPrice());
        repair.setInDate(newRepairInfo.getInDate());
        repair.setOutDate(newRepairInfo.getOutDate());

        repairRepository.save(repair);

        return ResponseEntity.ok(repair);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRepair(@PathVariable int id) {
        Repair repair = repairRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Repair with id " + id + " was not found in the database!"));

        repairRepository.delete(repair);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}