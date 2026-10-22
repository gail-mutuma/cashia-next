package com.cashia.cashiaservice.faqs.Controller;

import com.cashia.cashiaservice.faqs.Entity.Categories;
import com.cashia.cashiaservice.faqs.Entity.Faq;
import com.cashia.cashiaservice.faqs.Repository.FaqRepo;
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

@RestController
@RequiredArgsConstructor
@Slf4j
public class FaqController {

    private final FaqService faqService;
    private final FaqRepo faqRepo;

    @PostMapping("/addData")
    public ResponseEntity<?> postData(@RequestBody Faq faq) {
        try {
            return ResponseEntity.ok(faqService.saveData(faq));
        } catch (Exception e) {
            log.error("Error encountered: {}", e.getMessage());
            return ResponseEntity
                    .internalServerError()
                    .body(e.getMessage());
        }
    }

    private final CategoriesService categoriesService;
    @PostMapping("/addCategory")
    public ResponseEntity<?> postCategory(@RequestBody Categories categories) {
        try {
            return ResponseEntity.ok(categoriesService.saveCategory(categories));
        } catch (Exception e) {
            log.error("Error encountered: {}", e.getMessage());
            return ResponseEntity
                    .internalServerError()
                    .body(e.getMessage());
        }
    }

    @GetMapping("/fetchAll")
    public List<Faq> getAllFaq(){
        List<Faq> faqList= faqRepo.findAll();
        return faqList;
    }

    @GetMapping("/fetchById{id}")
    public ResponseEntity<?> getData(@PathVariable Integer id){
        return faqRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update/{id}")
    public Faq updateFaq(@PathVariable Integer id, @RequestBody Faq updatedData){
        Faq existingData=faqRepo.findById(id).orElse(null);

        if(existingData!=null)
        {
            existingData.setCategoryId(updatedData.getCategoryId());
            existingData.setQuestion(updatedData.getQuestion());
            existingData.setAnswer(updatedData .getAnswer());
            faqRepo.save(existingData );
            return existingData;
        }else{
            return null;

        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFaq (@PathVariable Integer id){
         faqRepo.deleteById(id);
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<?> editFaq (@PathVariable Integer id, @RequestBody Map<String, String> editData){
        Faq existingData=faqRepo.findById(id).orElse(null);
        BeanWrapper wrapper = new BeanWrapperImpl(existingData);

        Set<String>allowedFields= Set.of("categoryId", "question");

        editData.forEach((field, value)-> {
            if (!allowedFields.contains(field)) {
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        "Invalid field: " + field);
            }
            wrapper.setPropertyValue(field,value);
        });

        Faq savedData = faqRepo.save(existingData);

        return ResponseEntity.ok(savedData);
    }

}

