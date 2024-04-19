package me.pluse.mealplanservice.controller;

import lombok.AllArgsConstructor;
import me.pluse.mealplanservice.dto.MealplanRequest;
import me.pluse.mealplanservice.dto.MealplanResponse;
import me.pluse.mealplanservice.service.MealplanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/mealplan")
@AllArgsConstructor
public class controller {
    @Autowired
    private final MealplanService mealPlanService;

    @PostMapping("/createmealplan")
    public ResponseEntity<MealplanResponse> createMealPlan(@RequestPart("file")MultipartFile file, @RequestPart("mealPlanJson") String mealPlanJson) throws IOException {
        MealplanResponse response = mealPlanService.createMealPlan(file, mealPlanJson);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/getallmealplans")
    public ResponseEntity<List<MealplanResponse>> getAllMealPlans() {
        List<MealplanResponse> responses = mealPlanService.getAllMealPlans();
        return ResponseEntity.ok(responses);
    }
}
