import { NextRequest, NextResponse } from "next/server";

const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface ChatRequest {
  message: string;
  conversationHistory: Message[];
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory }: ChatRequest = await request.json();

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY environment variable not set");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    // Build conversation context from history
    const conversationMessages = conversationHistory
      .slice(-8) // Keep last 8 messages for context
      .map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

    // Add the current message
    conversationMessages.push({
      role: "user",
      content: message,
    });

    const systemPrompt = `You are a helpful customer service assistant for a professional dry cleaning business. You can help with both garment care advice and general business inquiries.

GARMENT CARE EXPERTISE:
- Stain identification and removal techniques
- Fabric care and maintenance
- Dry cleaning processes and when they're needed
- Laundry best practices
- Garment storage and preservation
- Emergency stain treatment
- Fabric-specific care instructions
- Professional vs. home cleaning recommendations

BUSINESS INFORMATION:
Store hours and locations
Clinton Store Address: 36 Old Hwy 22, Clinton, NJ 08809
Clinton Store Phone: (908) 735-8115
Clinton Store Hours:
- Mon-Fri: 7am-7pm
- Sat: 9am-5pm (9am-3pm summer: Independence Day to Labor Day)  
- Sun: Closed
Greenwich Store Address: 1217 US-22, Phillipsburg, NJ 08865
Greenwich Store Phone: (908) 454-5133
Greenwich Store Hours:
- Mon-Fri 8am-7pm
- Sat: 9am-5pm (9am-3pm summer: Independence Day to Labor Day)
- Sun Closed

Basic Pricing (starting prices, prices subject to change without notice):
- Blouse or Dry Cleaned Shirt: $9.99
- Windbreaker: $16.22
- Waist/Hip Length Coat: $19.28
- Long Coat: $27.92
- Dress: $18.96
- Formal Gown: $42.47
- Blazer/Sport/Suit Jacket: $10.57
- Pants/Shorts/Skirt: $10.14
- 2 Piece Suit: $20.71
- Sweater: $9.85
- Cardigan: $10.79
- Ties: $5.73
- Laundered Dress Shirt Hanger: $3.71
- Laundered Dress Shirt Box: $3.86
- Pullover/Golf Shirt: $5.41
- Hand Ironed Shirt: $5.41
- Wash, Dry and Fold Laundry: $3.00/lb
- Comforters: Starting at $37.14

Services Offered:
- Wash, dry, and fold laundry
- Professional dry cleaning
- Wet cleaning for delicate items
- Stain removal specialists
- Clothing alterations and repairs
- Wedding dress preservation
- Leather and suede cleaning
- Comforter and blanket cleaning
- Pickup and delivery service available in some areas
- Same-day and next-day service at no extra charge

Discounts and coupons are available on the Coupon tab.

Guidelines:
- Provide accurate business information when asked
- For garment care, give practical, actionable advice
- Be concise but thorough
- Always prioritize garment safety
- Recommend professional services when appropriate
- Include specific product recommendations when helpful
- If a stain or fabric issue is complex, suggest bringing the item to one of our locations
- For pricing questions, mention that prices may vary based on garment condition and complexity
- Encourage customers to call or visit for detailed quotes on special items
- Maintain a helpful, professional tone
- If asked about topics outside garment care or business info, politely redirect
- If you don't have a price for a specific item, say "I don't have that information available at the moment. Please call or visit our store for the most accurate pricing."
- If a specific service is requested that is not listed, say "I don't have that information available at the moment. Please call or visit our store for the most accurate details."
- Always preface stain removal advice with "For best results, please test any cleaning method on a small, inconspicuous area first."

Always end responses about business information with "Would you like to know anything else about our services or garment care?"`;

    const claudeResponse = await fetch(CLAUDE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 500,
        system: systemPrompt,
        messages: conversationMessages,
      }),
    });

    if (!claudeResponse.ok) {
      const errorData = await claudeResponse.text();
      console.error("Claude API error:", claudeResponse.status, errorData);

      if (claudeResponse.status === 401) {
        return NextResponse.json({ error: "Invalid API key" }, { status: 500 });
      }

      return NextResponse.json(
        { error: "Failed to get response from AI service" },
        { status: 500 }
      );
    }

    const data = await claudeResponse.json();
    const response =
      data.content?.[0]?.text || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
