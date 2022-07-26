

window.onload = () => {
    temp();
    document.getElementById("btn").addEventListener("click", () => {createAccount(); });  
    document.getElementById("clear").addEventListener("click", () => {clearData();});  
};





let listOfAccounts = [];
const clearData=function(){
    localStorage.clear();
    document.getElementById("display").innerHTML = '';
    listOfAccounts = [];

}

class account {
    #accountName;
    #deposit;
    #accountholder;


    constructor(name, deposit,accountholder) {
        this.accountName = name;
        this.deposit = deposit;
        this.accountholder=accountholder;
    }

    debit(value){
          alert(value);
          this.#deposit-=value;
    }
    deposit(value){
        this.#deposit+=value;
  }
}

 const createAccount=function() {

   
    let name = document.getElementById("selector").value;

    let dep = document.getElementById("deposit").value;
    let holder = document.getElementById("a").value;

    if(holder===''||dep===''){
        alert("all fields must be non empty");
        return;
    }
if(isNaN(parseInt(dep))){
    alert("please provide valid amount ");
    return;
}


    if (localStorage.getItem("data") !== null){
        let final=localStorage.getItem("data");
        let arr=JSON.parse(final);
        arr.push(new account(name, dep,holder));

    localStorage.setItem("data",JSON.stringify(arr));
    temp();
    }
    else{
        listOfAccounts.push(new account(name, dep,holder));

        localStorage.setItem("data",JSON.stringify(listOfAccounts));
        temp();

    }

  document.getElementById("deposit").value='';
  document.getElementById("a").value='';
 
}

const temp=function(){

let final=localStorage.getItem("data");
let arr=JSON.parse(final);
let list = '';
var newLine='\n';
if(arr===null){
    document.getElementById("display").innerHTML = '';
    
    return;
}
for (let index = 0; index < arr.length; index++) {
  
    list +='Name : ' + arr[index].accountholder +'     '+ 'Account name: ' + arr[index].accountName +'     '+ 'Deposit : ' + arr[index].deposit + newLine;

}
document.getElementById("display").innerHTML = list;
}








