
import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'


const app = new Clarifai.App({
 apiKey: 'a9aedc8217754977b1d9994e881f3ec7'
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
   box: {}
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
      <Navigation/>
     <Logo/>
     <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
     <FaceRecognition box={this.state.box}  imageSource={this.state.imageSource}/>

    </div>
  );

}

  
}

export default App;
