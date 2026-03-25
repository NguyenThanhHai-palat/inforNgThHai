
const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
let cost = urlParams.get("cost");
let name = urlParams.get("name");
let app = urlParams.get("app");
let company= ""
if(app == "PalatStore"){
    company = "https://dev.palat.io.vn/store"
}else if(app == "PalatStoreApp"){
    company = "https://dev.palat.io.vn/store/checkout-app"
}
else{

}
const d = new Date();
if (!id || !cost) {
    id = d.getHours()+"C"+d.getMinutes()+"C"+d.getSeconds()+d.getDate()+d.getMonth()+d.getFullYear()+"k DONATE 10K";
    cost=10000
    name = "Donate 10k CẢM ƠN VÌ 10K =D"
    app ="PALATPAYMENT-GATEWAY"
}
const qrUrl = `https://img.vietqr.io/image/MB-0904548361-qr_only.png?amount=${cost}&addInfo=${id}&accountName=DICH%20VU%20THANH%20TOAN%20PALATPAYMENT`;

const qrImg = document.getElementById("qrCA");
if (qrImg) {
    qrImg.style.width = "100%";
    qrImg.src = qrUrl;
    

}
const group3 = document.getElementById("GROUP3");
if (group3) {
    
}
const headline16 = document.querySelector("#HEADLINE16 .ladi-headline");
if (headline16 && app) {
    headline16.innerHTML = `Đơn vị : ${app}`;
}
const headline10 = document.querySelector("#HEADLINE10 .ladi-headline");
if (headline10) {
    headline10.innerHTML = `
        Mã HÓA ĐƠN: ${id}<br>
        Tên đơn hàng: ${name || "Không có"}<br>
    `;
}
const headline9 = document.querySelector("#HEADLINE9 .ladi-headline");
if (headline9) {
    if(company!=""){
        headline9.innerHTML = `
        Thực hiện chuyển tiếp đơn hàng tại : <br>${company}
        <br>Có mã đơn hàng: ${id}<br>
    `;
    }
    else
    headline9.innerHTML = `<p style="color:white">Sau khi quét chờ 5s để xác thực</p>
    `;
    
}
async function checkPayment() {
    try {
        let res = await fetch(`https://dnc-svc.palat.io.vn/checkpayment?code=${id}&amount=${cost}`);
        let data = await res.json();

        if (data.success === true) {

            if (group3) group3.style.display = "none";
            document.querySelector("#HEADLINE13 .ladi-headline").innerHTML = "thành công";

            // Update thông tin hóa đơn
            const headline14 = document.querySelector("#HEADLINE14 .ladi-headline");
            if (headline14) {
                headline14.innerHTML = `
                    Tên đơn hàng: ${name}<br>
                    Thời gian giao dịch: ${data.data.time}<br>
                    Số tiền: ${data.data.amount} VNĐ<br>
                    Mã hóa đơn: ${data.data.code}<br>
                    Hình thức thanh toán: Quét QR<br>
                `;
            }

            clearInterval(loop);

            console.log("Thanh toán OK:", data.data);
        }

    } catch (err) {
        console.log("Lỗi check:", err);
    }
}
const loop = setInterval(checkPayment, 3000);
checkPayment();