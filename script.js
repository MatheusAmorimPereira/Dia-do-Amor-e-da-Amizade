/* =========================
   SLIDES DAS FOTOS
========================= */

const slides = document.querySelectorAll(".slide");

const pauseBtn = document.getElementById("pauseBtn");
const nextSlideBtn = document.getElementById("nextSlide");
const prevSlideBtn = document.getElementById("prevSlide");

const progress = document.getElementById("progress");

let currentSlide = 0;
let playing = true;

/* MOSTRAR FOTO */

function showSlide(index){

    slides.forEach((slide, i) => {

        slide.classList.remove("active");

        slide.style.transform = "translateX(100%)";

        if(i < index){
            slide.style.transform = "translateX(-100%)";
        }

    });

    slides[index].classList.add("active");

    slides[index].style.transform = "translateX(0)";

    resetProgress();

}

/* BARRA */

function resetProgress(){

    if(!progress) return;

    progress.classList.remove("paused");

    progress.style.animation = "none";

    void progress.offsetWidth;

    progress.style.animation =
    "progress 4s linear infinite";

    if(!playing){
        progress.classList.add("paused");
    }

}

/* PRÓXIMO SLIDE */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/* SLIDE ANTERIOR */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

/* AUTO PLAY */

let interval = setInterval(nextSlide,4000);

/* PAUSAR */

if(pauseBtn){

    pauseBtn.addEventListener("click", () => {

        if(playing){

            clearInterval(interval);

            playing = false;

            pauseBtn.innerHTML = "▶";

            progress.classList.add("paused");

        }else{

            interval = setInterval(nextSlide,4000);

            playing = true;

            pauseBtn.innerHTML = "⏸";

            progress.classList.remove("paused");

        }

    });

}

/* BOTÕES DOS SLIDES */

if(nextSlideBtn){

    nextSlideBtn.addEventListener("click", () => {

        nextSlide();

    });

}

if(prevSlideBtn){

    prevSlideBtn.addEventListener("click", () => {

        prevSlide();

    });

}

/* INICIAR SLIDES */

showSlide(currentSlide);


/* =========================
   PÁGINAS DA APRESENTAÇÃO
========================= */

const pages = document.querySelectorAll(".page");

const nextPageBtn = document.getElementById("nextPage");
const prevPageBtn = document.getElementById("prevPage");

let currentPage = 0;

/* MOSTRAR PÁGINA */

function showPage(index){

    pages.forEach((page, i) => {

        page.classList.remove("active");

        page.style.transform = "translateX(100%)";

        if(i < index){
            page.style.transform = "translateX(-100%)";
        }

    });

    pages[index].classList.add("active");

    pages[index].style.transform = "translateX(0)";

}

/* PRÓXIMA PÁGINA */

function nextPage(){

    if(currentPage < pages.length - 1){

        currentPage++;

        showPage(currentPage);

    }

}

/* PÁGINA ANTERIOR */

function prevPage(){

    if(currentPage > 0){

        currentPage--;

        showPage(currentPage);

    }

}

/* BOTÕES */

if(nextPageBtn){

    nextPageBtn.addEventListener("click", () => {

        nextPage();

    });

}

if(prevPageBtn){

    prevPageBtn.addEventListener("click", () => {

        prevPage();
const slides = document.querySelectorAll(".slide");

const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const progress = document.getElementById("progress");

let current = 0;
let playing = true;

/* MOSTRAR */

function showSlide(index){

    slides.forEach((slide, i) => {

        slide.classList.remove("active");

        slide.style.transform = "translateX(100%)";

        if(i < index){
            slide.style.transform = "translateX(-100%)";
        }

    });

    slides[index].classList.add("active");

    slides[index].style.transform = "translateX(0)";

    resetProgress();

}

/* BARRA */

function resetProgress(){

    progress.classList.remove("paused");

    progress.style.animation = "none";

    void progress.offsetWidth;

    progress.style.animation =
    "progress 4s linear infinite";

    if(!playing){
        progress.classList.add("paused");
    }

}

/* PRÓXIMO */

function nextSlide(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

}

/* ANTERIOR */

function prevSlide(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

}

/* AUTO PLAY */

let interval = setInterval(nextSlide,4000);

/* BOTÃO PAUSE */

pauseBtn.addEventListener("click", () => {

    if(playing){

        clearInterval(interval);

        playing = false;

        pauseBtn.innerHTML = "▶";

        progress.classList.add("paused");

    }else{

        interval = setInterval(nextSlide,4000);

        playing = true;

        pauseBtn.innerHTML = "⏸";

        progress.classList.remove("paused");

    }

});

/* BOTÕES */

nextBtn.addEventListener("click", () => {

    nextSlide();

});

prevBtn.addEventListener("click", () => {

    prevSlide();

});

/* TECLADO */

document.addEventListener("keydown", (e) => {

    if(e.key === "ArrowRight"){
        nextSlide();
    }

    if(e.key === "ArrowLeft"){
        prevSlide();
    }

});

/* START */

showSlide(current);

/* PÁGINAS */

const pages = document.querySelectorAll(".page");

const nextPageBtn = document.getElementById("nextPage");
const prevPageBtn = document.getElementById("prevPage");

let currentPage = 0;

/* MOSTRAR PÁGINA */

function showPage(index){

    pages.forEach((page, i) => {

        page.classList.remove("active");

        page.style.transform = "translateX(100%)";

        if(i < index){
            page.style.transform = "translateX(-100%)";
        }

    });

    pages[index].classList.add("active");

    pages[index].style.transform = "translateX(0)";

}

/* PRÓXIMA */

function nextPage(){

    currentPage++;

    if(currentPage >= pages.length){
        currentPage = pages.length - 1;
    }

    showPage(currentPage);

}

/* ANTERIOR */

function prevPage(){

    currentPage--;

    if(currentPage < 0){
        currentPage = 0;
    }

    showPage(currentPage);

}

/* BOTÕES */

nextPageBtn.addEventListener("click", () => {
    nextPage();
});

prevPageBtn.addEventListener("click", () => {
    prevPage();
});

/* TECLADO */

document.addEventListener("keydown", (e) => {

    if(e.key === "PageDown"){
        nextPage();
    }

    if(e.key === "PageUp"){
        prevPage();
    }

});

/* START */

showPage(currentPage);
    });

}

/* TECLADO */

document.addEventListener("keydown", (e) => {

    if(e.key === "ArrowRight"){

        nextPage();

    }

    if(e.key === "ArrowLeft"){

        prevPage();

    }

});

/* INICIAR */

showPage(currentPage);