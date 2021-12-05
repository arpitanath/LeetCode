/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
   
    const getRotten = function(){
        
        let [start,fresh]=[[],0];
        
        for(let row=0;row<grid.length;row++){
            
            for(let column=0;column<grid[row].length;column++){
                
                if(grid[row][column]==2){
                    
                    start.push([row,column]);
                } else if(grid[row][column]==1){
                    
                    fresh++;
                }
                
            }
        }
        
        return [start,fresh];
    }
    
    const directions =[[0,-1],[0,1],[1,0],[-1,0]];
    
    let [start,fresh] = getRotten();
    
    let queue =[...start];
    
    let output=0;
    
    while(fresh && queue.length){
        
        let size = queue.length;
        
        for(i=0;i<size;i++){
          
            const [row,col] = queue.shift();
            
            for([dx,dy] of directions){
                
              
                const x = row + dx;
                const y = col + dy;
                
                if(x<0 || x>=grid.length) continue;
                if(y<0 || y>=grid[0].length) continue;
                if(grid[x][y]==0 || grid[x][y]==2) continue;
                
                queue.push([x,y]);
                grid[x][y]=2
                fresh--;
            }
            
        }
        output++;
    }
    
    return fresh==0 ? output : -1;
};