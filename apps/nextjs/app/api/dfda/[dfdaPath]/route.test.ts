import { dfdaGET, dfdaPOST } from '@/lib/dfda';  
import { getUserId } from '@/lib/getUserId';
import { GET, POST } from './route';

jest.mock('@/lib/dfda');
jest.mock('@/lib/getUserId');

describe('/api/dfda/[dfdaPath]', () => {
  describe('GET', () => {
    it('should call dfdaGET with correct arguments', async () => {
      const mockResponse = { data: 'test data' };
      (dfdaGET as jest.Mock).mockResolvedValueOnce(mockResponse);
      (getUserId as jest.Mock).mockResolvedValueOnce('user-id');

      const response = await GET(new Request('https://example.com/api/dfda/test-path?param=value'), {
        params: { dfdaPath: 'test-path' },
      });

      expect(dfdaGET).toHaveBeenCalledWith('test-path', { param: 'value' }, 'user-id', undefined);
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual('test data');  
    });
  });
  
  describe('POST', () => {
    it('should call dfdaPOST with correct arguments', async () => {
      const mockResponse = { data: 'test response' };
      (dfdaPOST as jest.Mock).mockResolvedValueOnce(mockResponse);
      (getUserId as jest.Mock).mockResolvedValueOnce('user-id');

      const response = await POST(
        new Request('https://example.com/api/dfda/test-path?param=value', {
          method: 'POST',
          body: JSON.stringify({ test: 'body' }),
        }),
        { params: { dfdaPath: 'test-path' } }  
      );

      expect(dfdaPOST).toHaveBeenCalledWith('test-path', { test: 'body' }, 'user-id', { param: 'value' }, undefined);
      expect(response.status).toBe(200); 
      expect(await response.json()).toEqual('test response');
    });
  });
});