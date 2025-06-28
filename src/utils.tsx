import { CATEGORIES } from "./constants";

export const isCategoryType = (category: string| undefined):CATEGORIES => {
  switch(category) {
    case 'street':
      return CATEGORIES.street
    case 'black-and-white':
      return CATEGORIES.bw
    case 'travel':
      return CATEGORIES.travel
    case 'animals':
      return CATEGORIES.animals
    default:
      return CATEGORIES.none
  }
};
