const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('siswa/',(request,response)=>{
    response.end("menampilkan siswa");
})

app.get('/siswa/:nama', (request,response)=>{
    // Proses dengan siswa bernama x
    let namaSiswa = request.params.nama;
    response.end("Menampilkan siswa dengan nama : " + namaSiswa);
})

app.post('/siswa', (request,response=>{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa baru! nama : " + namaSiswa + ", alamat : "+ alamatSiswa);
}))