import { render, screen } from '@testing-library/react';
import UserVariablesPage from './page';

const user = {
  id: 'test-user-id',
  // Add other necessary user properties
};

describe('UserVariablesPage', () => {
  it('should pass the correct search parameters to GenericVariableList', () => {
    const expectedSearchParams = {
      includePublic: false,
      sort: '-updatedAt',
      limit: 10, 
      offset: 0,
      searchPhrase: "",
    };

    render(<UserVariablesPage user={user} />);
  
    expect(screen.getByTestId('variable-list')).toHaveAttribute('searchParams', JSON.stringify(expectedSearchParams));
  });
});