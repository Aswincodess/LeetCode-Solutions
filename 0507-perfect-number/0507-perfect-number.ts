function checkPerfectNumber(num: number): boolean {
    
   let sum:number=0;

   for(let i:number=1;i<num;i++){
    if(num%i===0){
        sum=sum+i
    }
   }
   return sum===num
};