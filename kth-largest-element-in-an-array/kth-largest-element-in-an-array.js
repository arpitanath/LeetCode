/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
     k = nums.length-k;
    
    return helper(0,nums.length-1);
    
    function helper(start,end){
        
        let pivot = nums[end];
        
        let p = start;
        
        for(let i=start;i<end;i++){
            if(nums[i]<pivot){
                
                [nums[i],nums[p]] = [nums[p],nums[i]];
                p++;
            }
        }
        
        [nums[p],nums[end]] = [nums[end],nums[p]];
        
        if(p<k) return helper(p+1,end);
        if(p>k) return helper(start,p-1);
        return nums[p];
    }
};