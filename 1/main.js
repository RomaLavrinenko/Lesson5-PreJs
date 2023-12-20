function Counter(){
    let cou = 0;
    return function inner(step){
        cou += step;
        console.log(cou);
    }
}

let sum = new Counter();
sum(3);
sum(5);
sum(228);
