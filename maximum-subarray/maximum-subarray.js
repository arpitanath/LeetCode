/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    const allPositives = nums=>nums.every(a=>a>0);
    
    const allNegatives = nums => nums.every(a=>a<0);
    
    Array.prototype.max = function(){
        
        return Math.max.apply(null,this);
    }
    
    if(allNegatives(nums)) return nums.max();
    
    let temp={ start:0, sum:0};
    
    let result={start:0,sum:0,end:0};
    
    for(let i=0;i<nums.length;i++){
        
        temp.sum+=nums[i];
        
        if(temp.sum>result.sum){
            
            result ={start:temp.start,sum:temp.sum,end:i}
        }
        if(temp.sum <0){
            temp.sum=0;
            temp.start=i+1;
        }
    }
    return result.sum;
};