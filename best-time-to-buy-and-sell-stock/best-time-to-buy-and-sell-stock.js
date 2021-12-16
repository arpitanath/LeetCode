/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = Infinity;
    
    let maxProfit=0;
    
    for(let price of prices){
        
        if(price<minPrice){
           
            minPrice =price;
           }else if(maxProfit< price - minPrice){
               
               maxProfit = price-minPrice;
           }
    }
    
    return maxProfit;
};