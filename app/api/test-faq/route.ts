import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.faqCategory.findMany({
      include: {
        faqItems: true,
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("FAQ database error:", error);

    return NextResponse.json(
      { error: "Failed to read FAQ data from database" },
      { status: 500 }
    );
  }
}
