package autoservice.autoservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userID;
    @Column(length = 45)
    private String role;
    @Column(length = 45, unique = true)
    private String username;
    @Column(length = 256)
    private String password;
    @Column(length = 45, unique = true)
    private String email;
    @Column(length = 45, unique = true)
    private String phoneNumber;

    public User(String role, String username, String password, String email, String phoneNumber) {
        this.role = role;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public void encrypt() {

        String encryptedPassword = null;

        try {

            MessageDigest m = MessageDigest.getInstance("MD5");

            m.update(this.password.getBytes());

            byte[] bytes = m.digest();

            StringBuilder s = new StringBuilder();
            for (byte aByte : bytes) s.append(Integer.toString((aByte & 0xff) + 0x100, 16).substring(1));

            encryptedPassword = s.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.password = encryptedPassword;
    }
}