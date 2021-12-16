/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
   let prevMin = nums[0];
    
   let prevMax = nums[0];
    
   let result=nums[0];
    
    for(let i=1;i<nums.length;i++){
        
        let currMax = Math.max(nums[i]*prevMax, nums[i],nums[i]*prevMin);
        
        let currMin = Math.min(nums[i]*prevMin , nums[i],nums[i]*prevMax);
        
        prevMin = currMin;
        
        prevMax = currMax;
        
        result= Math.max(result,currMax);
    }
    return result;
};