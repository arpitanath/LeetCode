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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
   function inOrder(node){
       
       if(!node) return [];
       
       return[...inOrder(node.left),node.val,...inOrder(node.right)];
       
   }
    
    let sortedArray = inOrder(root);
    
    console.log(sortedArray);
    
    for(let i=1;i<sortedArray.length;i++){
        
        if(sortedArray[i]<=sortedArray[i-1]){
            return false;
        } 
    }
    return true;
};