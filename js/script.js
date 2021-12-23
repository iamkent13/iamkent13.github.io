// script supaya menu sidebar bisa berjalan ketika layar kita kecilkan (responsif web)
// boleh copy paste langsung dari templatenya (initialization), ataupun ketik ulang sendiri
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
// });

// js agar sidebar menunya muncul ketika layar diperkecil
const sideNav = document.querySelectorAll('.sidenav');
// trus inisialisasi js sidenav-nya
M.Sidenav.init(sideNav);



// js untuk memunculkan dan menjalankan slide show
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators: false,
    height: 500,
    duration: 700,
    interval: 2500
});


// js untuk inisialisasi paralax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


// js untuk buat image light-box
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.materialboxed');
//     var instances = M.Materialbox.init(elems);
// });

// atau bisa buat sendir lebih simpel tanpa event
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);


// js untuk inisialisasi scrollspy
// kita taruh 45, supaya ga pakai default-nya karena yang default itu teleport-nya kejauhan (setengah layar, kurang pas)
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 45
});