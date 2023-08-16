let text = prompt("hansi istifadeci olaraq giris edirsiniz?(admin, user, guest")

if(text==="admin"){
    console.log("xos geldin cenab admin");
}
else if(text==="user"){
    console.log("xos geldin istifadeci");
}
else if(text==="guest"){
    console.log("xos geldin qonaq");
}
else{
    console.log("bele istifadeci yoxdur");
}