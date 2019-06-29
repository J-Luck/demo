var lis=document.querySelectorAll("div.midd-left>ul>li");
        for(var li of lis){
            li.onclick=function(){
                for(var lia of lis){
                    lia.children[0].className="";
                    lia.children[0].children[0].className="";
                }
                this.children[0].className="opendown";
                this.children[0].children[0].className="openspan"
                var divId=this.getAttribute("data-id");
                var div=document.getElementById(divId);
                var parent=div.parentNode;
                var children=parent.children;


                for(var child of children){
                    child.style.display="none";
                }
                div.style.display="block";

            }
        }