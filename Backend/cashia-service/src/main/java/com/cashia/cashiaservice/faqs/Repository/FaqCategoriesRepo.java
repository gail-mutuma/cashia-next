package com.cashia.cashiaservice.faqs.Repository;

import com.cashia.cashiaservice.faqs.Entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FaqCategoriesRepo extends JpaRepository<Categories, String>{
}
