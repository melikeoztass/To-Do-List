function yenielementekle(buton) {
    // 1. Tıklanan butonun içindeki bulunduğu günü (container) bul
    var gunkutusu = buton.parentElement.parentElement;

    // 2. Sadece o günün içindeki inputu ve listeyi AYRI AYRI seç
    var inputAlani = gunkutusu.querySelector(".todoInput");
    var hedefListe = gunkutusu.querySelector(".todoList"); // Burayı düzelttik
    var metin = inputAlani.value;

    if (metin === '') {
        alert("Lütfen görev girin...");
        return;
    }

    // 3. Yeni liste elemanını oluştur
    var li = document.createElement("li");
    li.innerText = metin;

    // Tıklanınca üzerini çizme özelliği
    li.onclick = function() {
        this.classList.toggle("checked");
    };

    // 4. Silme (X) butonu ekleme
    var span = document.createElement("span");
    var carpi = document.createTextNode("\u00D7"); // createTextNode olmalı
    span.className = "close";
    span.appendChild(carpi);

    span.onclick = function(event) {
        event.stopPropagation(); // Üzerini çizme işlemini tetiklemesin
        this.parentElement.remove();
    };

    li.appendChild(span);
    
    // 5. Elemanı listeye ekle ve kutuyu temizle
    hedefListe.appendChild(li); 
    inputAlani.value = ""; 
}