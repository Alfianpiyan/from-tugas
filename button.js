            var semuaProduk = [];
            var modeEdit = false;
            var indexProdukEdit = null;
            var kodeIncrement = 1;

            function menyimpanProduk() {
                var kodeProduk = document.getElementById('kode-produk').value;
                var namaProduk = document.getElementById('nama-produk').value;
                var hargaProduk = document.getElementById('harga-produk').value;
                var satuanProduk = document.getElementById('satuan-produk').value;
                var kategoriProduk = document.getElementById('kategori-produk').value;
                var urlProduk = document.getElementById('url-produk').value;
                var stokProduk = document.getElementById('stok-produk').value;
            
                if (modeEdit) {
                    // Edit produk
                    semuaProduk[indexProdukEdit] = {
                        kodeProduk,
                        namaProduk,
                        hargaProduk,
                        satuanProduk,
                        kategoriProduk,
                        urlProduk,
                        stokProduk
                    };
            
                    modeEdit = false;
                    indexProdukEdit = null;
                } else {
                    // Tambah produk baru
                    semuaProduk.push({
                        kodeProduk,
                        namaProduk,
                        hargaProduk,
                        satuanProduk,
                        kategoriProduk,
                        urlProduk,
                        stokProduk
                    });
                }
            
                // Atur ulang input form dan update kode produk
                document.getElementById('kode-produk').value = 'MD-' + String(kodeIncrement).padStart(3, '0');
                document.getElementById('nama-produk').value = '';
                document.getElementById('harga-produk').value = '';
                document.getElementById('satuan-produk').value = '';
                document.getElementById('kategori-produk').value = '';
                document.getElementById('url-produk').value = '';
                document.getElementById('stok-produk').value = '';
            
                kodeIncrement++;
                menampilkanTable();
            }
            document.getElementById('kode-produk').value = 'MD-' + String(kodeIncrement).padStart(3,'0');

            function menghapusProduk (index) {
                semuaProduk.splice(index,1);
                console.log(semuaProduk);
                menampilkanTable();
            }
            function editProduk(index) {
                // Ambil produk berdasarkan index
                var produkUntukDiEdit = semuaProduk[index];
            
                // Isi form dengan data produk yang akan diedit
                document.getElementById('kode-produk').value = produkUntukDiEdit.kodeProduk;
                document.getElementById('nama-produk').value = produkUntukDiEdit.namaProduk;
                document.getElementById('harga-produk').value = produkUntukDiEdit.hargaProduk;
                document.getElementById('satuan-produk').value = produkUntukDiEdit.satuanProduk;
                document.getElementById('kategori-produk').value = produkUntukDiEdit.kategoriProduk;
                document.getElementById('url-produk').value = produkUntukDiEdit.urlProduk;
                document.getElementById('stok-produk').value = produkUntukDiEdit.stokProduk;
            
                // Atur mode edit dan simpan index
                modeEdit = true;
                indexProdukEdit = index;
            }

            function menampilkanTable() { 
                var tbody = document.getElementById("t-body");
            
                tbody.innerHTML = ``;
            
                semuaProduk.forEach(function(produk, index) {
                    var tr = tbody.insertRow();
            
                    tr.innerHTML = `
                        <td>${index + 1}</td>
                        <td>${produk.kodeProduk}</td>
                        <td>${produk.namaProduk}</td>
                        <td>${produk.hargaProduk}</td>
                        <td>${produk.satuanProduk}</td>
                        <td>${produk.kategoriProduk}</td>
                        <td>
                            <img src="${produk.urlProduk}" alt="${produk.namaProduk}" width="100px" height="100px" padding="5px">
                        </td>
                        <td>${produk.stokProduk}</td>
                        <td>
                            <button onclick="editProduk(${index})">Edit</button> | 
                            <button onclick="menghapusProduk(${index})">Delete</button>
                        </td>
                    `;
                });
            
                console.log(tbody);
            }

               