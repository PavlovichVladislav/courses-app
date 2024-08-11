
type conditionalClasses = Record<string, string | boolean>

export const classNames = (
  mainClass: string, 
  conditionalClasses: conditionalClasses = {}, 
  additionalClasses: string[] = []
): string => {
  console.log(mainClass);

  return ([
    mainClass,
    ...Object.entries(conditionalClasses)
    .filter(([_, condition]) => Boolean(condition))
    .map(([className]) => className),
  ...additionalClasses.filter(Boolean),
  ].join(' '))
}