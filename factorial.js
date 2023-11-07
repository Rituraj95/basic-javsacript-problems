const num=parseInt(prompt("enter any no"));
if(num<0){
    console.log("factorial of negetive no doesnot exist");
}
else if(num===0){
    console.log("the factorial is 0");
}
else{
    let fact =1;
    for(i=1;i<=num;i++){
        fact *=i;
        
    }
    console.log("the factorial is "+fact);
}
