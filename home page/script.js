//Getting components for dom operations
const radios = document.forms["check-recuring"].elements["timing"];
const checkArearec = document.getElementById('reocurring-dis')
const weekday = document.querySelector('#weekly-dis');
const monthday = document.querySelector('#monthly-dis');
const yearday = document.querySelector('#year-dis')
const reciptarea = document.querySelector('#recips')
const addbtn = document.getElementById('btnaddnew');
const submitbtn = document.getElementById('submit');

var recipients;


//form submition dom

const toIP = document.getElementById('to');
const ccIP = document.getElementById('cc');
const subject = document.getElementById('subject')


for(radio in radios) {
    radios[radio].onclick = function() {
        var val =this.value;
        if(val==='recurring'){
            checkArearec.style.display="block";
            weekday.style.display='none';
            monthday.style.display='none';
            yearday.style.display='none';
        }else if(val=='weekly'){
            checkArearec.style.display="none";
            weekday.style.display='block';
            monthday.style.display='none'
            yearday.style.display='none';
        }else if(val=='monthly'){
            checkArearec.style.display="none";
            weekday.style.display='none';
            monthday.style.display='block'
            yearday.style.display='none';
        }else if(val=='yearly'){
            checkArearec.style.display="none";
            weekday.style.display='none';
            monthday.style.display='none'
            yearday.style.display='block';
        }else{
            checkArearec.style.display="none";
            weekday.style.display='none';
            monthday.style.display='none'
            yearday.style.display='none';
        }
    }
}

addbtn.addEventListener('click',()=>{
    var email = document.getElementById('addtext').value;

    if(email!='' && String(email).match("[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?")){
        var div = document.createElement('span');
       div.className='rec';
        var check = document.createElement('input');
        check.setAttribute('type','checkbox')
        check.setAttribute('value',email);
        check.setAttribute('id',email);
        check.setAttribute('name','recip-email');
        check.id=email;
        
        var label = document.createElement('label');
        
        label.for = email;
        label.innerHTML =email;
        
        div.append(check,label)
       

        reciptarea.appendChild(div);
    }
})


submitbtn.addEventListener('click',()=>{
   recipients=document.getElementsByName('recip-email');
    var checkedboxes=[];
    for (var i=0; i<recipients.length; i++) {
        
        if (recipients[i].checked) {
           checkedboxes.push(recipients[i].value);
        }
     }
     console.log(checkedboxes[0]);
})