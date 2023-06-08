export const initState = {
  products: [],
  filteredProducts: [],
  activeCategoryArr: [],
};

export const ProductReducer = (state, action) => {
  if (action.type === "DISPLAY_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
      filteredProducts: action.payload,
    };
  }

  if (action.type === "CLEAR_FILTERS") {
    return { ...state, filteredProducts: state.products };
  }

  if (action.type === "FILTER_PRODUCTS") {
    console.log(action.string);
    console.log(state.activeCategoryArr);

    return {
      ...state,
      filteredProducts: action.payload,
      activeCategoryArr: state.activeCategoryArr.includes(action.string)
        ? [
            ...state.activeCategoryArr.filter(
              (category) => category !== action.string
            ),
          ]
        : [...state.activeCategoryArr, action.string],
    };
  }

  if (action.type === "") {
    return { ...state };
  }

  if (action.type === "") {
    return { ...state };
  }

  return { ...state };
};
