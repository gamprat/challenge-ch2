function getAngkaTerbesarKedua(dataNumbers) {
    if (dataNumbers == dataAngka) {
        const duplikasiArray = [...new Set(dataNumbers)];

        const sortirArray = duplikasiArray.sort((a, b) => b - a);

        const angkaTerbesarKedua = sortirArray[1];

        return angkaTerbesarKedua;
    } else if (typeof dataNumbers === 'undefined') {
        return "ERROR: Parameter harus diisi"
    } else {
        return "ERROR: Angka 0 tidak ada dalam array dataAngka"
    }
}

const dataAngka = [2, 3, 5, 6, 6, 4];

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())