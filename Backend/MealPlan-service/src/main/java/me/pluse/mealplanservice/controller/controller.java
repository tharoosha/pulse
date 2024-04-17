package me.pluse.mealplanservice.controller;

import me.pluse.mealplanservice.dto.MealplanRequest;
import me.pluse.mealplanservice.dto.MealplanResponse;
import me.pluse.mealplanservice.service.MealplanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/mealplans")
public class controller {
    @Autowired
    private MealplanService mealPlanService;

    @PostMapping
    public ResponseEntity<MealplanResponse> createMealPlan(@RequestBody MealplanRequest request) {
        MealplanResponse response = mealPlanService.createMealPlan(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<MealplanResponse>> getAllMealPlans() {
        List<MealplanResponse> responses = mealPlanService.getAllMealPlans();
        return ResponseEntity.ok(responses);
    }
}
