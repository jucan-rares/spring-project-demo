package autoservice.autoservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int repairID;
    @Column(unique = true)
    private int carID;
    @Column(length = 256)
    private String damage;
    @Column
    private int price;
    @Column
    private Date inDate;
    @Column
    private Date outDate;

    public Repair(int carID, String damage, int price, Date inDate, Date outDate) {
        this.carID = carID;
        this.damage = damage;
        this.price = price;
        this.inDate = inDate;
        this.outDate = outDate;
    }
}