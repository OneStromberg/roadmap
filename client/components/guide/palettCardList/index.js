import React from 'react';

const PalettCard = (props) => (
    <li className="guide-palett-card">
        {props.children}
    </li>
);

const PalettCardList = () => (
    <ul className="guide-card-list">
        <PalettCard>
            <div className="guide-palett-bg palett-1"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#00dbd0</h5>
                <h5 className="palett-color-name palett-text">$palett-color-1</h5>
                <span className="color-description">Brand, buttons, Good cond.</span>
            </div>
        </PalettCard>
       <PalettCard>
            <div className="guide-palett-bg palett-2"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#15213D</h5>
                <h5 className="palett-color-name palett-text">$palett-color-2</h5>
                <span className="color-description">Headers, titles</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-3"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#444D64</h5>
                <h5 className="palett-color-name palett-text">$palett-color-3</h5>
                <span className="color-description">Subheaders, secondary txt.</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-4"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#a2a6b1</h5>
                <h5 className="palett-color-name palett-text">$palett-color-4</h5>
                <span className="color-description">Aditional text</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-5"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#d1d4db</h5>
                <h5 className="palett-color-name palett-text">$palett-color-5</h5>
                <span className="color-description">Charts, dividers</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-6"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#ff7c7f</h5>
                <h5 className="palett-color-name palett-text">$palett-color-6</h5>
                <span className="color-description">Alert, bad cond, decrease</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-7"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#ffb870</h5>
                <h5 className="palett-color-name palett-text">$palett-color-7</h5>
                <span className="color-description">Headers, titles</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-8"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#7590e0</h5>
                <h5 className="palett-color-name palett-text">$palett-color-8</h5>
                <span className="color-description">Subheaders, secondary txt.</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-9"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#02c0d9</h5>
                <h5 className="palett-color-name palett-text">$palett-color-9</h5>
                <span className="color-description">Aditional text</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-10"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#1ee3a1</h5>
                <h5 className="palett-color-name palett-text">$palett-color-10</h5>
                <span className="color-description">Charts, dividers</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-11"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#2a3242</h5>
                <h5 className="palett-color-name palett-text">$palett-color-11</h5>
                <span className="color-description">Brand, Buttons, good cond.</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-12"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#364154</h5>
                <h5 className="palett-color-name palett-text">$palett-color-12</h5>
                <span className="color-description">Headers, titles</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-13"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text">#f0f9fc</h5>
                <h5 className="palett-color-name palett-text">$palett-color-13</h5>
                <span className="color-description">Subheaders, secondary txt.</span>
            </div>
        </PalettCard>
        <PalettCard>
            <div className="guide-palett-bg palett-14"></div>
            <div className="guide-palett-description">
                <h5 className="palett-color palett-text ">#f0f3f7</h5>
                <h5 className="palett-color-name palett-text">$palett-color-14</h5>
                <span className="color-description">Aditional text</span>
            </div>
        </PalettCard>
    </ul>
);

export default PalettCardList;