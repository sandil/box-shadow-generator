import React,{useState} from 'react'
function TextShadow() {    
    const [Hori, setHori] = useState(0);
    const [Verti, setVerti] = useState(3);
    const [Blur, setBlur] = useState(10);
    const [Color, setColor] = useState('red');
    const [EnterText, setEnterText] = useState('Text');
    return (
        <div>
            <h1><strong>Text Shadow Generator</strong></h1>
            <div className="content">
                <div className="controls">
                    <label>Enter Text</label>
                    <input type="text" value={EnterText} onChange={(e)=>setEnterText(e.target.value)}/>
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
                    <input className="color-pallet" type="color" value={Color} onChange={(e)=>setColor(e.target.value)} />
                </div>
                <div>
                    <div  style={{textShadow: `${Hori}px ${Verti}px ${Blur}px ${Color}`, fontSize:'60px', fontWeight:'bold'}}>
                        {EnterText}
                    </div>
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
    )
}
export default TextShadow;