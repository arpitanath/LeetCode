
var Trie = function() {
    this.root={};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   
    let node = this.root;
    
    for(let c of word){
        if(node[c]==null) node[c]={};
        node=node[c];
    }
    node.isWord=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */

Trie.prototype.traverse = function(word){
    
    let node= this.root;
    
    for(let c of word){
       if(node[c]==null) return null; 
       node=node[c];
    }
    return node;
}

Trie.prototype.search = function(word) {
    
   const node = this.traverse(word);
    
    return node!==null && node.isWord==true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
    const node = this.traverse(prefix);
    
    return node!=null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */