// function fibonacci(n){
//     var a=0,b=1,temp, series=[];
//     while(n>0){
//         series.push(a);
//         temp=a;
//         a=b;
//         b=temp+b;
//         n--;
//     }
//     return series;
// }
// console.log(fibonacci(10));

var pascaltraingle;
var generate =function(numrows){
    let pascaltraingle=new Array(numrows);
    for(let i=0;i<numrows;i++){
    row[0]=1;
    row(row.length-1)=1;
    for(let j=1;j<row.length-1;j++){
         rowabove=pascaltraingle[i-1];
        row[j]=rowabove[j]+rowabove[j-1];

    }
    pascaltraingle[i]=row;
}
return pascaltraingle;
}
console.log(pascaltraingle(i));