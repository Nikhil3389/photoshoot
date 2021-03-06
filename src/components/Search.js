import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import noimage from './noimage.jpg';

function Search() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      
      `https://pixabay.com/api/?key=22441188-71a673b15daa92a2dcc2272aa&q=yellow+flowers&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <center>
          <img
            vspace='108'
            src={noimage}
            width='350px'
            height='300px'
            alt='noimage'
            align='middle'
          />
        </center>
      )}

      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-36'>Loading...</h1>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
