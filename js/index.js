
let destino = document.querySelectorAll(".card-title");
let descripcion = document.querySelectorAll(".card-text");
let imagen = document.querySelectorAll(".card__imgSize");
let enlace = document.querySelectorAll(".card__btnCompra");
let precio = document.querySelectorAll(".card-price");
enlace.forEach((element,key) => {
    
    element.addEventListener("click", ()=>{
        localStorage.setItem("id",key);
        localStorage.setItem("destino",destino[key].textContent );
        localStorage.setItem("descripcion",descripcion[key].textContent );
        localStorage.setItem("imagen", imagen[key].src );
        localStorage.setItem("precio", precio[key].textContent );

    });
});



