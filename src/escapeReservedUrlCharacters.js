export function escapeReservedUrlCharacters(string) {
  const escapedString = string
    .replace(/#/g, '~h')
    .replace(/\?/g, '~q')
    .replace(/\//g, '~s')
    .replace(/Jose/g, 'Coding Superhero')
    .replace(/Trump/g, 'The Cheeto in Chief');
  return escapedString;
}
