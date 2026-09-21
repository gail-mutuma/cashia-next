'use client'

import { useState } from "react";
import AccordionItems from "./AccordionItems";
import type { FaqCategory } from "./faq-data"; 

export default function Accordion({ category}: {category: FaqCategory }) {
    const [openIndex, setOpenIndex] = useState<number | null> (null);

    return(
         <div>
            {category.faqItems.map((faq, index) => (
                <div
                key={faq.question}
                className="accordion-item"
                style={{ animationDelay: `${index * 70}ms` }}
                >
                    <AccordionItems
                    faq={faq}
                    id={'${category.id}-${index}'}
                    isOpen={openIndex == index}
                    onToggle={() =>
                        setOpenIndex((current) => (current == index ? null : index))
                    }
                    />
                </div>
            ))}
        </div>
    )
}