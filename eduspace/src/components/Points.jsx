import React, { useState } from 'react'
import '../styles/Styles.css'


const Points = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

      return (
        <div>
          <div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <h1 className="hoverOver">Earn Rewards With Stoints Contribute towards the learning ecosystem
            and earn rewards! Click here for more information</h1>
            </div>
    
            {isHovering && <h2 className="hoverPoints">Knaap</h2>}
          </div>
        </div>
      );
}

export default Points