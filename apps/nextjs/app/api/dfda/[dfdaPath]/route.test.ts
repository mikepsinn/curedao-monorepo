import { GET, POST } from './route';
import { getServerSession } from 'next-auth/next';
import { dfdaGET, dfdaPOST } from '@/lib/dfda';
import { handleError } from '@/lib/errorHandler';

jest.mock('next-auth/next');
jest.mock('@/lib/dfda');
jest.mock('@/lib/errorHandler');

describe('dfdaPath route handlers', () => {
  beforeEach(() => {
    (getServerSession as jest.Mock).mockReturnValue({ user: { id: 'user123' } });
  });

  describe('GET', () => {
    it('should return data when response contains data', async () => {
      const mockData = { foo: 'bar' };
      (dfdaGET as jest.Mock).mockResolvedValue({ data: mockData });

      const response = await GET(new Request('https://example.com/api/dfda/test?param=value'), 
        { params: { dfdaPath: 'test' } });
      
      expect(response.status).toBe(200);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      expect(await response.json()).toEqual(mockData);
    });

    it('should return response when response does not contain data', async () => {
      const mockResponse = { status: 204 };
      (dfdaGET as jest.Mock).mockResolvedValue(mockResponse);

      const response = await GET(new Request('https://example.com/api/dfda/test'), 
        { params: { dfdaPath: 'test' } });
      
      expect(response.status).toBe(204);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      expect(await response.json()).toEqual(mockResponse);
    });

    it('should handle errors', async () => {
      const mockError = new Error('Oops!');
      (dfdaGET as jest.Mock).mockRejectedValue(mockError);
      (handleError as jest.Mock).mockReturnValue(new Response(null, { status: 500 }));

      const response = await GET(new Request('https://example.com/api/dfda/test'), 
        { params: { dfdaPath: 'test' } });
      
      expect(handleError).toHaveBeenCalledWith(mockError);
      expect(response.status).toBe(500);
    });
  });

  describe('POST', () => {
    it('should return data when response contains data', async () => {
      const mockData = { foo: 'bar' };
      (dfdaPOST as jest.Mock).mockResolvedValue({ data: mockData, status: 201 });

      const response = await POST(new Request('https://example.com/api/dfda/test?param=value', {
        method: 'POST',
        body: JSON.stringify({ test: 'data' }),
      }), { params: { dfdaPath: 'test' } });
      
      expect(response.status).toBe(201);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      expect(await response.json()).toEqual(mockData);
    });

    it('should return response when response does not contain data', async () => {
      const mockResponse = { status: 204 };
      (dfdaPOST as jest.Mock).mockResolvedValue(mockResponse);

      const response = await POST(new Request('https://example.com/api/dfda/test', {
        method: 'POST',
        body: JSON.stringify({ test: 'data' }),
      }), { params: { dfdaPath: 'test' } });
      
      expect(response.status).toBe(204);
      expect(response.headers.get('Content-Type')).toBe('application/json');
      expect(await response.json()).toEqual(mockResponse);
    });

    it('should handle errors', async () => {
      const mockError = new Error('Oops!');
      (dfdaPOST as jest.Mock).mockRejectedValue(mockError);
      (handleError as jest.Mock).mockReturnValue(new Response(null, { status: 500 }));

      const response = await POST(new Request('https://example.com/api/dfda/test', {
        method: 'POST', 
        body: JSON.stringify({ test: 'data' }),
      }), { params: { dfdaPath: 'test' } });
      
      expect(handleError).toHaveBeenCalledWith(mockError);
      expect(response.status).toBe(500);
    });
  });
});