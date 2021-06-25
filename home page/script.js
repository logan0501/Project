// const time = document.getElementById('')
const radios = document.forms["check-recuring"].elements["timing"];
const checkArearec = document.getElementById('reocurring-dis')
const weekday = document.querySelector('#weekly-dis');
const monthday = document.querySelector('#monthly-dis');
const yearday = document.querySelector('#year-dis')
const reciptarea = document.querySelector('#recips')
const addbtn = document.getElementById('btnaddnew');

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

    if(email!=null){
        var div = document.createElement('div');
       div.className='rec';
        var check = document.createElement('input');
        check.setAttribute('type','check')
        check.setAttribute('value',email);
        check.id=email;
        
        var label = document.createAttribute('p');
        
        label.textContent = email
        div.appendChild(check)
        div.appendChild(label)

        reciptarea.appendChild(div);
    }
})