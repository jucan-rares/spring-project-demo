package autoservice.autoservice.controller;

import autoservice.autoservice.exception.ResourceNotFoundException;
import autoservice.autoservice.model.Car;
import autoservice.autoservice.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Car> getCarById(@PathVariable int id) {
        Car car = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car with id " + id + " was not found in the database!"));
        return ResponseEntity.ok(car);
    }

    @PostMapping
    public Car createCar(@RequestBody Car car) {
        return carRepository.save(car);
    }

    @PutMapping("{id}")
    public ResponseEntity<Car> updateCar(@PathVariable int id, @RequestBody Car newCarInfo) {
        Car car = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car with id " + id + " was not found in the database!"));

        car.setBrand(newCarInfo.getBrand());
        car.setModel(newCarInfo.getModel());
        car.setYear(newCarInfo.getYear());
        car.setColor(newCarInfo.getColor());
        car.setOwner(newCarInfo.getOwner());

        carRepository.save(car);

        return ResponseEntity.ok(car);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCar(@PathVariable int id) {
        Car car = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car with id " + id + " was not found in the database!"));

        carRepository.delete(car);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}