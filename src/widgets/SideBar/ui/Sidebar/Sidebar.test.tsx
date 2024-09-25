import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender';
import { Sidebar } from 'widgets/SideBar';

describe('Sidebar test', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle Sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(screen.getByTestId('toggle'));
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
