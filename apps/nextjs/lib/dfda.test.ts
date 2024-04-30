import { getOrCreateDfdaUser, getOrCreateDfdaAccessToken, postMeasurements } from './dfda';
import { db } from './db';

jest.mock('./db');

describe('dfda', () => {
  describe('getOrCreateDfdaUser', () => {
    it('should return existing user if found', async () => {
      (db.user.findUnique as jest.Mock).mockResolvedValueOnce({ id: 'user-id', dfda_user_id: 'dfda-user-id' });
      
      const user = await getOrCreateDfdaUser('user-id');
      
      expect(user).toEqual({ id: 'user-id', dfda_user_id: 'dfda-user-id' });
      expect(db.user.findUnique).toHaveBeenCalledWith({ where: { id: 'user-id' } });
    });
    
    it('should create new DFDA user if not found', async () => {
      (db.user.findUnique as jest.Mock).mockResolvedValueOnce({ id: 'user-id' });
      (db.user.update as jest.Mock).mockResolvedValueOnce({ id: 'user-id', dfda_user_id: 'new-dfda-user-id' });
      
      const mockResponse = {
        user: {
          id: 'new-dfda-user-id',
          scope: 'test-scope',
          accessToken: 'test-access-token',
          refreshToken: 'test-refresh-token',  
          accessTokenExpires: '2023-01-01T00:00:00.000Z',
        },
      };
      jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      } as any);
      
      const user = await getOrCreateDfdaUser('user-id');
      
      expect(user).toEqual(mockResponse.user);
      expect(db.user.update).toHaveBeenCalledWith({
        where: { id: 'user-id' },
        data: {
          dfda_user_id: 'new-dfda-user-id',
          dfda_scope: 'test-scope',
          dfda_access_token: 'test-access-token',
          dfda_refresh_token: 'test-refresh-token',
          dfda_access_token_expires_at: '2023-01-01T00:00:00.000Z',
        },
      });
    });
  });
  
  describe('getOrCreateDfdaAccessToken', () => {
    it('should return existing access token if found', async () => {
      (db.user.findUnique as jest.Mock).mockResolvedValueOnce({ id: 'user-id', dfda_access_token: 'existing-token' });
      
      const token = await getOrCreateDfdaAccessToken('user-id');
      
      expect(token).toBe('existing-token');
    });
    
    it('should create new access token if not found', async () => {
      (db.user.findUnique as jest.Mock).mockResolvedValueOnce({ id: 'user-id' });
      jest.spyOn(global, 'getOrCreateDfdaUser').mockResolvedValueOnce({ accessToken: 'new-token' } as any);
      
      const token = await getOrCreateDfdaAccessToken('user-id');
      
      expect(token).toBe('new-token');
    });
  });
  
  describe('postMeasurements', () => {
    it('should call dfdaPOST with correct arguments', async () => {
      const mockMeasurements = [{ id: 1 }, { id: 2 }];
      jest.spyOn(global, 'dfdaPOST').mockResolvedValueOnce({ success: true });
      
      await postMeasurements(mockMeasurements, 'user-id');
      
      expect(global.dfdaPOST).toHaveBeenCalledWith('measurements', mockMeasurements, 'user-id');
    });
  });
});