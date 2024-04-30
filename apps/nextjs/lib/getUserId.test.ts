import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth';
import { getUserId } from './getUserId';

jest.mock('next-auth/next');

describe('getUserId', () => {
  it('should return user id from session', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce({ user: { id: 'test-user-id' } });
    
    const userId = await getUserId();
    
    expect(userId).toBe('test-user-id');
    expect(getServerSession).toHaveBeenCalledWith(authOptions);
  });
  
  it('should return undefined if no session', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce(null);
    
    const userId = await getUserId();
    
    expect(userId).toBeUndefined();
  });
});