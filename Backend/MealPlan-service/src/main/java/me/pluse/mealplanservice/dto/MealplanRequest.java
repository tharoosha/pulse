package me.pluse.mealplanservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class MealplanRequest {
    private String title;
    private String description;
    private String dietType;
    private List<String> recipes;
    private List<String> nutritionalInfo;
    private List<String> portionSizes;
}
