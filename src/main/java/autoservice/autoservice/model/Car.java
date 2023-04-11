package autoservice.autoservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int carID;
    @Column(length = 45)
    private String brand;
    @Column(length = 45)
    private String model;
    @Column(length = 45)
    private int year;
    @Column(length = 45)
    private String color;
    @Column(length = 45)
    private String damage;
    @Column(length = 45)
    private String owner;

    public Car(String brand, String model, int year, String color, String damage, String owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.damage = damage;
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                '}';
    }

}