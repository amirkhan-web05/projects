import axios from 'axios';

export const setPhoto = (photo) => ({
   type: 'APP/PHOTO',
   photo,
});

export const getPhoto = (photo) => ({
   type: 'APP/GET',
   photo,
});

export const saveFile = (photoFile) => async (dispatch) => {
   await axios
      .patch('http://localhost:3001/photo', {
         small: photoFile,
      })
      .then((data) => {
         dispatch(setPhoto(data.data.small));
      });
};

export const fileGet = () => async (dispatch) => {
   await axios.get('http://localhost:3001/photo').then(({ data }) => {
      console.log(data);
      dispatch(getPhoto(data.small));
   });
};
