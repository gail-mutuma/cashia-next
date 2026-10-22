"use server";

import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const CASHIA_CONTEXT = `
Cashia is a digital payments platform licensed and regulated by the Central Bank of Kenya.
Tagline: Designed to remove friction and fear. Money shouldn't feel heavy, awkward or risky.

Location: Imperial courst, Westlands rd, Nairobi Kenya

PRODUCTS:

Individual
- Users can send or receive money instantly using a unique Stika.
- Masks personal details like phone numbers.
- Shares money across networks.
- Eliminates awkward follow-up text messages.

Business
- Manages payments for businesses of all sizes.
- Scan to pay for ease of payments.
- Secure links for card or mobile payments.
- Designed for e-commerce online businesses.

Developer
- Secure, developer-friendly payment APIs and SDKs built for platforms in Kenya.
- Flexible development tools.
- Supports custom integrations for e-commerce.
- Quick implementation.

Agent
- Enables business owners to earn extra income by facilitating digital payment services within their communities.
- Earn money on every customer account deposit you facilitate.
- Earn rewards by recruiting new users onto the Cashia App.
- Fund customer accounts directly from your shop layout.

SUPPORT CONTACT:
- WhatsApp Support: 0709 200 900
- Email: support@cashia.com

LEGAL:
- Customer Terms & Conditions: https://www.cashia.com/customer-terms-and-conditions/
- Merchants Terms & Conditions: https://www.cashia.com/merchant-terms-and-conditions/
- Privacy Policy: https://www.cashia.com/privacy/

PRICING:
-Payments:https://www.cashia.com/pricing/

ABOUT:
-About Us:https://www.cashia.com/about/
`;

const WEB_SEARCH_TRIGGERS = [
  /\b(current|currently|latest|today|now|recent|news|this week|this month|202[5-9])\b/i,
  /\b(weather|exchange rate|stock price|election|score|traffic|restaurant|flight)\b/i,
  /\b(search|look up|browse|on the internet|online)\b/i,
];

function shouldUseWebSearch(prompt: string) {
  return WEB_SEARCH_TRIGGERS.some((pattern) => pattern.test(prompt));
}

export async function getAIResponse(prompt: string) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    const message = "Missing GOOGLE_GENERATIVE_AI_API_KEY. Add it to .env.local.";
    console.error(message);
    return message;
  }

  try {
    const useWebSearch = shouldUseWebSearch(prompt);

    const { text } = await generateText({
        model: google("gemini-3.6-flash"),
        system: `You are Cashia's helpful customer assistant. 
        Use the Cashia information below as the primary source for Cashia questions.
        Do not invent fees, policies, product capabilities, legal claims, contact details, or transaction statuses. 
        When the information is missing, say so and direct the user to support@cashia.com or 0709 200 900.
        Answer clearly and briefly. If the user asks a general question unrelated to Cashia, answer only when you are confident. ${useWebSearch ? "Google Search is enabled for this request. Use it only when it improves accuracy, and distinguish current web facts from Cashia's own information." : "Do not use web search for this request; answer from the provided Cashia context or explain that you need more information."}

        CASHIA KNOWLEDGE:
        ${CASHIA_CONTEXT}`,
            prompt,
            ...(useWebSearch
                ? { tools: { google_search: google.tools.googleSearch({}) } }
                : {}),
    });

    return text;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Gemini request failed:", message);
    return message;
  }
}