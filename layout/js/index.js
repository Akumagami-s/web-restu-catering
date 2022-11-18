const payment = document.getElementById('payment');
payment.addEventListener('click', function () {
    Swal.fire({
        title: 'Pesanan sedang diverifikasi',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#506537',
        cancelButtonColor: '#d33',
        confirmButtonText: '<p class="">Cek Status Pemesanan</p> <i class="fa-solid fa-arrow-right">'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "pesanan.html";
        }
    })
});