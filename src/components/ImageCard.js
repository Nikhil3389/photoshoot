import React,{useState} from 'react';
import Lightbox from "react-image-lightbox";
// import './modal.css';
import "react-image-lightbox/style.css";
// import Model from '../components/modal';
const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
      <button onClick={() => setIsOpen(true)}>
      <img src={image.webformatURL} alt='' className='w-full' />
      <div className='px-8 py-5'>
        <div className='font-bold text-black text-xl mb-3'>
          Image by {image.user}
        </div>
        
        
      </div>
      </button>
      {isOpen && <Lightbox
        
        mainSrc={image.webformatURL}
        
        onCloseRequest={() => setIsOpen(false)}
        // onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
        // onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
      />}
   
      
    </div>
    
  );
};

export default ImageCard;
