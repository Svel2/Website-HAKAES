import { NextResponse } from 'next/server';

export async function GET() {
  // This will trigger a 500 error
  throw new Error('Test API Error - This is intentional for testing!');
  
  // This code will never be reached
  return NextResponse.json({ message: 'This will never show' });
}
