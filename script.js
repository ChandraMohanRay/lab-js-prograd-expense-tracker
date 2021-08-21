//calculating over all Expences
var expenceTrack=[] 

function storeElement(){ 
    // document.querySelector(".btn").addEventListener("click",function(){
      //taking the type of expence from user and storing into textField
    var text=document.querySelector("#text").value;

    //getting the amount from uesr storing into text field 
    var amount=parseInt(document.querySelector("#amount").value)
    

    //storing all the expence in an empty array Expence Track Array 
    

    expenceTrack.push({
        "amount":amount,
        "text":text
    })
    
    //creating local storage and storing the values
    localStorage.setItem(text,amount);

    var transactionList=document.createElement('li');
    transactionList.innerHTML=text+" "+amount
    if(amount>0){
        transactionList.className="positive"

        //seprate the expence into income
        document.querySelector("#money-plus").innerHTML="$"+amount
    }
    else{
        transactionList.className="negative"

        //storing -ve into expence section 
        document.querySelector("#money-minus").innerHTML="$"+amount
    }
    
    //appending all Transaction into transactionList
    document.querySelector("#list").appendChild(transactionList)

    //storing total balance by using hof 
    document.querySelector("#balance").innerHTML="$"+(expenceTrack.reduce((transaction1,transaction2)=>({amount: transaction1.amount + transaction2.amount}))).amount
}
