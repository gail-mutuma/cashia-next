package com.cashia.cashiaservice.faqs.Repository;

import com.cashia.cashiaservice.faqs.Entity.Faq;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FaqRepo extends JpaRepository<Faq, Integer>{
}