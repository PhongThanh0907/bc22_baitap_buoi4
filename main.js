/**
 * Bài tập 1:
 */

document.getElementById("btnketQua").onclick = function () {
    //Đầu vào
    var soA = document.getElementById("txtsoA").value*1;
    var soB = document.getElementById("txtsoB").value*1;
    var soC = document.getElementById("txtsoC").value*1;
    //Xử Lí
    if(soA > soB && soB > soC){
        var ketQua = soA + ">" + soB + ">" + soC; 
    }else if(soA > soB && soA > soC && soC > soB){
        var ketQua = soA + ">" + soC + ">" + soB;
    }else if(soB > soA && soA > soC){
        var ketQua = soB + ">" + soA + ">" + soC;
    }else if(soB > soA && soB > soC && soC > soA){
        var ketQua = soB + ">" + soC + ">" + soA;
    }else if(soC > soA && soA > soB){
        var ketQua = soC + ">" + soA + ">" + soB;
    }else{
        var ketQua = soC + ">" + soB + ">" + soA;
    }
    //Đầu ra
    document.getElementById("footerketQuaThuTu").innerHTML = ketQua;
}

/**
 * Bài tập 2:
 */
document.getElementById("btnloiChao").onclick = function (){
    //Đầu vào
    var nguoiSuDung = document.getElementById("txtnguoiA").value;
    //Xử lí
    if(nguoiSuDung === "Bố"){
        document.getElementById("footerloiChao").innerHTML = "Xin chào Bố đang sử dụng máy tính";
    }else if(nguoiSuDung === "Mẹ"){
        document.getElementById("footerloiChao").innerHTML = "Xin chào Mẹ đang sử dụng máy tính";
    }else if(nguoiSuDung === "Anh Trai"){
        document.getElementById("footerloiChao").innerHTML = "Xin chào Anh Trai đang sử dụng máy tính";
    }else{
        document.getElementById("footerloiChao").innerHTML = "Xin chào Em gái đang sử dụng máy tính";
    }
}

/**
 * Bài tập 3: 
 */
document.getElementById("btnketQuaSoChanLe").onclick = function (){
    //Đầu vào
    var songuyenA = parseInt(document.getElementById("songuyenA").value);
    var songuyenB = parseInt(document.getElementById("songuyenB").value);
    var songuyenC = parseInt(document.getElementById("songuyenC").value);
    var soChan = 0;
    //Xử lí
    if(songuyenA % 2 == 0){
        soChan += 1;
    }
    if(songuyenB % 2 == 0){
        soChan += 1;
    }
    if(songuyenC % 2 == 0){
        soChan += 1;
    }
    var soLe = 3 - soChan;
    //Đầu ra
    document.getElementById("footerketQuaChanLe").innerHTML = "Số chẵn là: " + soChan + ", Số lẽ là: " + soLe;
}

/**
 * Bài tập 4
 */
document.getElementById("btnketQuaTamGiac").onclick = function (){
    //Đầu vào
    var a = document.getElementById("canhA").value;
    var b = document.getElementById("canhB").value;
    var c = document.getElementById("canhC").value;
    //Xử Lí
    if(a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b){
        document.getElementById("footertamGiac").innerHTML = "Đây là tam giác vuông";
    }else if(a == b && b == c){
        document.getElementById("footertamGiac").innerHTML = "Đây là tam giác đều";
    }else if(a == b || a == c || b == c){
        document.getElementById("footertamGiac").innerHTML = "Đây là tam giác cân";
    }else{
        document.getElementById("footertamGiac").innerHTML = "Đây là tam giác thường";
    }
}

