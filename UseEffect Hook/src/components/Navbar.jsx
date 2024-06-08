import React, { useEffect } from 'react'

function Navbar({color}) {

   useEffect(() => {
    alert("color Was changed")
   }, [color])
   
    

  return (
    <div>
      Hello I am a {color} Navbar.
    </div>
  )
}

export default Navbar
