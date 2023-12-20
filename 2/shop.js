let bank = 1000;
let bear = 100;
let wine  = 50;
let pepsi = 50;
let price = 50;

function showBank(){
    return `Balance : ${bank}`;
}

function showBear(){
    return `Bear : ${bear}`;
}

function showWine(){
    return `Wine : ${wine}`;
}

function showPepsi(){
    return `Pepsi : ${pepsi}`;
}
// bear - wine - pepsi
function sell(product , count){
    switch(product){
        case 'bear':
            if(count <= bear){
            bear -= count;
            bank += count * price;
            return `Sell bear: ${count * price}`;
            }
            return "Error: bad count"
        case 'wine':
            if(count <= wine){
            wine -= count;
            bank += count * price;
            return `Sell wine: ${count * price}`;
            }
            return "Error: bad count"
        case 'pepsi':
            if(count <= pepsi){
            pepsi -= count;
            bank += count * price;
            return `Sell pepsi: ${count * price}`
            }
            return "Error: bad count"
        default:
            return "error"
            
    }
}

export {showBank , showBear , showWine , showPepsi, sell};