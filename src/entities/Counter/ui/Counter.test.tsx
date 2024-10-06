import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender';
import { Counter } from './Counter';

const options = {
  initialState: {
    counter: {
      value: 10,
    },
  },
};

describe('Counter test', () => {
  test('render', () => {
    componentRender(<Counter />, options);
    expect(screen.getByTestId('value')).toHaveTextContent('10');
  });

  test('increment click', () => {
    componentRender(<Counter />, options);

    fireEvent.click(screen.getByTestId('inc-btn'));
    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });

  test('decrement click', () => {
    componentRender(<Counter />, options);

    fireEvent.click(screen.getByTestId('dec-btn'));
    expect(screen.getByTestId('value')).toHaveTextContent('9');
  });
});
