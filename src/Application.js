
import React, {useState, useEffect} from "react";
import HighScore from "./HighScore";

const Application = () => {
    let [count, setState] = useState(0);
    let [overTen, setOverTen] = useState(false)
    const handleClick = () => {
        setState(count+1)
    }
      const resetCount = () => {
        setState(0);
        setOverTen(false);
      };
    useEffect(() => {
      if (count > 10) {
        setOverTen(true);
        console.log("updating...")
      }
    }, [count]);
 
  return (
    <div>
      <h1>You clicked the button {count} times</h1>
      {overTen && <HighScore onReset={resetCount} />}
      <span>
        <button onClick={handleClick}>Click Me</button>
      </span>
    </div>
  );
};

export default Application;

// import React, { Component } from "react";

// class Application extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         count:0, 
//         overTen:false
//     }
//   }
// handleClick = () => {
//  this.setState({count: this.state.count + 1})
// }
// componentDidUpdate(props, state){
// if(this.state.count > 10 && this.state.count !== state.count){
//     this.setState({overTen:true})
// }
// }
//   render() {
//     let {count} = this.state
//     return (
//       <div>
//         <h1>You clicked the button {count} times</h1>
//         {(this.state.overTen) ?  <h3>Beat High score of 10!</h3> : null}
       
//         <span>
//           <button onClick={() => this.handleClick()}>Click Me</button>
//         </span>
//       </div>
//     );
//   }
// }

// export default Application;
