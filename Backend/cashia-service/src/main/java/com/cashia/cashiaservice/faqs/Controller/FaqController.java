package com.cashia.cashiaservice.faqs.Controller;

import com.cashia.cashiaservice.faqs.Entity.Categories;
import com.cashia.cashiaservice.faqs.Entity.Faq;
import com.cashia.cashiaservice.faqs.Repository.FaqRepo;
import com.cashia.cashiaservice.faqs.Repository.FaqCategoriesRepo;
import com.cashia.cashiaservice.faqs.Service.CategoriesService;
import com.cashia.cashiaservice.faqs.Service.FaqService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.LinkedHashMap;

@RestController
@RequiredArgsConstructor
@Slf4j
public class FaqController {

    private final FaqService faqService;
    private final FaqRepo faqRepo;
    private final FaqCategoriesRepo categoriesRepo;


    @PostMapping("/addData")
    public ResponseEntity<?> postData(@RequestBody Faq faq) {

        Map<String, String> errors = new LinkedHashMap<>();

        if (faq.getCategoryId() == null || faq.getCategoryId().isBlank()) {
            errors.put("categoryId", "Category ID is required.");
        }
        if (faq.getQuestion() == null || faq.getQuestion().isBlank()) {
            errors.put("question", "Please enter  a question");
        }
        if (faq.getAnswer() == null || faq.getAnswer().isBlank()) {
            errors.put("answer", "Please enter  an answer");
        }

        if (!errors.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(errors);
        }

        if (!categoriesRepo.existsById(faq.getCategoryId())){
            return ResponseEntity.badRequest()
                    .body(Map.of(
                            "error",
                            "Invalid category ID. Please provide an existing category ID."
                    ));
        }

        Faq savedData = faqRepo.save(faq);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedData);
    }


    private final CategoriesService categoriesService;
    @PostMapping("/addCategory")
    public ResponseEntity<?> postCategory(@RequestBody Categories categories) {
        Map<String, String> errors = new LinkedHashMap<>();

        if (categories.getId() == null || categories.getId().isBlank()) {
            errors.put("id", "ID is required.");
        }
        if (categories.getLabel() == null || categories.getLabel().isBlank()) {
            errors.put("label", "Label is required.");
        }
        if (!errors.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(errors);
        }

        try {
            Categories savedCategory = categoriesService.saveCategory(categories);

            return ResponseEntity.ok(savedCategory);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    @GetMapping("/fetchAll")
    public List<Faq> getAllFaq(){
        List<Faq> faqList= faqRepo.findAll();
        return faqList;
    }

    @GetMapping("/fetchById/{id}")
    public ResponseEntity<?> getData(@PathVariable Integer id){

        Faq faq =faqRepo.findById(id).orElse(null);

        if(faq !=null) {
            return ResponseEntity.ok(faq);
        }else {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Not found!");
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateFaq(@PathVariable Integer id, @RequestBody Faq updatedData){
        Faq existingData=faqRepo.findById(id).orElse(null);

        if(existingData!=null)
        {
            if (updatedData.getCategoryId()==null
                    ||!categoriesRepo.existsById(updatedData.getCategoryId())){
            return ResponseEntity.badRequest()
                    .body("Invalid category!");
        }
            existingData.setCategoryId(updatedData.getCategoryId());
            existingData.setQuestion(updatedData.getQuestion());
            existingData.setAnswer(updatedData .getAnswer());
            faqRepo.save(existingData );
            return ResponseEntity.ok(existingData);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("FAQ not found!");

        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFaq (@PathVariable Integer id) {
        if (!faqRepo.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("FAQ not found.");
        }
        faqRepo.deleteById(id);
            return ResponseEntity.ok("Deleted!");
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<?> editFaq (@PathVariable Integer id, @RequestBody Map<String, String> editData){
        Faq existingData=faqRepo.findById(id).orElse(null);

        if (!faqRepo.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("FAQ not found.");
        }
            Set<String> allowedFields = Set.of("categoryId", "question");

            if (editData == null || editData.isEmpty()) {
                return ResponseEntity.badRequest()
                        .body("Provide at least one field");
            }
            for (String field : editData.keySet()) {
                if (!allowedFields.contains(field)) {
                    return ResponseEntity.badRequest()
                            .body("Invalid field: " + field);
                }
            }

            if (editData.containsKey("categoryId")) {
                String categoryId = editData.get("categoryId");

                if (categoryId == null
                        || categoryId.isBlank()
                        || !categoriesRepo.existsById(categoryId)) {
                    return ResponseEntity.badRequest()
                            .body("Invalid category!");
                }
            }
            BeanWrapper wrapper = new BeanWrapperImpl(existingData);

            editData.forEach(wrapper::setPropertyValue);
            Faq savedData = faqRepo.save(existingData);

            return ResponseEntity.ok(savedData);
    }

}

