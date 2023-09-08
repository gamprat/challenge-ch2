const dataPenjualanNovel = [{
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

getInfoPenjualan = (dataPenjualan) => {
    let totalKeuntungan = 0;
    let totalModal = 0;
    let bukuTerlaris = { namaProduk: '', totalTerjual: 0 };
    let penulisTerlaris = { penulis: '', totalTerjual: 0 };

    if(typeof(dataPenjualan) == "object") {
        dataPenjualan.map((buku) => {
            let keuntungan = (buku.hargaJual - buku.hargaBeli) * buku.totalTerjual;
            totalKeuntungan += keuntungan;

            totalModal += buku.hargaBeli * buku.totalTerjual;

            if (buku.totalTerjual > bukuTerlaris.totalTerjual) {
                bukuTerlaris = {
                    namaProduk: buku.namaProduk,
                    totalTerjual: buku.totalTerjual,
                };
            }

            if (buku.totalTerjual > penulisTerlaris.totalTerjual) {
                penulisTerlaris = {
                    penulis: buku.penulis,
                    totalTerjual: buku.totalTerjual,
                };
            }
        });
    }

    let persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + '%';

    return {
        totalKeuntungan: rupiah(totalKeuntungan),
        totalModal: rupiah(totalModal),
        persentaseKeuntungan,
        produkBukuTerlaris: bukuTerlaris.namaProduk,
        penulisBukuTerlaris: penulisTerlaris.penulis,
    };
};

const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

console.log(getInfoPenjualan(dataPenjualanNovel))