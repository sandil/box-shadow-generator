import React,{useState} from 'react'
import './App.css';

function App() {
  const [Hori, setHori] = useState(10);
  const [Verti, setVerti] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState('black');
  const [CheckOn, setCheckOn] = useState(false);
  const [BoxBg, setBoxBg] = useState('chocolate');
  return (
    <div className="App">
      <h1><strong>Box Shadow Generator</strong></h1>
      <div className="content">
        <div className="controls">
          <div className="input-container">
            <label>Horizontal Length</label>
            <div className="input-content">
              <input type="text" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} /> px
            </div>  
          </div>
          <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
          
          <div className="input-container">
            <label>Vertical Length</label>
            <div className="input-content">
              <input type="text" min="-200" max="200" value={Verti} onChange={(e)=>setVerti(e.target.value)} /> px
            </div>
          </div>
          <input type="range" min="-200" max="200" value={Verti} onChange={(e)=>setVerti(e.target.value)} />
          <div className="input-container">
            <label>Blur</label>
            <div className="input-content">
              <input type="text" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} /> px
            </div>
          </div>
          <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
          <label>Shadow Color</label>
          <input className="color-pallet" type="color" value={Color} onChange={(e)=>setColor(e.target.value)} /><br/>
          <label>Box Color</label>
          <input className="color-pallet" type="color" value={BoxBg} onChange={(e)=>setBoxBg(e.target.value)} />
          <div className="switch">
            <label>
              Outline
              <input type="checkbox" value={CheckOn} onChange={()=>setCheckOn(!CheckOn)} />
              <span className="lever"></span>
              Inset
            </label>
          </div>
        </div>
        <div className="output" style={{backgroundColor: `${BoxBg}`, boxShadow: `${CheckOn ? 'inset': ''} ${Hori}px ${Verti}px ${Blur}px ${Color}`}}>
          <p>
            -webkit-box-shadow: {Hori}px {Verti}px {Blur}px {Color}
          </p>
          <p>
            -moz-box-shadow: {Hori}px {Verti}px {Blur}px {Color}
          </p>
          <p>
            box-shadow: {Hori}px {Verti}px {Blur}px {Color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
