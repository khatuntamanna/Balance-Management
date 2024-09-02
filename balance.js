document.getElementById('deposite_button').addEventListener('click', function (){
    var depositeFiled = document.getElementById('deposite_amount');
    var depositeAmount = parseFloat(depositeFiled.value);
   
    if(isNaN(depositeAmount)){
     return 0;
    }
   
    var depositeBalance = document.getElementById('deposite_balance');
    var depositeNumber = parseFloat(depositeBalance.innerText);
    
   
    var totalDepositeBalance = depositeAmount + depositeNumber;
       depositeBalance.innerHTML = totalDepositeBalance
   
       var depositeTotal = document.getElementById('deposite_total');
       var depositeTotalNumber = parseFloat(depositeTotal.innerText);
   
       if(isNaN(depositeTotalNumber)){
         return 0 ;
       }
           depositeTotal.innerHTML = depositeTotalNumber + depositeAmount;
   
       depositeFiled.value = '';
              
   
                                                                                                                                                                                                     
     console.log( depositeBalance);
   
   })
   
   
   // withdraw amount calculation started here
   
   
   document.getElementById('withdraw_button').addEventListener('click', function (){
        
     var withdrawField = document.getElementById('withdraw_amount');
     var withdrawNumber = parseFloat(withdrawField .value);
     if(isNaN(withdrawNumber)){
       return 0 ;
     }
   
     var withdrawBalance = document.getElementById('withdraw_balance');
     var withdrawBalanceNumber = parseFloat(withdrawBalance.innerText);
   
     var totalWithdraw = withdrawNumber + withdrawBalanceNumber;
        
   
         var depositeTotal = document.getElementById('deposite_total');
         var depositeTotalNumber = parseFloat(depositeTotal.innerText);
   
        
   
         
         if(depositeTotalNumber == 0 ){
           return  withdrawField.value = '', alert("you don't have enough balance to withdraw")
         }
   
   
   
         depositeTotal.innerHTML = depositeTotalNumber - withdrawNumber
   
         withdrawBalance.innerHTML = totalWithdraw;
   
         withdrawField.value = '';
   })
   