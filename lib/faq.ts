import { prisma } from "@/lib/prisma";
import type { FaqCategory } from "../app/faq/faq-data";

export async function getFaqCategories(): Promise<FaqCategory[]> {
  const categories = await prisma.faqCategory.findMany({
    include: {
      faqItems: true,
    },
  });

  return categories;
}