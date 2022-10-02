import React from 'react'
import Icons from '../Icons'

function Winning({finish,levelUp,restart}) {
  return (
    
    <div className='winning-box'>

<div>
    <div className='main-inner'>


    { finish?<div className='overbox'><div> You Are A Genius !! Play again and look for More paths
    <div className='wincup'> {Icons.cup} </div>
     </div>
     <div>
     <label onClick={restart}> Restart !! {Icons.restart} </label>
     </div>
      </div> :<>
    <h2>
    <div>

     You Found One of the right paths. Lets make it more hard 
    
    {Icons.wink}

    </div>
    </h2> 
     <div className='playbtn' onClick={levelUp}>
<label> Lets go to the next level </label>
</div>
</>
    }

    
    </div>
</div>

    </div>
    
  )
}

export default Winning