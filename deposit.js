window.onload = () => {
    display();
    document.getElementById("submit").addEventListener("click", () => { update(); });
};


const display = function () {
    if (localStorage.getItem("data") === null){return;}
    let final = localStorage.getItem("data");
    let arr = JSON.parse(final);
    arr.forEach((a) => {

        let op = document.createElement("option");
        op.value = a.accountName;
        op.text = a.accountholder;
        document.getElementById("listofaccounts").appendChild(op);
    });
}

const update = function () {

    var e = document.getElementById("listofaccounts");
    var amount = document.getElementById("amount").value;
    if(amount===''){
        alert("please provide an amount");
        return;
    }

    if(isNaN(parseInt(amount))){
        alert("please provide valid amount ");
        return;
    }
    var text = e.options[e.selectedIndex].text;
    if(text=='select account'){
        alert('please select an account');
        return;
    }


    let final = localStorage.getItem("data");
    let arr = JSON.parse(final);

    for (let index = 0; index < arr.length; index++) {

        if (arr[index].accountholder == text) {
            let val = parseInt(amount);
            let current=parseInt(arr[index].deposit);
                 current += val;
                 arr[index].deposit=current;
                localStorage.setItem("data", JSON.stringify(arr));
                alert("deposit succefful");
                alert(arr[index].deposit);
                return;

            

        }
    }

  
}
