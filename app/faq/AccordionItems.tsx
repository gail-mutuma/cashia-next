import { FaQ } from "react-icons/fa6";
import type { Faq } from "./faq-data";

type Props = {
  faq: Faq;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function AccordionItems({ faq, id, isOpen, onToggle }: Props) {
    const buttonId = `${id}-button`;
    const panelId = `${id}-panel`;
   
    return(
        <div className="accordion-items">
            <h3>
                <button 
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={onToggle}
                className="accordion-button"
                >
                    <span 
                    className={'faq-question'}
                    >
                        {faq.question}
                    </span>
                    <PlusMinusIcon isOpen={isOpen}/>
                </button>
            </h3>

            <div 
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="faq-answer"
            hidden={!isOpen}
            >
                <div className="overflow-hidden">
                    <p 
                    className="faq-answers"
                    >
                        {faq.answer}

                    </p>
                </div>

            </div>
        </div>
    );
}
 

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <span aria-hidden="true" className="v">
            <span className="c"/>
            <span 
            className={`absolute left-1/2 top-0 h-6 w-0.5 -translate-x-1/2 rounded bg-ink transition-transform duration-300 ease-out ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
            />
        </span>
    );
}