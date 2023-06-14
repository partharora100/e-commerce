export const initState = {
  products: [],
  sortInput: "",
  ratingInput: 1,
  categoryInput: [],
  searchInput: "",
};

export const ProductReducer = (state, action) => {
  if (action.type === "DISPLAY_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      sortInput: "",
      ratingInput: 1,
      categoryInput: [],
      searchInput: "",
    };
  }

  if (action.type === "FILTER_PRODUCTS") {
    return {
      ...state,
      categoryInput: state.categoryInput.includes(action.payload)
        ? [
            ...state.categoryInput.filter(
              (category) => category !== action.payload
            ),
          ]
        : [...state.categoryInput, action.payload],
    };
  }

  // need to complete these 2 actions
  if (action.type === "SORT") {
    return { ...state, sortInput: action.payload };
  }

  if (action.type === "FILTER_RATING") {
    return { ...state };
  }

  return { ...state };
};

// I need to create a function that filters the products array based on the
