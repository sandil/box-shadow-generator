import React,{useState} from 'react'
function BorderRadius() {
    const [TopLeft, setTopLeft] = useState(0);
    const [TopRight, setTopRight] = useState(0);
    const [BottomRight, setBottomRight] = useState(0);
    const [BottomLeft, setBottomLeft] = useState(0);
    const [BoxBg, setBoxBg] = useState('chocolate');
    return (
        <div>
            <h1><strong>Border Radius Generator</strong></h1>
            <div className="content">
                <div className="controls">
                    <div className="input-container">
                        <label>Top Left Radius</label>
                        <div className="input-content">
                            <input type="text" min="0" max="100" value={TopLeft} onChange={(e)=>setTopLeft(e.target.value)} /> px
                        </div>  
                    </div>
                    <input type="range" min="0" max="100" value={TopLeft} onChange={(e)=>setTopLeft(e.target.value)} />
                    
                    <div className="input-container">
                        <label>Top Right Radius</label>
                        <div className="input-content">
                            <input type="text" min="0" max="100" value={TopRight} onChange={(e)=>setTopRight(e.target.value)} /> px
                        </div>
                    </div>
                    <input type="range" min="0" max="100" value={TopRight} onChange={(e)=>setTopRight(e.target.value)} />
                    <div className="input-container">
                        <label>Bottom Right Radius</label>
                        <div className="input-content">
                            <input type="text" min="0" max="100" value={BottomRight} onChange={(e)=>setBottomRight(e.target.value)} /> px
                        </div>
                    </div>
                    <input type="range" min="0" max="100" value={BottomRight} onChange={(e)=>setBottomRight(e.target.value)} />

                    <div className="input-container">
                        <label>Bottom Left Radius</label>
                        <div className="input-content">
                            <input type="text" min="0" max="100" value={BottomLeft} onChange={(e)=>setBottomLeft(e.target.value)} /> px
                        </div>
                    </div>
                    <input type="range" min="0" max="100" value={BottomLeft} onChange={(e)=>setBottomLeft(e.target.value)} />

                    <label>Box Color</label>
                    <input className="color-pallet" type="color" value={BoxBg} onChange={(e)=>setBoxBg(e.target.value)} />
                </div>
                <div className="output" style={{backgroundColor: `${BoxBg}`, borderRadius: `${TopLeft}px ${TopRight}px ${BottomRight}px ${BottomLeft}px`}}>
                <p>
                    -webkit-box-shadow: {TopLeft}px {TopRight}px {BottomRight}px {BottomLeft}px
                </p>
                <p>
                    -moz-box-shadow: {TopLeft}px {TopRight}px {BottomRight}px {BottomLeft}px
                </p>
                <p>
                    box-shadow: {TopLeft}px {TopRight}px {BottomRight}px {BottomLeft}px
                </p>
                </div>
            </div>
        </div>
    );
}
export default BorderRadius;