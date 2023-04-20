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
@Entity(name = "repairs")
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int repairID;
    @ManyToOne
    @JoinColumn(name = "car")
    private Car car;
    @Column(name = "damage_description", length = 1000)
    private String damage;
    @Column(name = "repair_total")
    private int price;
    @Column(name = "arrival_date")
    private Date inDate;
    @Column(name = "leaving_date")
    private Date outDate;
}