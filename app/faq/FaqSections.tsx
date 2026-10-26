
'use client';

import { useState } from "react";
import Accordion from "./Accordion";
import CategoryTabs from "./CategoryTabs";
import Still from "./Still";
import type { Faq, FaqCategory } from "./faq-data";

type FaqSectionProps = {
  faqs: Faq[];
  loadError?: boolean;
};

export default function FaqSection({ faqs, loadError=false }: FaqSectionProps) {
const categoryMap = new Map<string, FaqCategory>();

faqs.forEach((faq) => {
  const id = faq.categories?.id;
  const label = faq.categories?.label;
  const sortOrder = faq.categories?.sortOrder;

  if (!id || !label) return;

  if (!categoryMap.has(id)) {
    categoryMap.set(id, {
      id,
      label,
      sortOrder,
      faqItems: [],
    });
  }

  categoryMap.get(id)!.faqItems.push(faq);
});

const mergedCategories = Array.from(categoryMap.values()).sort(
  (a, b) =>
    (a.sortOrder ?? Number.MAX_SAFE_INTEGER) -
    (b.sortOrder ?? Number.MAX_SAFE_INTEGER)
);
  const [activeId, setActiveId] = useState(
    mergedCategories[0]?.id ?? ""
  );

  const activeCategory =
    mergedCategories.find(
      (category) => category.id === activeId
    ) ?? mergedCategories[0];

  if (!activeCategory) {
    return (
      <section aria-labelledby="faq-heading">
        <header className="FAQs-text">
          <h2 id="faq-heading">FAQs</h2>
          <p className="text">FAQs are temporarily unavailable.</p>
        </header>
      </section>
    );
  }

  return (
    <section aria-labelledby="faq-heading">
      <header className="FAQs-text">
        <h2 id="faq-heading">FAQs</h2>
        <p className="text">
          Everything you need to know about Cashia, Products, Features,
          Pricing, accounts and trouble shooting
        </p>
      </header>

      <div className="faq-layout">
        <CategoryTabs
          categories={mergedCategories}
          activeId={activeCategory.id}
          onChange={setActiveId}
        />

        <div className="faq-panel">
          <div
            id="faq-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
          >
            <Accordion
              key={activeCategory.id}
              category={activeCategory}
            />
          </div>

          <Still />
        </div>
      </div>
    </section>
  );
}

