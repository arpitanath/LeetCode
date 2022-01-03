/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let left =0;
    let right=0;
    let longestSubstringLength =0;
    
    let set = new Set();
    
    while(right<s.length){
        
        if(!set.has(s.charAt(right))){
            
            set.add(s.charAt(right));
            right++;
            longestSubstringLength = Math.max(longestSubstringLength, set.size);
        }else{
            
            set.delete(s.charAt(left));
            left++;
        }
    }
    
    return longestSubstringLength;
};