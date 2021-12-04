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
 * @return {number[]}
 */
var rightSideView = function(root) {
   
    let result=[];
    let queue=[];
   
    if(root==null) return result;
    queue.push(root);
    while(queue.length!==0){
        
        
           let size = queue.length;
        
        for(let i=0;i<size;i++){
            
            let current = queue.shift();
            
            if(i==size-1) result.push(current.val)
            
            if(current.left) queue.push(current.left);
            
            if(current.right) queue.push(current.right);
            
        }
            
            
    }
  return result;
};