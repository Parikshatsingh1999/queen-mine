const IsSafe = (vertical,horizontal,board,size) =>{

    // horizontal 

    for(let j = 0;j<size;j++){
        if(board[vertical][j]==="Q") return false; 
    }

    // to vertical
    for(let j = 0;j<size;j++){
        if(board[j][horizontal]==="Q") return false; 
    }

    // to upper left

    for(let x=vertical,y=horizontal;x>=0&&y>=0;x--,y--){
      
        if(board[x][y]==="Q") return false; 
    }

    // to upper right

    for(let x=vertical,y=horizontal;x>=0&&y<size;x--,y++){
       
        if(board[x][y]==="Q") return false; 
    }

     // to lower right

     for(let x=vertical,y=horizontal;x<size&&y<size;x++,y++){
        
        if(board[x][y]==="Q") return false; 
    }

     // to lower left

     for(let x=vertical,y=horizontal;x<size&&y>=0;x++,y--){
       
        if(board[x][y]==="Q") return false; 
    }
    
    return true;

}

export default IsSafe;