// returns the appropriate request url depending on current env

const getRequestURL = () => {
  let RESTAURANT_API_URL;
  if (process.env.NODE_ENV === 'production') {
  //  RESTAURANT_API_URL = process.env.PROD_PHOTOS_URL;
    RESTAURANT_API_URL = "https://brokentable.xyz/api";
  } else if (process.env.NODE_ENV === 'development') {
    RESTAURANT_API_URL = process.env.DEV_PHOTOS_URL;
  }
  return RESTAURANT_API_URL;
};

// can use this for whenver I add a search filter would need to change parameters to type, filter
export const searchRestaurantsURL = (name) => {
  const url = `${getRequestURL()}/restaurants/search/${name}`;
  return url;
};

//
export const restaurantsURL = () => {
  const url = `${getRequestURL()}/restaurants`;
  return url;
};

export const getRestaurantURL = (id) => {
  const url = `${getRequestURL()}/restaurants/${id}/photos`;
  return url;
};
