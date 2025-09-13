// Next.js API route for chat functionality
// File: pages/api/chat.ts (or app/api/chat/route.ts for App Router)

import { NextApiRequest, NextApiResponse } from 'next';
import { processChat, ChatRequest, ChatResponse } from '../../src/api/chat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      response: '', 
      error: 'Method not allowed' 
    });
  }

  try {
    const chatRequest: ChatRequest = req.body;

    // Validate required fields
    if (!chatRequest.message || !chatRequest.message.trim()) {
      return res.status(400).json({ 
        response: '', 
        error: 'Message is required' 
      });
    }

    // Process the chat request
    const response = await processChat(chatRequest);

    // Return the response
    res.status(200).json(response);

  } catch (error) {
    console.error('API route error:', error);
    res.status(500).json({ 
      response: 'I apologize, but I encountered an error processing your request.',
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}

// For App Router (app/api/chat/route.ts), use this instead:
/*
import { NextRequest, NextResponse } from 'next/server';
import { processChat, ChatRequest } from '../../../src/api/chat';

export async function POST(req: NextRequest) {
  try {
    const chatRequest: ChatRequest = await req.json();

    if (!chatRequest.message?.trim()) {
      return NextResponse.json({ 
        response: '', 
        error: 'Message is required' 
      }, { status: 400 });
    }

    const response = await processChat(chatRequest);
    return NextResponse.json(response);

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ 
      response: 'I apologize, but I encountered an error processing your request.',
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
*/
