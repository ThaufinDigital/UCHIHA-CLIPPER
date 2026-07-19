// Logika Efek Mengetik (Typewriter) pada Judul
const titleElement = document.getElementById("hero-title");
const textToType = "Klan Rahasia Penakluk Algoritma";
let textIndex = 0;

function typeWriterEffect() {
    if (textIndex < textToType.length) {
        let currentText = textToType.substring(0, textIndex + 1);
        
        // Mengubah warna teks "Penakluk Algoritma" menjadi merah Uchiha
        currentText = currentText.replace("Penakluk Algoritma", "<span>Penakluk Algoritma</span>");
        
        titleElement.innerHTML = currentText + '<span class="cursor">|</span>';
        
        textIndex++;
        setTimeout(typeWriterEffect, 90);
    }
}

window.onload = typeWriterEffect;

// Logika Pop-up dan Redirect ke Discord ketika tombol diklik
const btnMulai = document.getElementById("btn-eksekusi");

btnMulai.addEventListener("click", function() {
    // 1. Munculkan pesan sambutan
    alert("🔥 Misi diterima! Mengarahkan Anda ke gerbang markas Discord UCHIHA CLIPPER...");
    
    // 2. Buka link Discord di tab baru setelah alert di-klik OK
    window.open("https://discord.gg/pfEPmxZw9", "_blank");
});