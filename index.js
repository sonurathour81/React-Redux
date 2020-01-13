
// function transform(offset) {
//     const cos = Math.cos(offset);
//     const sin = Math.sin(offset);
//     return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
//   }
  
//   class App extends React.Component {
//     state = { 
//         styleOne: {}, 
//         styleTwo: {} 
//     };
   
  
//   onMouseMove =(event) => {
//     this.setState({
        
//       styleOne: transform(-event.clientX / event.clientY),
//       styleTwo: transform(event.clientX / event.clientY),
      
  
//     })
//   }
  
//     render(){
//       return React.createElement('p', [], ['hello']);
//     }
//   }
//   ReactDOM.render(
   
//     React.createElement(App, null, null), document.querySelector("#root")
//   )
