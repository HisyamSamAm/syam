function changeText()
{
    var id=document.getElementsByName("button")[0].id;
    if(id==1)
{
    document.getElementById("text").innerHTML = "BERUBAH KAN, COBA CLIK LAGI!!!!";
    document.getElementsByName("button")[0].id=0;
}
else
{
    document.getElementById("text").innerHTML = "PINTAR!!!!";
    document.getElementsByName("button")[0].id=1;
}
}

var x=0;
function myfun()
{
    if(x==0)
    {
        document.getElementById("pic").src="aset/onepi.png";
        x++
    }
    else
    {
        document.getElementById("pic").src="aset/icon.png";
        x=0
    }
}