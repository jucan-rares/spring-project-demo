package autoservice.autoservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int repairID;
    @Column(unique = true)
    private int carID;
    @Column
    private String damage;
    @Column
    private int price;
    @Column
    private Date inDate;
    @Column
    private Date outDate;
}