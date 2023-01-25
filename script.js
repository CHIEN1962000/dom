function kiemtra() {
    var chieucao = document.getElementById('chieucao').value;
    var cannang = document.getElementById('cannang').value;
    var BMI = 0;
    if (chieucao != '' && cannang != '') {
        BMI = cannang/(chieucao*chieucao);
    }else {
        alert("loi");
        // if(chieucao != '') {
        //     const mess = document.getElementById('mess');
        //     mess.textContent = 'Mời bạn nhập chiều cao';
        //     mess.replaceChild(mess);
        // }
    }
    document.getElementById('dapso').value = BMI.toFixed(2);
    return BMI;
}

const btn = document.querySelector('#nut');
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    kiemtra();
    gioitinh();
    document.getElementById('chieucao').value = "";
    document.getElementById('cannang').value = "";
});


function gioitinh() {
    var gt =  document.getElementsByName('gt');
    var gts = '';
    var nam = 'nam';
    var nu = 'nu';
    var gay = "Gầy";
    var bt = "Bình Thường";
    var tc = "Thừa Cân Nhẹ";
    var tlt = "Trên Lý Tưởng";
    var bp = "Béo Phì";
    var BMIS = document.getElementById('dapso').value;

    console.log("thu " + BMIS)
    for(var i = 0; i < gt.length; i++) {
        if(gt[i].checked == true) {
            gts = gt[i].value;
        }
    }
    console.log(gts);
    if(gts == nam) {
        if(BMIS < 20.7) {
            console.log("Gầy");
            document.getElementById('dapso').value = BMIS +" | "+gay;
        }if(20.7 < BMIS < 26.4) {
            document.getElementById('dapso').value = BMIS +" | "+bt;
        }
        if(26.4 < BMIS < 27.8) {
            document.getElementById('dapso').value = BMIS +" | "+tc;
        }
        if(27.8 < BMIS < 31.1) {
            document.getElementById('dapso').value = BMIS +" | "+tlt;
        }
        if(BMIS > 31.1) {
            console.log("Béo Phì");
            document.getElementById('dapso').value = BMIS +" | "+bp;
        }
    }

    if(gts == nu) {
        if(BMIS < 19.1) {
            document.getElementById('dapso').value = BMIS +" | "+gay;
        }
        if(19.1 < BMIS < 25.8) {
            document.getElementById('dapso').value = BMIS +" | "+bt;
        }
        if(25.8 < BMIS <27.3) {
            document.getElementById('dapso').value = BMIS +" | "+tc;
        }
        if(27.3 < BMIS < 32.3) {
            document.getElementById('dapso').value = BMIS +" | "+tlt;
        }
        if(BMIS > 32.3) {
            document.getElementById('dapso').value = BMIS +" | "+bp;
        }
    }
}

