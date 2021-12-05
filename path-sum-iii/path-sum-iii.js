/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
    let freq ={0 : 1};
    
    function dfs(root,currentSum){
      
        if(!root) return 0;
        
        currentSum +=root.val;
        
        const oldSum = currentSum - targetSum;
        
        let result = freq[oldSum] || 0;
        
        freq[currentSum] = (freq[currentSum] ||0) +1;
        
        result+= dfs(root.left,currentSum)+dfs(root.right, currentSum);
        
        freq[currentSum]--;
        
        return result;
        
    }
    return dfs(root,0);
};