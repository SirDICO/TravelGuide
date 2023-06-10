import React, { useState } from 'react';

const TGuide = ({id, image, name, info, price, removeTraveGuide}) => {

  const [readMore, setReadMore] = useState(false)

  return <article className='single-tour'> 
      <img src={image} alt={name} />
      <footer>
      <div className='tour-info'>
         <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        
      </div>

      <p>{
        readMore?info : `${info.substring(0, 150)}...`
      }
      <button onClick={()=> setReadMore(!readMore)}>
        {readMore? 'Show less' : ' Read more'}
      </button>
      </p>


   <button className='delete-btn' onClick={()=> removeTraveGuide(id)}>I Don't Want This!</button>
      </footer>

 </article>;
};

export default TGuide;
