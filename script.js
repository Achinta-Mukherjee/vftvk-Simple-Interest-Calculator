function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = p * y * r /100;
    var year = new Date().getFullYear()+parseInt(y);
    var amount = p + interest;
    document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    document.catch(error => console.error('Error!', error.message))
}
function updateRate()
{
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;
}
