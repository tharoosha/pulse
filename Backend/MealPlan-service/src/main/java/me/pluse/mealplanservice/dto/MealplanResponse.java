package me.pluse.mealplanservice.dto;

import lombok.Data;
import me.pluse.mealplanservice.model.Mealplan;

import java.util.List;

@Data
public class MealplanResponse {
    private Long id;
    private String title;
    private String description;
    private String dietType;
    private List<String> recipes;
    private List<String> nutritionalInfo;
    private List<String> portionSizes;

    public MealplanResponse(Mealplan mealPlan) {
        this.id = mealPlan.getId();
        this.title = mealPlan.getTitle();
        this.description = mealPlan.getDescription();
        this.dietType = mealPlan.getDietType();
//        this.recipes = mealPlan.getRecipes();
//        this.nutritionalInfo = mealPlan.getNutritionalInfo();
//        this.portionSizes = mealPlan.getPortionSizes();
    }
}
