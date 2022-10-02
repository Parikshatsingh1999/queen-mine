import React , {useState , useEffect} from 'react'
import Icons from '../Icons.js';
import Icon from '../Icons.js';
import IsSafe from './IsSafe.js';
import Winning from './Winning.js';

function ChessBoard({BoardSize=3,maxSize}) {

    const [size , setSize] = useState(0);
    const [board , setBoard] = useState([]);
    const [startGame,setStartGame] = useState(true);
   const [complete , setComplete] = useState(false);
   const max = maxSize;
    

    useEffect(()=>{

       setSize(BoardSize);

    },[BoardSize]);

    useEffect(()=>{

        if(size) {
           
            let chessBoard = [];
            let boardRow = [];
            for(let i =0;i<size;i++){

                boardRow = [];
                for(let j =0;j<size;j++){
                    
                    boardRow.push(0);

                }

                chessBoard.push(boardRow);
            }

            setBoard(chessBoard);
      
        }

        return ()=>{

            console.log("returned");
            
            setBoard([]);
            

        }
        

    },[size]);

    useEffect(()=>{
if(size){
    

    let check = board.filter((row)=>row.includes("Q"));
if(check.length === size){

    setTimeout(()=>{
    setComplete(true)
    
},200);
}
}

 },[board]);

 const reStart  = ()=>{
    setStartGame(true)
    setComplete(false);
    setSize(4);
 }

 const Levelup = ()=>{
    setComplete(false);
    setSize(prev => prev+=1)
 }

   const adjustBoard = (column,row)=>{

    if(board[column][row] ==="Q"){
        setBoard(prev => {
            prev[column][row]=0;
            return JSON.parse(JSON.stringify(prev));
        })
    }
   
    if(IsSafe(column,row,board,size)){
      
       setBoard(prev=>{
         prev[column][row]="Q";
         
         return JSON.parse(JSON.stringify(prev));
     })
    }


   
    

   }

  return (
    <div className='gamespace'>
        {
        startGame ?
       <div className='instruction-main'>
        <div className='instructions-inner'>
        <div className='instruction-wrapper'>
            <h3> WELCOME , Soon to be a Genius Person , in this QUEEN PLACING Game !! </h3>

<div>
    <label> Its a simple game , all you have to do is - </label>
    <ul>
        <li>
            Place a queen in each row
        </li>
        <li>
            No two queens shall cross each other
        </li>
    </ul>

    <div>
        <label> How to play ? </label>
        <ul>
            <li> Click on a cell to place a queen </li>
            <li> Click Again to empty the cell </li>
            <li> If a queen is being crossed by another queen , no queen will be placed on that cell  </li>
        </ul>
        </div>
</div>
<div className='startbox'>
    <label onClick={()=>setStartGame(false)}>
    Start , to become Genius ! {Icons.start}
</label>
</div>
</div>
        </div>
        </div>:""
        }
    <div className='main-wrap'>
        
        <div className='wrap-inner'>
<div className='board'>
{complete?<Winning restart={reStart} levelUp={Levelup} finish={size<max?false:true}/>:<>
   {

board.map((row,index)=>(
<div className="board-row" key={index}>
    {
row.map((col,ind)=>(
    <div className="cell" onClick={()=>{adjustBoard(index,ind);}} key={index+" "+ind}>{
        col !== 0 ?Icon.queen:" "
    } </div>
))
}
</div>
))


}
</>
}
</div>
        </div>
          </div>
          </div>
  )
  
}

export default ChessBoard