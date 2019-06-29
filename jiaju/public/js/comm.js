ajax({
    url:"j_header.html",
    type:"get"
})
//ES6
.then(res=>{
    var head=document.getElementById("head");
    head.innerHTML=res;
})
ajax({
    url:"j_foot.html",
    type:"get"
})
//ES6
.then(res=>{
    var foot=document.getElementById("foot");
    foot.innerHTML=res;
})