class cardPay{
    constructor( cuotas, precioHotel, precioAereo, pasajeros,opcion){
        this.cuotas = cuotas;    
        this.precioHotel = precioHotel;
        this.precioAereo = precioAereo;
        this.pasajeros = pasajeros;
        this.opcion = opcion;
    }

    //constructor con iteraccion con el DOM

    /*constructor(firstName, lastName, numberCredit, own, expiration, codSeguridad, cuotas, precioHotel, precioAereo, pasajeros, opcion){
        this.firstName= firstName;
        this.lastName= lastName;
        this.numberCredit= numberCredit;
        this.own= own;
        this.expiration= expiration;
        this.codSeguridad= codSeguridad;  
        this.cuotas = cuotas;    
        this.precioHotel = precioHotel;
        this.precioAereo = precioAereo;
        this.pasajeros = pasajeros;

        this.opcion = opcion;
    }*/

    //metodo CalcularViaje
    calcularViaje(){
        let precioFinal = 0;
        let precio= 0;
        let precioCuotas= 0;
        const impuestos = 0.21
        
        if(this.pasajeros>2)
            precio = this.precioHotel + (this.precioAereo*this.pasajeros);
        else
            precio = this.precioHotel + this.precioAereo;
        
        
        precio+= precio*impuestos;

        switch (this.cuotas){
            case 1:{
                precioFinal=precio;
                alert("El precio final por todo su viaje es de: $"+ precioFinal + "\n El valor de cada cuota es: $" + precioCuotas+ "\n Precio Hotel: $" + this.precioHotel+ "\n Precio del Aereo: $"+ this.precioAereo+ "\n los calculos fueron hechos en base a la siguiente cantidad de pasajeros: " +this.pasajeros);
                break;
            }
               
           case 3:{
                precioFinal = precio + precio*0,1;
                precioCuotas = (precioFinal/3).toFixed(2);
                let response = confirm("El precio de las cuotas es de: $"+ precioCuotas + " desea continuar?");
                if(response){
                    alert("El precio final por todo su viaje es de: $"+ precioFinal + "\n El valor de cada cuota es: $" + precioCuotas+ "\n Precio Hotel: $" + this.precioHotel+ "\n Precio del Aereo: $"+ this.precioAereo+ "\n los calculos fueron hechos en base a la siguiente cantidad de pasajeros: " +this.pasajeros);
                }
                else
                    preCarga();
    
                break;
           }
           
           case 6:{
                precioFinal = precio + precio*0,2;
                precioCuotas = (precioFinal/6).toFixed(2);
                let response = confirm("El precio de las cuotas es de: $"+ precioCuotas+ " desea continuar?");
                if(response){
                    alert("El precio final por todo su viaje es de: $"+ precioFinal + "\n El valor de cada cuota es: $" + precioCuotas+ "\n Precio Hotel: $" + this.precioHotel+ "\n Precio del Aereo: $"+ this.precioAereo+ "\n los calculos fueron hechos en base a la siguiente cantidad de pasajeros: " +this.pasajeros);
                }
                else
                    preCarga();
    
                break;
           }
    
           case 9:{
                precioFinal = precio + precio*0,3;
                precioCuotas = (precioFinal/9).toFixed(2);
                let response = confirm("El precio de las cuotas es de: $"+ precioCuotas+ " desea continuar?")
                if(response){
                    alert("El precio final por todo su viaje es de: $"+ precioFinal + "\n El valor de cada cuota es: $" + precioCuotas+ "\n Precio Hotel: $" + this.precioHotel+ "\n Precio del Aereo: $"+ this.precioAereo+ "\n los calculos fueron hechos en base a la siguiente cantidad de pasajeros: " +this.pasajeros);
                }
                else
                    preCarga();
    
                break;
           }
    
           case 12:{
                precioFinal = precio + precio*0,4;
                precioCuotas = (precioFinal/12).toFixed(2);
                let response = confirm("El precio de las cuotas es de: $"+ precioCuotas+ " desea continuar?")
                if(response){
                    
                    alert("El precio final por todo su viaje es de: $"+ precioFinal + "\n El valor de cada cuota es: $" + precioCuotas+ "\n Precio Hotel: $" + this.precioHotel+ "\n Precio del Aereo: $"+ this.precioAereo+ "\n los calculos fueron hechos en base a la siguiente cantidad de pasajeros: " +this.pasajeros);
                }
                else
                    preCarga();
    
                break;
           }
        }
    }

    comprar(){
        if(!this.firstName || typeof this.firstName!== "string")
            alert("debe Ingresar su Nombre");
        
        if(!this.lastName || typeof this.lastName!== "string")
            alert("debe Ingresar su Apellido");

        if(!this.cuotas || typeof this.cuotas!== "number")
            alert("Ingrese las cuotas que desea");

        if(!this.numberCredit || typeof this.numberCredit!=="number")
            alert("Codigo de tarjeta mal ingresado");
        
        if(!this.own || typeof this.own!=="string")
            alert("Debe ingresar el titular como figura en la Tarjeta");

        if(!this.expiration || typeof this.expiration!== "number")
            alert("La Fecha no esta en un Formato Correcto");

        if(!this.codSeguridad || typeof this.codSeguridad!== "number")
            alert("Cod. Seguridad Incorrecto - El Cod. consta de 3 digistos");


        //si todo esta correcto
        //conveetir a JSON y enviar a validar

        //espero respuesta
        let aprobado = true //cargo respuesta
        if(aprobado)
            alert("Todo listo - que disfrute su viaje")
    }

    //metodos para usar con el prompt

    //metodo opcion
    destino(){
        
        switch (this.opcion){
            case "A":{
                this.precioHotel = 120000;
                this.precioAereo = 60000;
                this.calcularViaje();  
                break;       
            }
    
            case "B":{
                this.precioHotel = 220000;
                this.precioAereo = 80000;
                this.calcularViaje();
                break;
            }
    
            case "C":{
                this.precioHotel = 12000;
                this.precioAereo = 5000; 
                this.calcularViaje();
                break;
            }
    
            case "D":{
                this.precioHotel = 180000;
                this.precioAereo = 30000; 
                this.calcularViaje();
                break;
            }
            default:{
                alert("Ingreso una opcion incorrecta");
                preCarga();
            }
        }
    }
}



function preCarga(){
    let opcion = (window.prompt("Ingrese una opcion entre: - [A - B - C - D]")).toUpperCase();
    let pasajeros = parseInt( window.prompt("Ingrese cantidad de pasajeros"));
    let cuotas = parseInt( window.prompt("Ingrese la cantidad de cuotas 1/3/6/9/12"));
    
    let precioHotel = 0;
    let precioAereo = 0;
    //let Factura = new cardPay(firstName, lastName, numberCredit, own, expiration, codSeguridad, cuotas, precioHotel, precioAereo, pasajeros,opcion);
    let Factura = new cardPay( cuotas, precioHotel, precioAereo, pasajeros,opcion);
    Factura.destino();
}