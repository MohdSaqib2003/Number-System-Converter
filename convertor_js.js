 
    var frm = document.getElementById("from");
    var too = document.getElementById("to");

    var inp = document.getElementById("input");
    var out = document.getElementById("output");

    var clrs = document.getElementById("clr");
    clrs.style.display="none";
    function clr(){
        inp.value="";
        out.value="";
        clrs.style.display="none";
    }
     
     function convert(){

        clrs.style.display="inline";


            if(frm.value == too.value){
                out.value=inp.value;
            }
                 // Conversion Decimal to other number system
            else  if((frm.value=='Decimal') && (too.value=='Binary')){   
                out.value = parseInt((inp.value),10).toString(2);
            }
            else  if((frm.value=='Decimal') && (too.value=='Octal')){   
                out.value = parseInt((inp.value),10).toString(8);
            }
            else  if((frm.value=='Decimal') && (too.value=='Hexadecimal')){
                out.value = parseInt((inp.value),10).toString(16);
            }
 
                   // Conversion Binary to other number system
            else  if((frm.value=='Binary') && (too.value=='Decimal')){   
                out.value = parseInt((inp.value),2).toString(10);
            }
            else  if((frm.value=='Binary') && (too.value=='Octal')){   
                out.value = parseInt((inp.value),2).toString(8);
            }
            else  if((frm.value=='Binary') && (too.value=='Hexadecimal')){
                out.value = parseInt((inp.value),2).toString(16);
            }
            
               // Conversion Octal to other number system
            else  if((frm.value=='Octal') && (too.value=='Decimal')){   
                out.value = parseInt((inp.value),8).toString(10);
            }
            else  if((frm.value=='Octal') && (too.value=='Binary')){   
                out.value = parseInt((inp.value),8).toString(2);
            }
            else  if((frm.value=='Octal') && (too.value=='Hexadecimal')){               
                out.value = parseInt((inp.value),8).toString(16);
            }

                // Conversion Hexadecimal to other number system
            else  if((frm.value=='Hexadecimal') && (too.value=='Decimal')){   
                out.value = parseInt((inp.value),16).toString(10);
            }
            else  if((frm.value=='Hexadecimal') && (too.value=='Binary')){   
                out.value = parseInt((inp.value),16).toString(2);
            }
            else  if((frm.value=='Hexadecimal') && (too.value=='Octal')){
                out.value = parseInt((inp.value),16).toString(8);

            }

     }
     var bottom = document.getElementsByTagName('footer');
     var h = Number(window.innerHeight) - 543;
        bottom[0].style.marginTop = h+"px";   
           