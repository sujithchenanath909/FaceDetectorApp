import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt'
import './Logo.css'

const Logo=()=>{

return(


	<div>

			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
	 			<div className="Tilt-inner pa4 "> <img alt='brain' width='90px' height='90px' src='http://pngimg.com/uploads/brain/brain_PNG93.png'/></div>
			</Tilt>
			

	</div>
	);

}

export default Logo;