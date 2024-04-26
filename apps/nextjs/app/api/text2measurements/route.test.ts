import { POST, GET } from './route';
import { NextRequest } from 'next/server';
import { text2measurements } from '@/lib/text2measurements';

jest.mock('@/lib/text2measurements');

describe('/api/text2measurements route', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it('should return measurements for a valid POST request', async () => {
    const mockMeasurements: Measurement[] = [
      {
        itemType: 'measurement',
        variableName: 'NMN',
        value: 5,
        unitName: 'Milligrams',
        startDateLocal: '2023-06-01',
        startTimeLocal: '09:00:00',
        endDateLocal: '2023-06-01',
        endTimeLocal: '09:00:00', 
        combinationOperation: 'SUM',
        variableCategoryName: 'Treatments',
        originalText: 'I took 5 mg of NMN',
      },
    ];
    (text2measurements as jest.Mock).mockResolvedValue(mockMeasurements);

    const request = new NextRequest('https://example.com/api/text2measurements', {
      method: 'POST',
      body: JSON.stringify({ statement: 'I took 5 mg of NMN', localDateTime: '2023-06-01T09:00:00' }),
    });
    const response = await POST(request);
    
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true, measurements: mockMeasurements });
  });

  it('should return an error for an invalid POST request', async () => {
    (text2measurements as jest.Mock).mockRejectedValue(new Error('OpenAI API error'));

    const request = new NextRequest('https://example.com/api/text2measurements', {
      method: 'POST',
      body: JSON.stringify({ statement: 'Invalid input' }),
    });
    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: false, message: 'Error sending request to OpenAI' });
  });

  // Add tests for GET requests
});