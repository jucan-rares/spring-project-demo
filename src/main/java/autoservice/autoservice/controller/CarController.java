package autoservice.autoservice.controller;

import autoservice.autoservice.model.Car;
import autoservice.autoservice.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController{

    @Autowired
    private CarRepository carRepository;

    @GetMapping
    public List<Car> getAllCars(){
        return carRepository.findAll();
    }
}