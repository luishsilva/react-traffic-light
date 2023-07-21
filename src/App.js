import { useState } from 'react';
import './App.css';

export const App = () => {

  const [indexColor, setIndexColor] = useState(0);

  const colors = [
    {color: "red", indexColor: 0},
    {color: "yellow", indexColor: 1},
    {color: "green", indexColor: 2},
  ];

  const currentColor = colors[indexColor]

return (
    <div className="App">
      <h1>Traffic light</h1>
      <div className="traffic-light-wrapper">
        <div className={`light light-${indexColor === 0 ? currentColor.color : '' }`}>
          <p>Red</p>
        </div>
        <div className={`light light-${indexColor === 1 ? currentColor.color : '' }`}>
          <p>Yellow</p>
        </div>
        <div className={`light light-${indexColor === 2 ? currentColor.color : '' }`}>
          <p>Green</p>
        </div>
      </div>

      <div className="button-wrapper">
        <button onClick={() => setIndexColor(indexColor - 1)} disabled={indexColor === 0} >Preview</button>
        <button onClick={() => setIndexColor(indexColor + 1)} disabled={indexColor >= colors.length - 1 }>Next</button>
      </div>
    </div>
  )
}