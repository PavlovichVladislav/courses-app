import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation';
import { Sidebar } from 'widgets/SideBar';

describe('Sidebar test', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    
    fireEvent.click(screen.getByTestId('toggle'))
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
