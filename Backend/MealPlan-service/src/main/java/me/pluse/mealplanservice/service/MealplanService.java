package me.pluse.mealplanservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import me.pluse.mealplanservice.dto.MealplanRequest;
import me.pluse.mealplanservice.dto.MealplanResponse;
import me.pluse.mealplanservice.dto.MediaResponse;
import me.pluse.mealplanservice.model.Mealplan;
import me.pluse.mealplanservice.repository.MealplanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;


import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class MealplanService {

    private final MealplanRepository mealPlanRepository;
    private final WebClient.Builder webClientBuilder;

    public MealplanResponse createMealPlan(MultipartFile file, String mealPlanJson) throws IOException {
        MealplanRequest request = new ObjectMapper().readValue(mealPlanJson, MealplanRequest.class);
        Mealplan mealPlan = new Mealplan();

        mealPlan.setTitle(request.getTitle());
        mealPlan.setDescription(request.getDescription());
        mealPlan.setDietType(request.getDietType());
        mealPlan.setRecipes(request.getRecipes());
        mealPlan.setNutritionalInfo(request.getNutritionalInfo());
        mealPlan.setPortionSizes(request.getPortionSizes());

//        mealPlan = mealPlanRepository.save(mealPlan);

        MediaResponse mediaResponse = uploadFileToMediaService(file);
        if (mediaResponse == null || mediaResponse.getId().isEmpty()) {
            throw new IllegalArgumentException("Failed to upload file to Media Service, cannot proceed with meal plan creation");
        }

        mealPlan.setImageId(mediaResponse.getId()); // Store the URL received from the Media Service

        return new MealplanResponse(mealPlanRepository.save(mealPlan)); // Save and return the created Meal Plan

//        return new MealplanResponse(mealPlan);
    }

    private MediaResponse uploadFileToMediaService(MultipartFile file) throws IOException {
        return webClientBuilder.build()
                .post()
                .uri("http://media-service/api/media/fileupload")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(BodyInserters.fromMultipartData("file", new ByteArrayResource(file.getBytes()) {
                    @Override
                    public String getFilename() {
                        return file.getOriginalFilename();
                    }
                }))
                .retrieve()
                .bodyToMono(MediaResponse.class)
                .block(); // Blocking to simplify the example, consider using async and proper error handling
    }

    public List<MealplanResponse> getAllMealPlans() {
        return mealPlanRepository.findAll().stream()
                .map(MealplanResponse::new)
                .collect(Collectors.toList());
    }
}
