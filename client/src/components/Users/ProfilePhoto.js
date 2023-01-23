import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePhoto = () => {
    let history = useNavigate();

    const [file, setFile] = useState(null);

  const onFormSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', file);
    const config = {
      headers: {
      'content-type' : 'multipart/form-data',
    },
  };
      const url = "http://localhost:2000/user/upload";
      axios.post(url,formData, config).then((response)=>{
        alert('Image uploaded')
      }).catch((err) =>{
        console.log('err',err);
      })
      history('/about')
};

  const onInputChange = (e) =>{
    setFile(e.target.files[0])
  }
  
  return (
    <div>
         <form onSubmit={onFormSubmit}>
          <h1>Simple file upload</h1>
          <input type="file" name='photo' onChange={onInputChange} />
          <button type='submit'> Upload</button>
        </form>
    </div>
  )
}

export default ProfilePhoto
