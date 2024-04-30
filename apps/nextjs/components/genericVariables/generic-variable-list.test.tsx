import { render, screen, waitFor } from '@testing-library/react';
import { GenericVariableList } from './generic-variable-list';

const user = {
  id: 'test-user-id',
};

const searchParams = {
  includePublic: false,
  sort: '-updatedAt',
  limit: 10,
  offset: 0,
  searchPhrase: '',
};

describe('GenericVariableList', () => {
  // Test case for successful fetch
  it('should fetch and set user variables on successful API call', async () => {
    const mockUserVariables = [
      {
        id: 'variable1',
        name: 'Variable 1',
        description: 'This is variable 1',
      },
      {
        id: 'variable2',  
        name: 'Variable 2',
        description: 'This is variable 2',
      },
    ];
    
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockUserVariables),
    });

    render(<GenericVariableList user={user} searchParams={searchParams} />);

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/dfda/variables?'));
    
    await waitFor(() => {
      expect(screen.getByText('Variable 1')).toBeInTheDocument();
      expect(screen.getByText('Variable 2')).toBeInTheDocument();
    });
  });

  // Test case for failed fetch 
  it('should handle API fetch error', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch failed'));

    render(<GenericVariableList user={user} searchParams={searchParams} />);

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/dfda/variables?'));
    
    await waitFor(() => {
      expect(screen.getByText('Get Started!')).toBeInTheDocument();
    });
  });
});