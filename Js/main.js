function calMark(){
    let firstMark = Number(document.getElementById("1stMark").value);
    let secondMark = Number(document.getElementById("2ndMark").value);
    let thirdMark = Number(document.getElementById("3rdMark").value);
    let areaChosen =  Number(document.getElementById("areaChosen").value);
    let userType =  Number(document.getElementById("userChosen").value);
    let standardMark = Number(document.getElementById("standardMark").value);
    let totalMark = firstMark + secondMark + thirdMark + areaChosen + userType;
    if (firstMark > 0 && secondMark > 0 && thirdMark > 0){
        if(totalMark >= standardMark){
            document.getElementById("resultB1").innerHTML = "Bạn đã đậu. Tổng điểm: " + totalMark;
        }else{ 
            document.getElementById("resultB1").innerHTML = "Bạn đã rớt. Tổng điểm: " + totalMark;
        }
    }else{ 
        document.getElementById("resultB1").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
}

function calElectricity(){
    let fullName = document.getElementById("fullName").value;
    let kwAmount = Number(document.getElementById("kwAmount").value);
    let VND; 
    if (!kwAmount){
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
    }else{ 
        if (kwAmount <= 50){
            VND = kwAmount * 500; 
        } else if (kwAmount > 50 && kwAmount <= 100){
            VND = 25000 + ((kwAmount - 50) * 650); 
        } else if (kwAmount > 100 && kwAmount <= 200){ 
            VND = 57500 + ((kwAmount - 100) * 850);
        }else if (kwAmount > 200 && kwAmount <= 350){
            VND = 142500 + ((kwAmount - 200) * 1100);
        }else{ 
            VND = 307500 + ((kwAmount - 350) * 1300);
        }
        document.getElementById("resultB2").innerHTML = "Họ tên: " + fullName+  "</br>Tiền điện: " + new Intl.NumberFormat('vn-VN').format(VND) + " VND";
    }
}

function calTax(){
    let fullNameB3 = document.getElementById("fullNameB3").value;
    let annualSalary = Number(document.getElementById("annualSalary").value);
    let dependenceNo = Number(document.getElementById("dependenceNo").value);
    let taxAllowance = (annualSalary/1000000) - 4 - dependenceNo * 1.6;
    let finalTax;
    if (taxAllowance > 0){
        // Calculate based on grab 
        // if (taxAllowance <= 60){
        //     finalTax = taxAllowance * 0.05; 
        // } else if (taxAllowance > 60 && taxAllowance <= 120){
        //     finalTax = 60*0.05 + ((taxAllowance - 60) * 0.1); 
        // } else if (taxAllowance > 120 && taxAllowance <= 210){ 
        //     finalTax = 60*0.05 + 60*0.1 + ((taxAllowance - 120) * 0.15);
        // }else if (taxAllowance > 210 && taxAllowance <= 384){
        //     finalTax = 60*0.05 + 60*0.1 + 90*0.15 + ((taxAllowance - 210) * 0.2);
        // }else if (taxAllowance > 384 && taxAllowance <= 624){ 
        //     finalTax = 60*0.05 + 60*0.1 + 90*0.15 + 174 * 0.2 + ((taxAllowance - 384) * 0.25);
        // }else if (taxAllowance > 624 && taxAllowance <= 960){ 
        //     finalTax = 60*0.05 + 60*0.1 + 90*0.15 + 174 * 0.2 + 240 * 0.25 + ((taxAllowance - 624) * 0.3);
        // }else{ 
        //     finalTax = 60*0.05 + 60*0.1 + 90*0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + ((taxAllowance - 960) * 0.35);
        // }


        //Calculate based on demo
        if (taxAllowance <= 60){
            finalTax = taxAllowance * 0.05; 
        } else if (taxAllowance > 60 && taxAllowance <= 120){
            finalTax = taxAllowance * 0.1; 
        } else if (taxAllowance > 120 && taxAllowance <= 210){ 
            finalTax = taxAllowance * 0.15;
        }else if (taxAllowance > 210 && taxAllowance <= 384){
            finalTax = taxAllowance * 0.2;
        }else if (taxAllowance > 384 && taxAllowance <= 624){ 
            finalTax = taxAllowance * 0.25;
        }else if (taxAllowance > 624 && taxAllowance <= 960){ 
            finalTax = taxAllowance * 0.3;
        }else{ 
            finalTax = taxAllowance * 0.35;
        }
        document.getElementById("resultB3").innerHTML = "Họ tên: " + fullNameB3 +  "</br>Thuế thu nhập cá nhân: " + new Intl.NumberFormat('vn-VN').format(finalTax*1000000) + " VND";
    }else{
        alert("Thu nhập không hợp lệ");
        document.getElementById("resultB3").innerHTML = "Họ tên: " + fullNameB3 +  "</br>Thuế thu nhập cá nhân: 0 VND";
    }

}

function checkType(){
    let userType =  Number(document.getElementById("userType").value);
    if(userType === 2){
        document.getElementById("divForConnection").style.display = "block";
    }else{
        document.getElementById("divForConnection").style.display = "none";
    }
}

function calExpense(){
    let userType =  Number(document.getElementById("userType").value);
    let idUser = document.getElementById("idUser").value;
    let channelNo = Number(document.getElementById("channelNo").value);
    let connectionNo = Number(document.getElementById("connectionNo").value);
    let totalChannelFee;
    if (!userType){ 
        alert("Hãy chọn loại khách hàng");
        document.getElementById("resultB4").innerHTML = "Mã khách hàng: " + idUser +  "</br>Tiền cáp: $0.00";
    } else if (userType === 1){
        totalChannelFee = 25 + channelNo * 7.5;
        document.getElementById("resultB4").innerHTML = "Mã khách hàng: " + idUser +  "</br>Tiền cáp: $" +  new Intl.NumberFormat('vn-VN').format(totalChannelFee);
    } else if (userType === 2){
        if (connectionNo <= 10){
            totalChannelFee = 90 + channelNo * 50;
        }else { 
            totalChannelFee = 90 + channelNo * 50 + (connectionNo-10)*5;
        }
        document.getElementById("resultB4").innerHTML = "Mã khách hàng: " + idUser +  "</br>Tiền cáp: $" +  new Intl.NumberFormat('vn-VN').format(totalChannelFee);
    }
}
