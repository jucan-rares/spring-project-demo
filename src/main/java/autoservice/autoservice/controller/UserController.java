package autoservice.autoservice.controller;

import autoservice.autoservice.exception.ResourceNotFoundException;
import autoservice.autoservice.model.LoginInfo;
import autoservice.autoservice.model.User;
import autoservice.autoservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody LoginInfo loginInfo) {

        User existingUser = userRepository.findByUsername(loginInfo.getUsername());

        if (existingUser == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

        User dummy = new User();
        dummy.setPassword(loginInfo.getPassword());
        dummy.encrypt();

        if (!Objects.equals(existingUser.getPassword(), dummy.getPassword()))
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);

        return ResponseEntity.status(HttpStatus.FOUND).body(null);
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {

        User existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser != null)
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);

        user.encrypt();

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " was not found in the database!"));
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User newUserInfo) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " was not found in the database!"));

        user.setRole(newUserInfo.getRole());
        user.setUsername(newUserInfo.getUsername());
        user.setPassword(newUserInfo.getPassword());
        user.setEmail(newUserInfo.getEmail());
        user.setPhoneNumber(newUserInfo.getPhoneNumber());

        userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable int id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " was not found in the database!"));

        userRepository.delete(user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
