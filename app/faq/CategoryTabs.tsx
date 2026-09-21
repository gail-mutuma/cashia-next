import type { FaqCategory } from "./faq-data";

type Props = {
    categories: FaqCategory[];
    activeId: string;
    onChange: (id: string) => void;
};

export default function CategoryTabs({ categories, activeId, onChange }: Props) {
    return(
        <div 
        role="tablist"
        aria-label="FAQ categories"
        className="faq-categories"
        >
            {categories.map((category) => {
                const isActive = category.id == activeId;

                return(
                    <button
                    key={category.id}
                    type="button"
                    role="tab"
                    id={`tab-${category.id}`}
                    aria-selected={isActive}
                    aria-controls="faq-panel"
                    onClick={() => onChange(category.id)}
                    className= {[
                        isActive
                        ?"FAQs-button"
                        :"FAQs-buttond",
                    ].join(" ")}
                    >
                        {category.label}
                    </button>
                );
            })}
        </div>
    );
}