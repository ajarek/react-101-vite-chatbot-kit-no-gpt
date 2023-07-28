// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);
console.log(imageUrl);
  return (
    <div className='dog'>
      <img src={imageUrl} alt='a dog' />
    </div>
  );
};

export default DogPicture;