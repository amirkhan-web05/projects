const initialState = {
   photo: null,
};

export const photo = (state = initialState, action) => {
   switch (action.type) {
      case 'APP/GET': {
         return {...state, photo:action.photo}
      }

      case 'APP/PHOTO': {
         return { ...state, photo: action.photo };
      }

      default:
         return state;
   }
};
