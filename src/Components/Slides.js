import React, { Component } from 'react';

class Slides extends Component {
  state = { 
    render:''
   }


  randomize = () => {
    let imgBank = [
      'https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg',
      'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      'https://www.thecocktaildb.com/images/media/drink/ywxwqs1439906072.jpg',
      'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
      'https://www.thecocktaildb.com/images/media/drink/o56h041504352725.jpg'
    ] 

    let i = Math.floor(Math.random()*Math.floor(5))
    let prevImg =''
    let currImg = imgBank[i]
    if(currImg === prevImg || prevImg === currImg){
     currImg = imgBank[Math.floor(Math.random()*Math.floor(5))]
    }
    this.cycle()
    prevImg=currImg
    currImg=imgBank[i]
    console.log('curr', currImg, 'prev', prevImg)
    return <img src={currImg} alt='drinkImg'/>
  }

  cycle = () => {
  setTimeout(() => {
    console.log('tick')
    this.setState({
      render: Math.random
    })
  }, 5000);
  }

  render() { 
    return ( 
      <div>
        {this.randomize()}
      </div>
     );
  }
}
 
export default Slides;