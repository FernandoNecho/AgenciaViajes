
//array de objetos con los precios para las Promociones de
//las paginas index y argentina.html
let listaPrecios = [
    {
        id: 0,
        precioHotel: 12000,
        precioAereo: 60000
    },

    {
        id: 1,
        precioHotel: 220000,
        precioAereo: 80000
    },

    {
        id: 2,
        precioHotel: 12000,
        precioAereo: 5000
    },

    {
        id: 3,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 4,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 5,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 6,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 7,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 8,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 9,
        precioHotel: 180000,
        precioAereo: 30000
    },

    {
        id: 10,
        precioHotel: 30000,
        precioAereo: 76543
    },

    {
        id: 11,
        precioHotel: 130000,
        precioAereo: 23600
    },

    {
        id: 12,
        precioHotel: 60000,
        precioAereo: 60000
    },

    {
        id: 13,
        precioHotel: 80000,
        precioAereo: 40000
    },

    {
        id: 14,
        precioHotel: 180000,
        precioAereo: 30000
    }

];





// Clase para calcular el Precio en cuotas y por cantidad de pasajeros
//para el formulario de la pagina formCompra.html

class priceTrip{
    constructor( cuotas, precioHotel, precioAereo, pasajeros,opcion){
        this.cuotas = cuotas;    
        this.precioHotel = precioHotel;
        this.precioAereo = precioAereo;
        this.pasajeros = pasajeros;
        this.opcion = opcion;
        this.precioFinal =0;
    }

    //metodo CalcularViaje -recibe un nodo (#id=priceCoutas) para imprimir lo calculado
    calcularViaje(estimado){
        let precio= 0;
        let precioCuotas= 0;
        const impuestos = 0.21
        
        if(this.pasajeros || typeof this.pasajeros=== "number"){//verifico que me llegue un numero como pasajeros
            
            if(this.pasajeros>2){ //si son mas de 2 pasajeros, deja de ser base doble.          
                precio = this.precioHotel + (this.precioAereo*this.pasajeros);
            }
            else{
                precio = this.precioHotel + this.precioAereo;
            }
                
            precio+= precio*impuestos;

            //calculo en base a la cantidad de cuotas e imprimo resultado en pantalla
            switch (this.cuotas){
            
                case 1:{
                    this.precioFinal=precio;
                    estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                        <p>El valor de cada cuota(1) es: <b>  $${this.precioFinal}</b></p> 
                                        <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                        <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                        <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
                    break;
                }
                
                case 3:{
                        this.precioFinal = precio + precio*0,1;
                        precioCuotas = (this.precioFinal/3).toFixed(2);
                        estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                            <p>El valor de cada cuota(3) es: <b> $ ${precioCuotas}</b></p> 
                                            <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                            <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                            <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
            
                        break;
                }
                
                case 6:{
                        this.precioFinal = precio + precio*0,2;
                        precioCuotas = (this.precioFinal/6).toFixed(2);
                        estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                            <p>El valor de cada cuota(6) es: <b> $ ${precioCuotas}</b></p> 
                                            <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                            <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                            <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
            
                        break;
                }
            
                case 9:{
                        this.precioFinal = precio + precio*0,3;
                        precioCuotas = (this.precioFinal/9).toFixed(2);
                        
                        estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                            <p>El valor de cada cuota(9) es: <b> $ ${precioCuotas}</b></p> 
                                            <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                            <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                            <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
                        break;
                }
            
                case 12:{
                        this.precioFinal = precio + precio*0,4;
                        precioCuotas = (this.precioFinal/12).toFixed(2);
                        estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                            <p>El valor de cada cuota(12) es: <b> $ ${precioCuotas}</b></p> 
                                            <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                            <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                            <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
            
                        break;
                }

                default:{
                    alert("Ingreso un opcion incorrecta, las cuotas son [1-3-6-9-12]");
                    preCarga();
                    }
                }
                /*
                *si presiono submit y ya elegi pasajeros y cuotas,  la funcion
                *comprar de la clase cardPay llama calcular viaje e imprime 
                *la compra con los valores calculados
                */ 
                return true;
        }else{
            let pas = document.getElementById("pasajeros").nextElementSibling;
            //corroboro que se escriba una sola vez
            if(pas.matches(".requed")) return false
            //sino ingresaron cantidad de pasajeros en el form - imprimo un mensaje
            document.getElementById("pasajeros").insertAdjacentHTML("afterend", "<p class='requed'>*Debe completar este campo</p>");
            //alert("Ingrese las cuotas que desea");
            return false;
        }        
        
        

        
    }
}

