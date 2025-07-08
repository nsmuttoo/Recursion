
let array = []
fib(8)
console.log(array)

function fib(length){

if(array.length==0){
    array.push(0)
}else if(array.length == 1){
array.push(1)
}else
{
    array.push(array[array.length-1]+array[array.length-2])
}
if(length-1>0){
fib(length-1)
}
}