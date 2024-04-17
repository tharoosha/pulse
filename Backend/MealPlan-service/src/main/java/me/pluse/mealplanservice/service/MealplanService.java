package me.pluse.mealplanservice.service;

import me.pluse.mealplanservice.dto.MealplanRequest;
import me.pluse.mealplanservice.dto.MealplanResponse;
import me.pluse.mealplanservice.model.Mealplan;
import me.pluse.mealplanservice.repository.MealplanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MeanplanService {
    @Autowired
    private MealplanRepository mealPlanRepository;

    public MealplanResponse createMealPlan(MealplanRequest request) {
        Mealplan mealPlan = new Mealplan();

        mealPlan.setTitle(request.getTitle());
        mealPlan.setDescription(request.getDescription());
        mealPlan.setDietType(request.getDietType());
        mealPlan.setRecipes(request.getRecipes());
        mealPlan.setNutritionalInfo(request.getNutritionalInfo());
        mealPlan.setPortionSizes(request.getPortionSizes());

        mealPlan = mealPlanRepository.save(mealPlan);

        return new MealplanResponse(mealPlan);
    }

    public List<MealplanResponse> getAllMealPlans() {
        return mealPlanRepository.findAll().stream()
                .map(MealplanResponse::new)
                .collect(Collectors.toList());
    }
}
