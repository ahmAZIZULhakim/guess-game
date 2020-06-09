

var numofwon=0;
var numoflost=0;


for(var i=1;i<=5;i++)
{
    var num=parseInt(prompt("enter a number 1 to 5 "));

var rnumber= Math.floor(Math.random() *5)+1;

if(num==rnumber){
    console.log("you have won")
    numofwon++;
}
else{
    console.log("you lost"+rnumber)
    numoflost++;
}
document.write("total of won = "+ numofwon+ "<br>")
document.write("total of lost = "+ numoflost +" <br>")
}