//Calse para realizar la compra, levanta los datos de la tarjeta de credito y hereda de la clase priceTrip

class cardPay extends priceTrip{
    //constructor con iteraccion con el DOM

    constructor(firstName, lastName, email, numberCredit, own, expiration, codSeguridad, cuotas, precioHotel, precioAereo, pasajeros, opcion){
        super( cuotas, precioHotel, precioAereo, pasajeros,opcion);
        this.firstName= firstName;
        this.lastName= lastName;
        this.email = email;
        this.numberCredit= numberCredit;
        this.own= own;
        this.expiration= expiration;
        this.codSeguridad= codSeguridad;    
    }

   
    //al hacer click en submit invoca a la funcion calcular viaje y corrobora los datos ingresado de la credit card
    comprar(){
        let estimado = document.getElementById("priceCuotas");
        let flag = this.calcularViaje(estimado);
        if(!flag) return;
        let aprob =0;
        const d= document;
        if(!this.firstName || typeof this.firstName!== "string"){
            let pas = document.getElementById("firstName").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("firstName").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("debe Ingresar su Nombre");
            aprob=1;
        }else{
            let pas = document.getElementById("firstName").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }
        
        if(!this.lastName || typeof this.lastName!== "string"){
            let pas = document.getElementById("lastName").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("lastName").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("debe Ingresar su Apellido");
            aprob=1;
        }else{
            let pas = document.getElementById("lastName").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }

        if(!this.email || typeof this.email!== "string"){
            let pas = document.getElementById("email").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("email").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("debe Ingresar su Apellido");
            aprob=1;
        }else{
            let pas = document.getElementById("email").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }

        if(!this.cuotas || typeof this.cuotas!== "number"){
            let pas = document.getElementById("cuotas").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("cuotas").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("Ingrese las cuotas que desea");
            aprob=1;
        }else{
            let pas = document.getElementById("cuotas").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }


        if(!this.numberCredit || typeof this.numberCredit!=="number"){
            let pas = document.getElementById("numberCredit").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("numberCredit").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("Codigo de tarjeta mal ingresado");
            aprob=1;
        }else{
            let pas = document.getElementById("numberCredit").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }
        
        if(!this.own || typeof this.own!=="string"){
            let pas = document.getElementById("own").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("own").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("Debe ingresar el titular como figura en la Tarjeta");
            aprob=1;
        }else{
            let pas = document.getElementById("own").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }

        let fecha = Date.parse(this.expiration);
        if(!this.expiration || isNaN(fecha)){
            let pas = document.getElementById("expiration").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("expiration").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("La Fecha no esta en un Formato Correcto");
            aprob=1;
        }else{
            let pas = document.getElementById("expiration").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }

        if(!this.codSeguridad || typeof this.codSeguridad!== "number"){
            let pas = document.getElementById("cod").nextElementSibling;         
            //corroboro que se escriba una sola vez
            if(pas.matches(".requerido")) return false;

            d.getElementById("cod").insertAdjacentHTML("afterend", "<p class='requerido'>*Debe completar este campo</p>");
            //alert("Cod. Seguridad Incorrecto - El Cod. consta de 3 digistos");
            aprob=1;
        }else{
            let pas = document.getElementById("cod").nextElementSibling;
            if(pas.matches(".requerido")) 
                pas.remove();        
        }

        //imprimo Aviso de Exito!!
        this.succes(aprob);
        
    }
    
