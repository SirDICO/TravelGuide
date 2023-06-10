import React from 'react';
import TGuide from './TGuide';
const TGuides = ({TravelGuides, removeTraveGuide}) => {
  return <section>
     <div className='title'>
        <h2> Travel Guides for Summer 2023</h2>
     </div>
     <div>
        {
          TravelGuides.map((tguide) =>{
            return <TGuide key={tguide.id} {...tguide} removeTraveGuide={removeTraveGuide} />
          })
        }
     </div>
  </section>
};

export default TGuides;
