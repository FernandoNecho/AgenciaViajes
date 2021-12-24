//Preproyecto 1

//array de objetos
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





// Clase culacula

class priceTrip{
    constructor( cuotas, precioHotel, precioAereo, pasajeros,opcion){
        this.cuotas = cuotas;    
        this.precioHotel = precioHotel;
        this.precioAereo = precioAereo;
        this.pasajeros = pasajeros;
        this.opcion = opcion;
    }

    //metodo CalcularViaje
    calcularViaje(estimado){
        let precioFinal = 0;
        let precio= 0;
        let precioCuotas= 0;
        const impuestos = 0.21
        
        if(this.pasajeros>2)
            precio = this.precioHotel + (this.precioAereo*this.pasajeros);
        else
            precio = this.precioHotel + this.precioAereo;
        
        
        precio+= precio*impuestos;

        //let estimado = document.getElementById("priceCuotas");

        switch (this.cuotas){
        
            case 1:{
                precioFinal=precio;
                estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${precioFinal}</b></p>  
                                    <p>El valor de cada cuota(1) es: <b> $ ${precioFinal}</b></p> 
                                    <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                    <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                    <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
                break;
            }
               
           case 3:{
                precioFinal = precio + precio*0,1;
                precioCuotas = (precioFinal/3).toFixed(2);
                estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${precioFinal}</b></p>  
                                    <p>El valor de cada cuota(3) es: <b> $ ${precioCuotas}</b></p> 
                                    <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                    <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                    <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
    
                break;
           }
           
           case 6:{
                precioFinal = precio + precio*0,2;
                precioCuotas = (precioFinal/6).toFixed(2);
                estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${precioFinal}</b></p>  
                                    <p>El valor de cada cuota(6) es: <b> $ ${precioCuotas}</b></p> 
                                    <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                    <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                    <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
    
                break;
           }
    
           case 9:{
                precioFinal = precio + precio*0,3;
                precioCuotas = (precioFinal/9).toFixed(2);
                
                estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${precioFinal}</b></p>  
                                    <p>El valor de cada cuota(9) es: <b> $ ${precioCuotas}</b></p> 
                                    <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                    <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                    <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>`;
                break;
           }
    
           case 12:{
                precioFinal = precio + precio*0,4;
                precioCuotas = (precioFinal/12).toFixed(2);
                estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${precioFinal}</b></p>  
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
    }
}

class cardPay extends priceTrip{
    //constructor con iteraccion con el DOM

    constructor(firstName, lastName, numberCredit, own, expiration, codSeguridad, cuotas, precioHotel, precioAereo, pasajeros, opcion){
        super( cuotas, precioHotel, precioAereo, pasajeros,opcion);
        this.firstName= firstName;
        this.lastName= lastName;
        this.numberCredit= numberCredit;
        this.own= own;
        this.expiration= expiration;
        this.codSeguridad= codSeguridad;  
        /*this.cuotas = cuotas;    
        this.precioHotel = precioHotel;
        this.precioAereo = precioAereo;
        this.pasajeros = pasajeros;

        this.opcion = opcion;*/

        
    }

   

    comprar(){
        let aprob =0;
        if(!this.firstName || typeof this.firstName!== "string"){
            alert("debe Ingresar su Nombre");
            aprob=1;
        }
        
        if(!this.lastName || typeof this.lastName!== "string"){
            alert("debe Ingresar su Apellido");
            aprob=1;
        }


        if(!this.cuotas || typeof this.cuotas!== "number"){
            alert("Ingrese las cuotas que desea");
            aprob=1;
        }

        if(!this.numberCredit || typeof this.numberCredit!=="number"){
            alert("Codigo de tarjeta mal ingresado");
            aprob=1;
        }
        
        if(!this.own || typeof this.own!=="string"){
            alert("Debe ingresar el titular como figura en la Tarjeta");
            aprob=1;
        }

        let fecha = Date.parse(this.expiration);
        if(!this.expiration || isNaN(fecha)){
            alert("La Fecha no esta en un Formato Correcto");
            aprob=1;
        }

        if(!this.codSeguridad || typeof this.codSeguridad!== "number"){
            alert("Cod. Seguridad Incorrecto - El Cod. consta de 3 digistos");
            aprob=1;
        }

        //si todo esta correcto
        //conveetir a JSON y enviar a validar
        
        //espero respuesta
        return aprob;
       
    }
  
}



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
    calcViaje.addEventListener("click", calculo )
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
    
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validar);
    
    function validar(e){
        e.preventDefault();
        let firstName = formulario.firstName.value;
        let lastName= formulario.lastName.value;
        let numberCredit = parseInt(formulario.numberCredit.value);
        let own = formulario.own.value;
        let expiration = formulario.expiration.value;
        let codSeguridad = parseInt(formulario.cod.value);
        let cuotas = parseInt(formulario.cuotas.value);
        let pasajeros = parseInt(formulario.pasajeros.value);
        let id = parseInt(localStorage.getItem("id"));
        let precioHotel = listaPrecios[id].precioHotel;
        let precioAereo = listaPrecios[id].precioAereo;

        
        
        let factura = new cardPay(firstName, lastName, numberCredit, own, expiration, codSeguridad, cuotas,precioHotel, precioAereo, pasajeros, id);
        let estimado = document.getElementById("price");
        let flag = factura.comprar();

        if(flag!=1)
            factura.calcularViaje(estimado);
        
    }

}

preCarga();
