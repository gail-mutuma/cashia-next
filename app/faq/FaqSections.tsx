'use client'

import { useState } from "react";
import Accordion from "./Accordion";
import CategoryTabs from "./CategoryTabs";
import Still from "./Still";
import {FAQCategories } from "./faq-data"

export default function FaqSection() {
    const [activeId, setActiveId] = useState(FAQCategories[0].id);

    const activeCategory = 
    FAQCategories.find((category) => category.id == activeId) ??
    FAQCategories[0];

    return(
        <section aria-labelledby="faq-heading">
            <header className="FAQs-text">
                <h2 id="faq-heading" >
                    FAQs
                </h2>
                <p className="text">
                    Everything you need to know about Cashia, Products, Features, Pricing, accounts and trouble shooting
                </p>
            </header>

            <div className="faq-layout">
                <CategoryTabs
                categories={FAQCategories}
                activeId={activeCategory.id}
                onChange={setActiveId}
                />

                <div className="faq-panel">
                    <div 
                    id="faq-panel"
                    role="tabpanel"
                    aria-labelledby={`tab-${activeCategory.id}`}
                    >
                        <Accordion key={activeCategory.id} category={activeCategory} />                    
                    </div>
                    <Still/>
                </div>
            </div>

        </section>

    )
}