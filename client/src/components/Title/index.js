import React from 'react';
import {Animated } from 'react-animated-css';

//great resource -- https://digital-flowers.github.io/react-animated-css.html
//official documentation - https://www.npmjs.com/package/react-animated-css

function Title(){

// const Bounce = styled.div'animation: 2s ${keyframes}'${bounce}'} infinite';


    return(
        <div>
            <Animated animationIn="flash" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} > <h1 style={{backgroundColor: 'red'}}> Quote Beauty</h1> </Animated>
            <Animated animationIn="flash" animationOut="zoomOut" animationInDuration={3000} animationOutDuration={3000}> <h1 style={{backgroundColor: 'red'}}> Quote Beauty</h1> </Animated>
            <Animated animationIn="flash" animationOut="zoomOut" animationDuration="infinite"> <h1 style={{backgroundColor: 'red'}}> Quote Beauty</h1> </Animated>
                       {/* // isVisible={this.state.animacao} */}
                
            
                {/* // animationIn="fadeInDown"
                // animationIn="tada"
               //  animationIn="bounce"
                // animationIn="flash"
                // animationIn="pulse"
                // animationIn="rubberBand"
                // animationIn="shakeX"
                // animationIn="shakeY"
                // animationIn="headShake"
                // animationIn="swing"
                // animationIn="tada"
                // animationIn="wobble"
                // animationIn="jello"
                // animationIn="heartBeat"
                // animationOut="zoomOut" }    
                // isVisible={this.state.animacao} */}
             
            
        </div>
    )
}




export default Title;