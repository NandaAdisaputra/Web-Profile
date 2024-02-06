function lihatCV() {
    var modal = document.getElementById('cvModal');
    modal.style.display = 'block';

    var iframe = document.getElementById('iframeCV');
    iframe.src = 'https://drive.google.com/file/d/1s-nM4Qr_mB2JWV4S9b2EtaKM4SqqxMq7/preview';
}

function tutupModal() {
    var modal = document.getElementById('cvModal');
    modal.style.display = 'none';

    var iframe = document.getElementById('iframeCV');
    iframe.src = '';
}