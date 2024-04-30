import { text2measurements } from '@/lib/text2measurements';
import { postMeasurements } from '@/lib/dfda';
import { getUserId } from '@/lib/getUserId';
import { POST, GET } from './route';

jest.mock('@/lib/text2measurements');
jest.mock('@/lib/dfda');  
jest.mock('@/lib/getUserId');

describe('/api/text2measurements', () => {
  describe('POST', () => {
    it('should return measurements on valid input', async () => {
      const mockMeasurements = [{ id: 1 }, { id: 2 }];
      (text2measurements as jest.Mock).mockResolvedValueOnce(mockMeasurements);
      (getUserId as jest.Mock).mockResolvedValueOnce('user-id');

      const response = await POST(new Request('', {
        method: 'POST',
        body: JSON.stringify({
          statement: 'test statement',
          localDateTime: '2023-01-01T00:00:00.000Z',
        }),
      }));

      expect(text2measurements).toHaveBeenCalledWith('test statement', '2023-01-01T00:00:00.000Z');
      expect(getUserId).toHaveBeenCalled();
      expect(postMeasurements).toHaveBeenCalledWith(mockMeasurements, 'user-id');
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual({
        success: true,
        measurements: mockMeasurements,
      });
    });
  });

  describe('GET', () => {
    it('should return measurements on valid input', async () => {
      const mockMeasurements = [{ id: 3 }, { id: 4 }];
      (text2measurements as jest.Mock).mockResolvedValueOnce(mockMeasurements);
      (getUserId as jest.Mock).mockResolvedValueOnce('user-id');

      const response = await GET(new Request('https://example.com/api/text2measurements?statement=test&localDateTime=2023-01-01T00:00:00.000Z'));

      expect(text2measurements).toHaveBeenCalledWith('test', '2023-01-01T00:00:00.000Z');
      expect(getUserId).toHaveBeenCalled();
      expect(postMeasurements).toHaveBeenCalledWith(mockMeasurements, 'user-id');
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual({
        success: true,
        measurements: mockMeasurements,
      });
    });
  });
});