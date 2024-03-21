const btn = document.querySelector("#complete");
const btnsv = document.querySelector("#save");
function generate(e) {
    e.preventDefault();
    const url = document.querySelector('#url').value;
    const size = document.querySelector("#size").value;
    const darkcolor = document.querySelector("#darkcolor").value;
    const lightcolor = document.querySelector("#lightcolor").value;
    const qrCode = document.querySelector("#qrcode");

    if (url.trim() === '') {
        alert('Please enter a valid URL');
        return;
    }

    qrCode.innerHTML = '';
    const qrcode = new QRCode(qrCode, {
        text: url,
        width: size,
        height: size,
        colorDark: darkcolor,
        colorLight: lightcolor,
        correctLevel: QRCode.CorrectLevel.H,
    });
}

btn.addEventListener('click', generate);
btnsv.addEventListener('click',()=>
{
    btnsv.href=url;
    btnsv.download=qrcode;
})
