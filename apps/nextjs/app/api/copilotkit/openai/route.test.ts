import { POST } from './route';
import { CopilotBackend } from '@copilotkit/backend';
import { OpenAIAdapter } from '@copilotkit/backend';

describe('POST /api/copilotkit/openai', () => {
  it('should return a successful response', async () => {
    const mockRequest = new Request('https://test.com');
    const mockResponse = { status: 200 };
    
    jest.spyOn(CopilotBackend.prototype, 'response').mockResolvedValue(mockResponse);

    const response = await POST(mockRequest);

    expect(response).toEqual(mockResponse);
    expect(CopilotBackend.prototype.response).toHaveBeenCalledWith(mockRequest, expect.any(OpenAIAdapter));
  });

  it('should handle errors', async () => {
    const mockRequest = new Request('https://test.com');
    const mockError = new Error('Test error');
    
    jest.spyOn(CopilotBackend.prototype, 'response').mockRejectedValue(mockError);

    await expect(POST(mockRequest)).rejects.toThrow(mockError);
  });
});