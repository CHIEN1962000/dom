function nhap() {
    var sotien = document.getElementById('input-1').value;
    var laisuathangnam = document.getElementById('input-2').value;
    var thoigiantra = document.getElementById('input-3').value;

    if(sotien != '' && laisuathangnam !='' && thoigiantra !=''){
        var so_thang = thoigiantra * 12;
        var lai_1_thang = ((laisuathangnam / 100) / 12);
        var sotienphaitrahangthang = sotien * lai_1_thang * so_thang;
        var sotienphaitra = (sotienphaitrahangthang * thoigiantra)  ;
        var tongsolaiphaitra = sotienphaitra - sotien;
    }else {
        alert("loi");   
    }
    
    document.getElementById('input-4').value = sotienphaitrahangthang.toFixed(2);
    document.getElementById('input-5').value = sotienphaitra.toFixed(2);
    document.getElementById('input-6').value = tongsolaiphaitra.toFixed(2);
}
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    nhap();
});

const foc = document.getElementById('input-1');
const mess = document.getElementById('mess-1')
foc.addEventListener('focus', (e)=>{
    foc.style.backgroundColor='yellow';
});
foc.addEventListener('blur', (e) => { 
    foc.style.backgroundColor = '';
    if(document.getElementById('input-1').value == ""){
        foc.style.borderColor = 'red';
        foc.style.backgroundColor = 'red';
        var msg = "Mời bạn nhập lại";
        mess.innerText = msg;
    }else {
        mess.innerText = "";
    }
});

const foc2 = document.getElementById('input-2');
const mess2 = document.getElementById('mess-2')
foc.addEventListener('focus', (e)=>{
    foc2.style.backgroundColor='yellow';
});
foc2.addEventListener('blur', (e) => { 
    foc2.style.backgroundColor = '';
    if(document.getElementById('input-2').value == ""){
        foc2.style.borderColor = 'red';
        foc2.style.backgroundColor = 'red';
        var msg2 = "Mời bạn nhập lại";
        mess2.innerText = msg2;
    }else {
        mess2.innerText = "";
    }
});

const foc3 = document.getElementById('input-3');
const mess3 = document.getElementById('mess-3')
foc.addEventListener('focus', (e)=>{
    foc3.style.backgroundColor='yellow';
});
foc3.addEventListener('blur', (e) => { 
    foc3.style.backgroundColor = '';
    if(document.getElementById('input-3').value == ""){
        foc3.style.borderColor = 'red';
        foc3.style.backgroundColor = 'red';
        var msg3 = "Mời bạn nhập lại";
        mess3.innerText = msg3;
    }else {
        mess3.innerText = "";
    }
});
