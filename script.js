// Kitap objeleri tanımlanıyor, her biri isim, yazar, fiyat ve raf bilgisine sahip
let kitap1 = { isim: "Her şeyi Düşünme", yazar: "Anna Bogel", fiyat: 25, raf: "1.5.RAF" }
let kitap2 = { isim: "Hiçbir Karşılama Tesadüf Değildir", yazar: "Hakan Mengüc", fiyat: 25, raf: "2.5.RAF" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 45, raf: "4.2.RAF" }
let kitap4 = { isim: "Şeker Portakalı", yazar: "Jose Mario", fiyat: 55, raf: "3.3.RAF" }
let kitap5 = { isim: "Bıçak Sırtında", yazar: "Tess Geritsen", fiyat: 67, raf: "5.5.RAF" }

// Kitaplar bir nesne içinde toplanıyor
let kitaplar = { kitap1, kitap2, kitap3, kitap4, kitap5 };

// Raf objeleri tanımlanıyor, her biri kod ve goster (boolean) bilgisine sahip
let raf11 = { kod: "1.1.RAF", goster: false };
let raf12 = { kod: "1.2.RAF", goster: false };
let raf13 = { kod: "1.3.RAF", goster: false };
let raf14 = { kod: "1.4.RAF", goster: false };
let raf15 = { kod: "1.5.RAF", goster: false };

let raf21 = { kod: "2.1.RAF", goster: false };
let raf22 = { kod: "2.2.RAF", goster: false };
let raf23 = { kod: "2.3.RAF", goster: false };
let raf24 = { kod: "2.4.RAF", goster: false };
let raf25 = { kod: "2.5.RAF", goster: false };

let raf31 = { kod: "3.1.RAF", goster: false };
let raf32 = { kod: "3.2.RAF", goster: false };
let raf33 = { kod: "3.3.RAF", goster: false };
let raf34 = { kod: "3.4.RAF", goster: false };
let raf35 = { kod: "3.5.RAF", goster: false };

let raf41 = { kod: "4.1.RAF", goster: false };
let raf42 = { kod: "4.2.RAF", goster: false };
let raf43 = { kod: "4.3.RAF", goster: false };
let raf44 = { kod: "4.4.RAF", goster: false };
let raf45 = { kod: "4.5.RAF", goster: false };

let raf51 = { kod: "5.1.RAF", goster: false };
let raf52 = { kod: "5.2.RAF", goster: false };
let raf53 = { kod: "5.3.RAF", goster: false };
let raf54 = { kod: "5.4.RAF", goster: false };
let raf55 = { kod: "5.5.RAF", goster: false };

// Raflar bir 2D dizi içinde toplanıyor
let raflar = [
  [raf51, raf52, raf53, raf54, raf55],
  [raf41, raf42, raf43, raf44, raf45],
  [raf31, raf32, raf33, raf34, raf35],
  [raf21, raf22, raf23, raf24, raf25],
  [raf11, raf12, raf13, raf14, raf15]
];

// Rafları konsolda göstermek için bir fonksiyon
function rafOlustur() {
  console.clear(); // Konsolu temizler
  for (let i = 0; i < raflar.length; i++) {
    let satir = ""; // Her satır için 'satir' değişkenini sıfırla
    for (let j = 0; j < 5; j++) {
      satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "|"; // Rafın gösterilip gösterilmeyeceğine göre kod veya '---' ekle
    }
    console.log(satir); // Her satır sonunda yazdır
    console.log("---------------------");
  }
}

// Kitap ismine göre raf kodunu bulmak için bir fonksiyon
function kodBul(kitapIsmi) {
  let rafKod = null;
  Object.values(kitaplar).forEach(function (kitap) { // Kitapları döngüyle dolaş
    if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase())) { // Kitap ismi eşleşirse
      rafKod = kitap.raf; // Raf kodunu al
    }
  });
  return rafKod; // Raf kodunu döndür
}

// Verilen raf koduna göre rafı gösteren bir fonksiyon
function raftaGoster(rafKodu) {
  for (let i = 0; i < raflar.length; i++) { // Tüm rafları döngüyle dolaş
    for (let j = 0; j < raflar[i].length; j++) {
      if (raflar[i][j].kod == rafKodu) { // Raf kodu eşleşirse
        raflar[i][j].goster = true; // Rafı göster
        break; // Döngüyü kır
      }
    }
  }
}

// Başlangıçta rafları konsolda göster
rafOlustur();

// Kullanıcıdan bir kitap ismi al
let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
let rafKod = kodBul(kitapIsmi); // Kitap ismine göre raf kodunu bul

// Eğer raf kodu bulunmuşsa
if (rafKod != null) {
  raftaGoster(rafKod); // Rafı göster
  rafOlustur(); // Rafları tekrar konsolda göster
} else {
  alert("Bu kitap yoktur"); // Kitap bulunamazsa uyarı ver
}
