import React from 'react';

import './playground.css';

// const PlayGround = () => {
//     return (
//         <div style={{ width: '100%', height: '100%', border: '1px solid red', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
//             <span style={{ color: '#fff' }}>PlayGround</span>
//             <canvas style={{ border: '1px solid red', width: '80%', height: '400px'}}>

//             </canvas>
//         </div>
//     )
// };

// export default PlayGround;

const sampleOptions = [
    { id: "753", title: "This is the first option" },
    { id: "035", title: "This is the second option" }
  ];
  
  class OptionsShower extends React.Component {
    constructor(props) {
      super(props);
      const { options } = props;
      this.state = { options, displayOptions: false };
      this.displayOptions = this.displayOptions.bind(this);
    }
  
    displayOptions() {
      this.setState({
        options: sampleOptions,
        displayOptions: !this.state.displayOptions
      });
    }
  
    render() {
      var options = null;
      if (this.state.displayOptions) {
        options = (
          <ul id="options">
            {this.state.options.map(option => (
              <li key={option.id}>{option.title}</li>
            ))}
          </ul>
        );
      }
      return (
        <div>
          <button onClick={this.displayOptions}>
            {this.state.displayOptions ? "Hide options" : "Show options"}
          </button>
          {options}
        </div>
      );
    }
  }

  export default OptionsShower;
  