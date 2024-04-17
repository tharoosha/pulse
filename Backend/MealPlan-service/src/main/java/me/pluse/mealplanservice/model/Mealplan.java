package me.pluse.mealplanservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "meal_plans")
@Setter
@Getter
public class Mealplan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String dietType; // e.g., Vegan, Keto, etc.
    private String imageUrl; // URL to image stored via media-service

//    @ElementCollection
//    private List<String> recipes; // URLs or descriptions of recipes
//
//    @ElementCollection
//    private List<String> nutritionalInfo;
//
//    @ElementCollection
//    private List<String> portionSizes;

    // Standard getters and setters
}
