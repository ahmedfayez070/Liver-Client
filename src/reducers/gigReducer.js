export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("user"))?._id,
  title: "",
  cat: "",
  cover: "",
  imgs: [],
  desc: "",
  shortTitle: "",
  shortDesc: "",
  deliveryTime: 0,
  revisionNumber: 0,
  features: [],
  price: 0,
};

export const gigReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };

    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        imgs: action.payload.imgs || [],
      };

    case "ADD_FEATURES":
      return {
        ...state,
        features: [...state.features, action.payload],
      };

    case "REMOVE_FEATURES":
      return {
        ...state,
        features: state.features.filter(
          (feature) => feature !== action.payload
        ),
      };

    default:
      return state;
  }
};
