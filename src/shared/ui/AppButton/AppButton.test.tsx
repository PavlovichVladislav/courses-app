import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from './AppButton';

describe('AppButton test', () => {
  test('render', () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render clear button', () => {
    render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
