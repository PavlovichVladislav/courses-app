type conditionalClasses = Record<string, string | boolean | undefined>;

export const classNames = (
  mainClass: string,
  conditionalClasses: conditionalClasses = {},
  additionalClasses: (string | undefined)[] = [],
): string => ([
  mainClass,
  ...Object.entries(conditionalClasses)
    .filter(([_, condition]) => Boolean(condition))
    .map(([className]) => className),
  ...additionalClasses.filter(Boolean),
].join(' '));
