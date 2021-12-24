
let destino = document.querySelectorAll(".card-title");
let descripcion = document.querySelectorAll(".card-text");
let imagen = document.querySelectorAll(".card__imgSize");
let enlace = document.querySelectorAll(".card__btnCompra");
let precio = document.querySelectorAll(".card-price");
let storage={
};
enlace.forEach((element,key) => {
    
    element.addEventListener("click", ()=>{
        storage.id= key;
        storage.destino=destino[key].textContent;
        storage.descripcion=descripcion[key].textContent;
        storage.imagen=imagen[key].src;
        storage.precio=precio[key].textContent;
        const pr = JSON.stringify(storage);
        localStorage.setItem("promo", pr);
        /*localStorage.setItem("id",key);
        localStorage.setItem("destino",destino[key].textContent );
        localStorage.setItem("descripcion",descripcion[key].textContent );
        localStorage.setItem("imagen", imagen[key].src );
        localStorage.setItem("precio", precio[key].textContent );*/

    });
});



