import type { Faq } from "@/app/faq/faq-data";

const API_URL =
  process.env.FAQ_API_URL ?? "http://localhost:3031/";

export async function getFaqs(): Promise<Faq[]> {
  let response: Response;

    try{
    response = await fetch(`${API_URL}/fetchAll`, {
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
  }catch(error){
      console.log("API connection failed", error);
      throw new Error("Unable to connect to FAQ!");
  }


  if (!response.ok) {
    const body = await response.text();

    throw new Error(
      `FAQ API failed: ${response.status}`
    );
  }

  return (await response.json()) as Faq[];
}