    //si todo esta correcto valido y envio mensaje a la pantalla con la compra
    succes(aprob){
        if(aprob) return;
        const promo = JSON.parse(localStorage.getItem("promo"));
        const precioCuotas =(this.precioFinal/this.cuotas).toFixed(2);
        const fin = document.getElementById("formulario");
        fin.outerHTML=`<h2>Gracias por su Compra!!!</h2>
                        <div>
                            <p>Sr./a: ${this.firstName} ${this.lastName}</p>
                            <p>Le va estar llegando un mail a ${this.email} con su reserva al destino: ${promo.destino}</p>
                            <p>Los Datos de reserva son: ${promo.descripcion} : $${this.precioFinal}</p>
                            <p>Cantidad de cuotas: ${this.cuotas}</p>
                            <p>El valor de cada cuota(12) es: <b> $ ${precioCuotas}</b></p> 
                            <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                            <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                            <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                            <p>El equipo de Travel les agradece por confiar en nostros y les desea un feliz viaje</p>
                        </div>
                        <a href="../index.html" class="btn btn-dark">Volver...</a>`
    }
}


/***********
 * se invoca  uando carga el dom
 * levanta los datos de la promocion que se hizo click 
 * la muestra en pantalla junto con los formularios de compra
 */

function preCarga(){
    const promo = JSON.parse(localStorage.getItem("promo"));
    //agrego el destino seleccionado al formulario
    let destino = document.getElementById("destino");
    destino.textContent = promo.destino;

    let imgStorage = promo.imagen;
    let imagen = document.createElement("img");
    imagen.setAttribute("src", imgStorage);
    imagen.setAttribute('alt', 'na');
    imagen.setAttribute('width', '60%');
    imagen.setAttribute('height', 'auto');
    imagen.setAttribute('objectFit', 'cover')
    //destino.appendChild(imagen);
    let parentDiv = destino.parentNode;

    // Inserta un nuevo elemento en el DOM antes de sp2
    parentDiv.insertBefore(imagen, destino.nextSibling);

    let precioViaje= document.createElement("b");
    precioViaje.textContent= promo.precio;

    //traigo la descripcion
    let descripcion = document.getElementById("descripcion");
    descripcion.textContent = promo.descripcion;

    //traigo el precio ofertado en base doble de contado
    
    descripcion.appendChild(precioViaje);

    let calcViaje = document.getElementById("btnCalcular");
    calcViaje.addEventListener("click", calculo );

    //funcion que muestra precio ecuotas, si solo quiero calcular antes de comprar
    function calculo(){
        let index= parseInt(promo.id);
        
        let opcion = parseInt(listaPrecios[index].id); 
    
        let id=null;
        let precioHotel = 0;
        let precioAereo = 0;
        for (const e of listaPrecios) {
            if(e.id===opcion){
                id = e.id;
                precioHotel = e.precioHotel;
                precioAereo = e.precioAereo;
            }

        }

        let pasajeros = document.getElementById("pasajeros").value;
        let cuotas = parseInt(document.getElementById("cuotas").value);

        if(cuotas!=1 && cuotas!==3 && cuotas!==6 && cuotas!==9 && cuotas!==12){
            alert("Ingreso una opcion incorrecta, las opciones son[1-3-6-9-12]");
            preCarga();
        }

        let price = new priceTrip( cuotas, precioHotel, precioAereo, pasajeros,id);
        let estimado = document.getElementById("priceCuotas");
        price.calcularViaje(estimado);

    }
    
    //add el evento submit a la escucha
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validar);
    
    //si se aprieta submit levanto todos los datos del los formularios
    function validar(e){
        e.preventDefault();
        let firstName = formulario.firstName.value;
        let lastName= formulario.lastName.value;
        let email = formulario.email.value;
        let numberCredit = parseInt(formulario.numberCredit.value);
        let own = formulario.own.value;
        let expiration = formulario.expiration.value;
        let codSeguridad = parseInt(formulario.cod.value);
        let cuotas = parseInt(formulario.cuotas.value);
        let pasajeros = document.getElementById("pasajeros").value;
        let promo = JSON.parse(localStorage.getItem("promo"));
        const id = promo.id;
        let precioAereo = listaPrecios[id].precioAereo;
        let precioHotel = listaPrecios[id].precioHotel;

        
        //creo una instancia
        let factura = new cardPay(firstName, lastName, email,numberCredit, own, expiration, codSeguridad, cuotas,precioHotel, precioAereo, pasajeros, id);
        //emito compra
        factura.comprar();
       
        
        
    }

}


//llamada la funcion para cargar la promocion que llamo
preCarga();


