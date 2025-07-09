
let test = [1,3,6,2,4,5,7,0,6,2]

console.log(test, mergeSort(test))


function mergeSort(arr){

    if(arr.length<=1){
        return arr
    }
    let m = Math.floor(arr.length/2)

    let left= mergeSort(arr.slice(0,m))
    let right=mergeSort(arr.slice(m))

    return(merge(left,right))
}


function merge(left,right){

let sorted = []

while(left.length && right.length){
    if(left[0]<right[0]){
        sorted.push(left.shift())
    }else{
        sorted.push(right.shift())
    }
}

for(let i=0; i <left.length; i++){
sorted.push(left[i])
}
for(let i=0;i<right.length;i++){
    sorted.push(right[i])
}
return sorted

}