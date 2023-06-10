import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import TGuides from './TGuides'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
//set state managment 
const [loading, setLoading] = useState(true);
const [TravelGuides, setTGuides] = useState([])

const removeTraveGuide = (id) =>{
  const newGuide = TravelGuides.filter((TGuide) => TGuide.id !== id)
 setTGuides(newGuide)
}

const fetchTraveGuide = async () =>{
     setLoading(true)
     try {
      const response = await fetch(url);
      const TravelGuides = await response.json();
      setLoading(false)
      setTGuides(TravelGuides)
     } catch (error) {
      
      setLoading(false)
      console.log(error)
     }
}

useEffect(() =>{
  fetchTraveGuide();
}, [])


if(loading){
  return (
    <main>
       <Loading />
    </main>
  )
}

return (
  <main>
  <TGuides TravelGuides={TravelGuides} removeTraveGuide={removeTraveGuide}/>
</main>
)
}

export default App
