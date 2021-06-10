import React from 'react';
import 'tachyons';
import './FaceRecognition.css'


const FaceRecognition=({imageSource,box})=>{

return(


 <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageSource} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>

	);

}

export default FaceRecognition;