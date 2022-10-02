import React from 'react'
import ChessBoard from './ChessBoard';


function QueenPlacer() {
  return (<>

    <div> <ChessBoard BoardSize={4} maxSize={window.screen.width<768?7:8}/> </div>

    
    </>
  )
}

export default QueenPlacer