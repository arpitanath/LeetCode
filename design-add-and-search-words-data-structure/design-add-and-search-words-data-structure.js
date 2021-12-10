
class Node{
    
    constructor(){
        this.keys = new Map();
        this.end=false;
    }
    setEnd(){
        this.end = true;
    }
    getEnd(){
        return this.end
    }
}

var WordDictionary = function() {
    
   this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    let node = this.root;
    
    function rec(node, word){
        
        if(word){
            
              if(!node.keys.has(word[0])){
                  node.keys.set(word[0],new Node())
              }
            
            rec(node.keys.get(word[0]),word.substr(1))
        }
        
      else node.setEnd();
    }
    
    rec(node,word);
    return true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    let node = this.root;
    
    function rec(node,word){
       
        if(!node) return false;
        
        if(word){
            
            if(word[0]=="."){
                
                let out = false;
                
                for(let val of node.keys.keys()){
                    
                    out = out || rec(node.keys.get(val),word.substr(1));
                }
                return out;
            }
            else if(node.keys.has(word[0])){
                return rec(node.keys.get(word[0]),word.substr(1))
            }
            else return false;
        }
        
        else return node.getEnd();
        
    }
    
    return rec(node,word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */