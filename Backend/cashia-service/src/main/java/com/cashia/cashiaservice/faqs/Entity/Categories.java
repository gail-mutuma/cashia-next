package com.cashia.cashiaservice.faqs.Entity;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@Table(name = "faq_categories")
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert

public class Categories {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "label")
    private String label;

    @Column(name = "sort_order")
    private Integer sortOrder;
}

