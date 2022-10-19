import React from 'react'
import { useState } from 'react'

function AddStoint() {

    // Redeeming Stoint
    const [pointCount, setPointCount] = useState(0)
    const [disable, setDisable] = React.useState(false);

    function increaseStointHandler() {
      setPointCount(function(prev) {
        
        return prev + 1;
      })
    }

    return(
      <>
        <button onClick={increaseStointHandler}>Add Stoint</button>
        <button disabled={disable} onClick={() => setDisable(true)}>
          Hello Wolrd!
        </button>
        <h3>You have {pointCount} Stoints</h3>
      </>
    )
}

export default AddStoint

