import { getDfdaData, createDfdaEntry } from './dfda';
import { mockDeep } from 'jest-mock-extended';

jest.mock('@/lib/prisma');

describe('DFDA Library Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getDfdaData', () => {
    it('should return DFDA data for a valid user', async () => {
      const mockUserId = '1';
      const mockDfdaData = { id: 1, name: 'Test DFDA' };
      const mockPrisma = {
        dFDA: {
          findUnique: jest.fn().mockResolvedValueOnce(mockDfdaData),
        },
      };
      (require('@/lib/prisma').prisma as jest.Mock).mockReturnValueOnce(mockPrisma);

      const result = await getDfdaData(mockUserId);

      expect(mockPrisma.dFDA.findUnique).toHaveBeenCalledWith({
        where: { userId: mockUserId },
      });
      expect(result).toEqual(mockDfdaData);
    });

    it('should return null for an invalid user', async () => {
      const mockUserId = 'invalidUser';
      const mockPrisma = {
        dFDA: {
          findUnique: jest.fn().mockResolvedValueOnce(null),
        },
      };
      (require('@/lib/prisma').prisma as jest.Mock).mockReturnValueOnce(mockPrisma);

      const result = await getDfdaData(mockUserId);

      expect(mockPrisma.dFDA.findUnique).toHaveBeenCalledWith({
        where: { userId: mockUserId },
      });
      expect(result).toBeNull();
    });
  });

  describe('createDfdaEntry', () => {
    it('should create a new DFDA entry for a valid user', async () => {
      const mockUserId = '1';
      const mockDfdaData = { name: 'New DFDA Entry' };
      const mockCreatedEntry = { id: 2, ...mockDfdaData };
      const mockPrisma = {
        dFDA: {
          create: jest.fn().mockResolvedValueOnce(mockCreatedEntry),
        },
      };
      (require('@/lib/prisma').prisma as jest.Mock).mockReturnValueOnce(mockPrisma);

      const result = await createDfdaEntry(mockUserId, mockDfdaData);

      expect(mockPrisma.dFDA.create).toHaveBeenCalledWith({
        data: {
          userId: mockUserId,
          ...mockDfdaData,
        },
      });
      expect(result).toEqual(mockCreatedEntry);
    });

    it('should throw an error for an invalid user', async () => {
      const mockUserId = 'invalidUser';
      const mockDfdaData = { name: 'New DFDA Entry' };
      const mockPrisma = {
        dFDA: {
          create: jest.fn().mockRejectedValueOnce(new Error('Invalid user')),
        },
      };
      (require('@/lib/prisma').prisma as jest.Mock).mockReturnValueOnce(mockPrisma);

      await expect(createDfdaEntry(mockUserId, mockDfdaData)).rejects.toThrow('Invalid user');
    });
  });
});