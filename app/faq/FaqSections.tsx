'use client'

import { useState } from "react";
import Accordion from "./Accordion";
import CategoryTabs from "./CategoryTabs";
import Still from "./Still";
import type { FaqCategory } from "./faq-data";

type FaqSectionProps = {
  categories: FaqCategory[];
};
    
export default function FaqSection({ categories }: FaqSectionProps) {
    const [activeId, setActiveId] = useState(categories[0].id);

    const activeCategory = 
    categories.find((category) => category.id == activeId) ??
    categories[0];

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
                categories={categories}
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