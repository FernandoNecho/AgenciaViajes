/*-------------Promociones pagina Argentina---------------------*/
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
/*------------------------------------------*/

/*------------------Codificacion Pag promoBrasil------------------------*/
/*al hacer click en paquete y en la tarjeta de brasil en el boton saber mas..
se muestran los paquetes que hay para brasil*/

//array de objeto simulando API
let destinos = [{
    id:"1",
    site:"Búzios + Río de Janeiro!!",
    foto: "../img/iberostar.jpg",
    alt:"Búzios"
},
{
    id:"2",
    site:"Cabo Frio!!",
    foto: "../img/arcipelagoSanBlas.jpg",
    alt:"Cabo Frio"
},
{
    id:"3",
    site:"Salvador de Bahia!!",
    foto: "../img/brasil.jpg",
    alt:"Salvador de Bahia"
}];


$(()=>{
for (const destino of destinos) {
$(".paquete").append(`
    <div class="cardT">
        <div class="container dias">
            <img src="${destino.foto}" alt="${destino.alt}">
            <div class="day">11 días /  10 noches</div>
        </div>
        <div class="container">
            <div id="descripcion">
                <h2>${destino.site}</h2>
                <p>12 feb. 2022 a 22 feb. 2022</p>
                <ol class="lista">
                    
                </ol>

            </div>
            <div id="animacion">
                <ul id="list">
                    <li>Hoteles</li>
                    <li>Traslados</li>
                    <li>Vuelos</li>
                    <li>Seguros</li>
                </ul>
                <span class="fa fa-arrow-down flecha" id="fa${destino.id}"></span>
            </div>
           
        </div>
        <div class="container">
            <p>Precio final por 2 personas</p> 
            <b>$ 221.434</b>
            <p>Precio por persona:  $ 110.717</p>
            <small>Cargos e impuestos incluídos</small> 
            <button>Ver Paquete</button>
        </div>
        <div class="container animate" id="animate${destino.id}">
            <div class="contSlider">
                <p><i class="fas fa-suitcase"></i> Rio Othon Palace &#9733 &#9733 &#9733 DESAYUNO</p>
                <p><i class="fas fa-suitcase"></i> Serena Buzios &#9733 &#9733 &#9733 &#9733 DESAYUNO</p>
            </div>

            <div class="contSlider">
                <p><img src="../icons/LA-ISO.svg" alt="" id="latam"> LATAM</p>
                <p>AEP (17:OOHS) ------- SDU (19:30HS)</p>

                <p><img src="../icons/LA-ISO.svg" alt="" id="latam"> LATAM</p>
                <p>SDU (17:OOHS) ------- AEP (19:30HS)</p>
            </div>

            <div class="contSlider">
                <h2 class="titleRent"><i class="fas fa-taxi"></i> Alquiler de 10 días de auto económico</h2>
                <p>Alquiler de Auto económico Chevrolet Prisma, Renault Logan, Nissan Versa o similar. 
                    Incluye Kilometraje libre, cobertura por daños y/o robo con franquicia, responsabilidad civil, 
                    y cargo de aeropuerto.</p><p class="hide${destino.id}" style="display: none;"> Requisitos: ser mayor de 21 años, tener licencia de conducir vigente 
                    y contar con tarjeta de crédito internacional válida a nombre del conductor designado, 
                    para el bloqueo de la franquicia por BRL. Toma y deja en Aeropuerto. Es que siempre que el auto se tome 
                    y deje en oficinas diferentes, aplican cargos extras y deberán ser abonados por el cliente directamente en destino.
                </p>
                <a href="#" class="btnShow" id="${destino.id}">Leer mas...</a>
            </div>
        </div>
    </div>
`);
}
})

//simula los datos que traeria de la API, que contiene el paquete solicitado
$(()=>{

$(".lista").append(`
    <li>Incluye Aereos</li>
    <li>Hotel Media Pension</li>
    <li>Traslados</li>
    <li>Excursiones</li>
`).css({
    listStyleType: "circle",
    fontSize: ".9rem",
    lineHeight: "1.5"
});

})

//boton que muestra la info del paquete solicitado a traves de un slide
$(()=>{
$(".fa").on("click", (e)=>{
    
    let id=(e.target.id).slice(2);
    $(`#animate${id}`).slideToggle(1,()=>{
       //$(this).show();

       $(".container:nth-child(4)").css({
           borderBottomRightRadius: "2rem",
           borderBottomLeftRadius: "2rem"
        });

        $(".container:nth-child(1)").toggleClass("borderRadiusLeft").animate({
            transition: ".1s"
        });
        $(".container:nth-child(3)").toggleClass("borderRadiusRight").animate({
            transition: ".1s"
        });
        $(`#fa${id}`).toggleClass("fa-arrow-up").animate({
            transition: "10s"
        });
    });
           
});
});


//Boton mostrar mas...
$(()=>{
    $.fn.toggleText = function(txt1, txt2){
        
        if(this.text()==txt1){
            this.text(txt2);
            
        }else{
            this.text(txt1);
        }
        return this;
    }

    $(".btnShow").css({
        color: "#24dfd5",
        textDecoration: "underline wavy"
        
    })
    .on("click",(e)=>{
        e.preventDefault();
        let id= e.target.id;
        $(".hide"+id).slideDown("slow", ()=>{   
            $(`#${e.target.id}`).toggleText("Leer mas...", "Leer menos...");
        }).delay(4000).slideUp("slow", ()=>{   
            $(`#${e.target.id}`).toggleText("Leer mas...", "Leer menos...");
        });
    })
})







