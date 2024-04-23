var nums = [4,6,8,10,2,9,1,4,3,20]
var total=0
for(a=0; a<10; a++){
    if(nums[a] % 2===0){
    total=total+nums[a]
 }
}
console.log("la suma de los numeros pares es: " + total)