import type { Faq } from "@/app/faq/faq-data";

const API_URL =
  process.env.FAQ_API_URL ?? "http://cashia-service:8080";

export async function getFaqs(): Promise<Faq[]> {
  const response = await fetch(`${API_URL}/fetchAll`, {
    cache: "no-store",
  });


  if (!response.ok) {
    const body = await response.text();

    throw new Error(
      `FAQ API failed: ${response.status}`
    );
  }

  return (await response.json()) as Faq[];
}