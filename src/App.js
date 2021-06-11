
import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'


const app = new Clarifai.App({
 apiKey: 'ADDKEY'
});


const particleOptions={
                particles: {
                  number:{

                    value:50,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  }
                }
              }

class App extends Component{


constructor() {

super();
this.state={

  input:'',
  imageSource:'',
   box: {},
   route:'signIn',
   isSignedIn:false
}

}

onInputChange=(event)=>{

this.setState({input:event.target.value});
  console.log(event.target.value);
}

calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);  

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
   
    this.setState({box: box});
    
  }

  onRouteChange=(value)=>{

    if(value==='home'){

      this.setState({isSignedIn:true})
    }else if(value==='signout'){

      this.setState({isSignedIn:false})
    }

    this.setState({route:value});

  }


onButtonSubmit=()=>{

 
 this.setState({imageSource:this.state.input});
 
 app.models.
 predict(
  Clarifai.FACE_DETECT_MODEL,
  this.state.input
  ).then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=>console.log(err));  

}



render(){

return (
    <div className="App">
      <Particles className='particle'
              params={particleOptions}
             
            />
                  <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
     {
      this.state.route==='signIn' ? <SignIn onRouteChange={this.onRouteChange}/>
     
     : (this.state.route==='home' ? 

      <div>
       <Logo/>
       <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
       <FaceRecognition box={this.state.box}  imageSource={this.state.imageSource}/> 
       </div>
       :
       <Register onRouteChange={this.onRouteChange}/>
       )
     
     }
    </div>
  );

}

  
}

export default App;
