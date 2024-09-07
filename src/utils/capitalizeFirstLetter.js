// In Production
export const capitalizeFirstLetter = (word) => {
  return word ? word?.charAt(0)?.toUpperCase() + word?.slice(1) : '';
};
