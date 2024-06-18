import React from 'react'
import { Heade } from '../header.jsx'
import Image from 'next/image'
const morbi = () => {
  return (
    <>
      <Heade />
      <div className='main' style={{ height: '672px', width: '1222px', position: 'relative', left: '295px', top: '17px', borderRadius: '15px', backgroundColor: '#d8f2ff' }}>
        <div className="box" style={{ display: "flex", flexDirection: 'column', width: '1222px', height: '672px', alignItems: 'center', justifyContent: 'center' }}>
        <div class="wrapper">
        <Image className='ig' src='/ashwagandha.webp' width='200' height='320'></Image>
        <div class="textbox">
                  <h2>Himalayan Ashwagandha</h2>
                  <p> As an Ayurvedic herb, it is known to combat insomnia, boosting energy and increasing the body's stamina and vitality.Ashwagandha contains chemicals that might help calm the brain, reduce swelling, lower blood pressure, and alter the immune system. Since ashwagandha is traditionally used as an adaptogen, it is used for many conditions related to stress. Adaptogens are believed to help the body resist physical and mental stress.it is also used to build muscle mass, improve physical strength.it is also helpful to build testoterone level in men.
                      </p>
         </div>
        <br />
        
    </div>
        </div >
      </div>
    </>
  )
}

export default morbi