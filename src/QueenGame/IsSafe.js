const IsSafe = (vertical,horizontal,board,size) =>{

    let result = {success:false,path:[]};

    // horizontal 

    let failurePath = [];
    for(let j = 0;j<size;j++){

        failurePath.push([vertical,j]);

        if(board[vertical][j]==="Q") {
            
            result.path = failurePath;
            return result; 
            
        }; 
    }

    // to vertical
     failurePath = [];
    for(let j = 0;j<size;j++){
        failurePath.push([j,horizontal]);
        if(board[j][horizontal]==="Q"){
            result.path = failurePath;
            return result; 

        };
    }

    // to upper left
    failurePath = [];
    for(let x=vertical,y=horizontal;x>=0&&y>=0;x--,y--){
      
        failurePath.push([x,y]);
        if(board[x][y]==="Q") {
            result.path = failurePath;
            return result; 
            
        };
    }

    // to upper right
    failurePath = [];
    for(let x=vertical,y=horizontal;x>=0&&y<size;x--,y++){
        failurePath.push([x,y]);
        if(board[x][y]==="Q") {
            result.path = failurePath;
            return result; 
            
        }; 
    }

     // to lower right
     failurePath = [];
     for(let x=vertical,y=horizontal;x<size&&y<size;x++,y++){
        failurePath.push([x,y]);
        if(board[x][y]==="Q") {
            result.path = failurePath;
            return result; 
            
        }; 
    }

     // to lower left
     failurePath = [];
     for(let x=vertical,y=horizontal;x<size&&y>=0;x++,y--){
        failurePath.push([x,y]);
        if(board[x][y]==="Q") {
            result.path = failurePath;
            return result; 
            
        }; 
    }
    
    result.success = true;
    return result;

}

export default IsSafe;