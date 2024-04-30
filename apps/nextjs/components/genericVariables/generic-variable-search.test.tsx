import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { GenericVariableSearch } from './generic-variable-search';
import { GenericVariableList } from './generic-variable-list';

jest.mock('./generic-variable-list', () => ({
  GenericVariableList: jest.fn(() => <div>Mocked GenericVariableList</div>),
}));

const user = {
  id: 'test-user-id',
};

describe('GenericVariableSearch', () => {
  // Test case for search input change
  it('should update searchPhrase state on input change', () => {
    render(<GenericVariableSearch user={user} />);
    const searchInput = screen.getByPlaceholderText('Search variables...');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  // Test case for debounced search
  it('should trigger search with debounced searchPhrase', async () => {
    jest.useFakeTimers();
    render(<GenericVariableSearch user={user} />);
    const searchInput = screen.getByPlaceholderText('Search variables...');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(GenericVariableList).toHaveBeenCalledWith(
        expect.objectContaining({
          searchParams: expect.objectContaining({
            searchPhrase: 'test',
          }),
        }),
        expect.anything()
      );
    });
  });
});