import { classNames } from './classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('class')).toBe('class');
  });

  test('first param with additional details', () => {
    expect(classNames('class', {}, ['add', 'addMore']))
      .toBe('class add addMore');
  });

  test('first param with conditional params', () => {
    expect(
      classNames(
        'class',
        { hovered: true, scrollable: true },
        ['add', 'addMore'],
      ),
    ).toBe('class hovered scrollable add addMore');
  });

  test('first param with false conditional params', () => {
    expect(
      classNames(
        'class',
        { hovered: true, scrollable: false },
        ['add', 'addMore'],
      ),
    ).toBe('class hovered add addMore');
  });

  test('first param with undefined conditional params', () => {
    expect(
      classNames(
        'class',
        { hovered: undefined, scrollable: true },
        ['add', 'addMore'],
      ),
    ).toBe('class scrollable add addMore');
  });
});
