import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fileGet, saveFile, setPhoto } from '../redux/actions/photo';

export const Photo = () => {
   const dispatch = useDispatch();
   const photo = useSelector((state) => state.photo.photo);

   //    console.log(photo.small);

   useEffect(() => {
      dispatch(fileGet());
   }, []);

   const onMainPhoto = (e) => {
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
         if (e.target.files.length) {
            dispatch(saveFile(reader.result));
         }
      };
      reader.readAsDataURL(e.target.files[0]);
   };

   return (
      <div className="photo">
         <h1>Photo</h1>
         <img width={200} height={200} src={photo} alt="Ava" />
         <input type="file" onChange={onMainPhoto} />
      </div>
   );
};
