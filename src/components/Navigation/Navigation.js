import React from 'react';
import 'tachyons';

const Navigation=({onRouteChange,isSignedIn})=>{

if(isSignedIn){
console.log('iss',isSignedIn);
return(

	<nav style={{ display:'flex' ,justifyContent:'flex-end' }}>
		
		<p 
		onClick={()=> onRouteChange('signout')}
		className='f4 link dim black underline pa3 pointer'>SignOut</p>

	</nav>


);

}else {

return(

	<nav style={{ display:'flex' ,justifyContent:'flex-end' }}>
		
		<p 
		onClick={()=> onRouteChange('signIn')}
		className='f4 link dim black underline pa3 pointer'>SignIn</p>
		<p 
		onClick={()=> onRouteChange('register')}
		className='f4 link dim black underline pa3 pointer'>Register</p>
	</nav>


);


}


}

export default Navigation;