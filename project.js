//ana js dosyası
const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");
//uı objesini başlatma
const ui=new UI();
//storage objesi üret
const storage=new Storage();
//tüm eventleri yükleme
eventListener();
function eventListener(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();
        ui.LoadAllFilms(films);//array şeklinde aldık filmleri
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        let filmTitle=e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.deleteFilmFromStorage(filmTitle);
        ui.displayMessage("silme işlemi başarılı","success");
    }
}
function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    if(title===""|| director===""||url===""){
        ui.displayMessage("tüm alanları doldurun","danger");
    }
    else{
        //yeni film
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm);//arayüze film ekleme
        storage.addFilmToStorage(newFilm);//storage a film ekleme
        ui.displayMessage("film basarı ile eklendi","suscess");
    }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
function clearAllFilms(){
    if(confirm("tüm filmleri silmek istediğinize emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }


}