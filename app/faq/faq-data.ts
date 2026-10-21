export type Faq = {
  id?: number;
  question: string;
  answer: string;
  categoryId?: string;
  categories?: {
    id: string;
    label: string;
    sortOrder?: number;
  } | null;
};

export type FaqCategory = {
  id: string;
  label: string;
  sortOrder?: number;
  faqItems: Faq[];
};