import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt'
import './ImageLinkForm.css'

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{

return(


	<div>

	<p className='f3'>

	{'This magic brain will help you to detect faces in your picture ,Try it now'}

	</p>

		<div className='center'>
		<div className='form pa4 br3 shadow-3 w-50 center'>
			<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
			<button className='w-30 grow f4 link ph3 pv2  dib white  bg-light-purple'
			onClick={onButtonSubmit}
			>Detect Now</button>
		</div>
		</div>	

	</div>
	);

}

export default ImageLinkForm;