import { POST } from './route';
import { NextRequest, NextResponse } from 'next/server';
import { text2measurements } from "@/lib/text2measurements";

jest.mock("@/lib/text2measurements", () => ({
  text2measurements: jest.fn(),
}));

describe('POST /api/text2measurements', () => {
  beforeEach(() => {
    (text2measurements as jest.Mock).mockClear();
  });

  it('should use statement from request body', async () => {
    const requestBody = { statement: 'test statement', localDateTime: '2023-06-08T10:00:00' };
    const request = new NextRequest('https://example.com', { method: 'POST', body: JSON.stringify(requestBody) });
    
    await POST(request);
    
    expect(text2measurements).toHaveBeenCalledWith('test statement', '2023-06-08T10:00:00');
  });

  it('should fallback to text if statement is not provided', async () => {
    const requestBody = { text: 'test text', localDateTime: '2023-06-08T10:00:00' };
    const request = new NextRequest('https://example.com', { method: 'POST', body: JSON.stringify(requestBody) });
    
    await POST(request);
    
    expect(text2measurements).toHaveBeenCalledWith('test text', '2023-06-08T10:00:00');
  });

  it('should return success response with measurements', async () => {
    const requestBody = { statement: 'test statement', localDateTime: '2023-06-08T10:00:00' };
    const request = new NextRequest('https://example.com', { method: 'POST', body: JSON.stringify(requestBody) });
    const mockMeasurements = [{ id: 1 }, { id: 2 }];
    (text2measurements as jest.Mock).mockResolvedValue(mockMeasurements);
    
    const response = await POST(request);
    
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true, measurements: mockMeasurements });
  });

  it('should return error response if text2measurements throws', async () => {
    const requestBody = { statement: 'test statement', localDateTime: '2023-06-08T10:00:00' };
    const request = new NextRequest('https://example.com', { method: 'POST', body: JSON.stringify(requestBody) });
    const mockError = new Error('Test error');
    (text2measurements as jest.Mock).mockRejectedValue(mockError);
    
    const response = await POST(request);
    
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: false, message: 'Error sending request to OpenAI' });
  });
});