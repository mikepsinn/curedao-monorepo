import { conversation2measurements } from '@/lib/conversation2measurements';
import { postMeasurements } from '@/lib/dfda';
import { getUserId } from '@/lib/getUserId';
import { POST } from './route';

jest.mock('@/lib/conversation2measurements');
jest.mock('@/lib/dfda');
jest.mock('@/lib/getUserId');

describe('POST /api/conversation2measurements', () => {
  it('should return measurements on valid input', async () => {
    const mockMeasurements = [{ id: 1 }, { id: 2 }];
    (conversation2measurements as jest.Mock).mockResolvedValueOnce(mockMeasurements);
    (getUserId as jest.Mock).mockResolvedValueOnce('user-id');

    const response = await POST(new Request('', {
      method: 'POST',
      body: JSON.stringify({
        statement: 'test statement',
        localDateTime: '2023-01-01T00:00:00.000Z',
        previousStatements: 'previous statements',
      }),
    }));

    expect(conversation2measurements).toHaveBeenCalledWith(
      'test statement',
      '2023-01-01T00:00:00.000Z',
      'previous statements'
    );
    expect(getUserId).toHaveBeenCalled();
    expect(postMeasurements).toHaveBeenCalledWith(mockMeasurements, 'user-id');
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      success: true,
      measurements: mockMeasurements,
    });
  });

  it('should handle missing input', async () => {
    const response = await POST(new Request('', { method: 'POST', body: '{}' }));
    
    expect(conversation2measurements).not.toHaveBeenCalled();
    expect(getUserId).not.toHaveBeenCalled();
    expect(postMeasurements).not.toHaveBeenCalled();
    expect(response.status).toBe(200);
  });

  it('should handle errors', async () => {
    (conversation2measurements as jest.Mock).mockRejectedValueOnce(new Error('test error'));

    const response = await POST(new Request('', {
      method: 'POST', 
      body: JSON.stringify({
        statement: 'test statement',
      }),
    }));
    
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      success: false,
      message: 'Error in conversation2measurements',
    });
  });
});