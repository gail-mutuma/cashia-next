export type Faq = {
  id?: number;
  question: string;
  answer: string;
  categoryId?: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  faqItems: Faq[];
};