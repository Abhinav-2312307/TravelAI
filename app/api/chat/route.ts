export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return Response.json({ error: "Missing Gemini API key" }, { status: 500 })
    }

    // Create a system prompt
    const systemPrompt = `You are an AI travel assistant that helps users book flights, hotels, and activities. 
    You can communicate in multiple languages including English and Hindi.
    
    When users ask about travel, ask clarifying questions about:
    - Their destination
    - Travel dates
    - Number of travelers
    - Budget constraints
    - Preferences (e.g., direct flights, hotel amenities)
    
    When recommending options:
    - Suggest 2-3 options with different price points
    - Mention key features of each option
    - Ask which option they prefer
    
    For flight bookings, collect:
    - Full name
    - Email
    - Phone number
    - Date of birth
    
    For hotel bookings, collect:
    - Check-in/check-out dates
    - Number of rooms
    - Special requests
    
    Keep your responses concise and focused on helping the user complete their travel booking.
    If the user switches languages, respond in that language.
    
    Current date: ${new Date().toLocaleDateString()}`

    // Format user messages for Gemini
    const userMessages = messages.filter((msg: any) => msg.role !== "system")

    // Prepare the conversation for Gemini
    const formattedMessages = userMessages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }))

    // Add system prompt as the first message if there are user messages
    if (formattedMessages.length > 0) {
      formattedMessages.unshift({
        role: "user",
        parts: [{ text: systemPrompt }],
      })

      // Add a model response acknowledging the instructions
      formattedMessages.unshift({
        role: "model",
        parts: [{ text: "I understand my role as a travel assistant." }],
      })
    }

    // Make a direct request to Gemini API (non-streaming for reliability)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: formattedMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Gemini API error:", errorText)
      return Response.json({ error: `Gemini API error: ${response.status}` }, { status: response.status })
    }

    const data = await response.json()

    // Extract the generated text from Gemini's response
    let generatedText = ""
    if (data.candidates && data.candidates[0]?.content?.parts?.length > 0) {
      generatedText = data.candidates[0].content.parts[0].text || ""
    }

    // Return the response in the format expected by the AI SDK
    return Response.json({ role: "assistant", content: generatedText })
  } catch (error: any) {
    console.error("Error in chat API:", error)
    return Response.json({ error: `Failed to process request: ${error.message}` }, { status: 500 })
  }
}
