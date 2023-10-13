const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LOGİN":
      return { ...state, openLogin: true };
    case "CLOSE_LOGİN":
      return { ...state, openLogin: false };

    case "UPDATE_USER":
      return { ...state, currentUser: action.payload };
    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
