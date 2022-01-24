/***********************************************************************************************
 * variables que  se suben a la memoria para poder despues armar el formulario de compra
 * Haciendo click en comprar en las promociones de la pagina pricipal o de argentina redirige al formulario
 * que carga la imagen titulo descripcion y precio de la promocion
 * **********************************************************************************************/
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

    });
});


/*---------Menu Acordeon en pagina index.html-------*/
//se anula el de bootstrap y se hace la logica con jquery

$(()=>{
    $('.acordeon__btn').on("click", (e)=>{
        let tag = e.target.id;
        $("#collapse"+tag).slideToggle("slow");
        $(e.target).children().toggleClass("fa-arrow-up");
    });
});



