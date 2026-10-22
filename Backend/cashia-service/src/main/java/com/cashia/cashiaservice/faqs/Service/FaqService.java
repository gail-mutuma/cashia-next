package com.cashia.cashiaservice.faqs.Service;

import com.cashia.cashiaservice.faqs.Entity.Categories;
import com.cashia.cashiaservice.faqs.Entity.Faq;
import com.cashia.cashiaservice.faqs.Repository.FaqCategoriesRepo;
import com.cashia.cashiaservice.faqs.Repository.FaqRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FaqService {

    private final FaqRepo faqRepo;
    private final FaqCategoriesRepo faqCategoriesRepo ;

    public Faq saveData(Faq faq) throws Exception {
        if (faq == null) {
            //log.info
            throw new Exception("Body is required");
        }
        if (faq.getCategoryId() == null || faq.getCategoryId().isEmpty()) {
            throw new Exception("Category id is required");
        }

        Optional<Categories> exitingCategory = faqCategoriesRepo.findById(faq.getCategoryId());
        if (exitingCategory.isEmpty()) {
            throw new Exception("Please provide a valid category id");
        }

        return faqRepo.save(faq);

    }

}
