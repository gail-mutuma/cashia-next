package com.cashia.cashiaservice.faqs.Service;

import com.cashia.cashiaservice.faqs.Entity.Categories;
import com.cashia.cashiaservice.faqs.Repository.FaqCategoriesRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor

public class CategoriesService {

    private final FaqCategoriesRepo faqCategoriesRepo ;

    public Categories saveCategory(Categories categories) throws Exception {
        if (categories == null) {
            throw new Exception("Body is Required");
        }

        return faqCategoriesRepo.save(categories);
    }
}
