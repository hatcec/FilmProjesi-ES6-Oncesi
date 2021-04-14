//local storage a ekleme
function Storage(){

}
Storage.prototype.addFilmToStorage= function(newFilm){
    let films=this.getFilmsFromStorage();//arraya sahip olduk
   films.push(newFilm);//arraylara obje atıyoruz
   localStorage.setItem("films",JSON.stringify(films));//stringe çevirdi
}
Storage.prototype.getFilmsFromStorage=function(){
    let films;
    if( localStorage.getItem("films")===null){
        films=[];
    }else{
      films= JSON.parse (localStorage.getItem("films"));//sadece local string değer olarak alıyor ve orjinal arraya çevirmek gerekiyotr
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage=function(filmTitle){
    let films=this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(filmTitle===film){
            films.splice(index,1);           
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage=function(){
    localStorage.removeItem("films");
}