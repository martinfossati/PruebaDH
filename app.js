let autos = require("./modulos/autos");

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let elAuto = null;
        for (let i = 0; i < autos.length; i++){
            if(autos[i].patente == patente){
                elAuto = autos[i];
            }
        }
        return elAuto;
    },
    venderAuto: function(patente){
        let coches = this.buscarAuto(patente);
        if (coches.vendido == false){
            coches.vendido = true
        };
    return coches;
    },
    autosParaLaVenta: function(){
        let coches = this.autos.filter(function(elemento){
            return elemento.vendido != true;
        });
        return coches;
    },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter(function(elemento){
            return elemento.km < 100
        })
    },
    listaDeVentas: function(){
        let preciosVendidos = [];
        for(let i = 0; i < this.autos.length; i++){
            if (this.autos[i].vendido == true){
                preciosVendidos.push(autos[i].precio);
            }
        }
        return preciosVendidos;
    },
    totalDeVentas: function(){
        let ventas = this.listaDeVentas();
        let sumatoriaVentas = 0;
        if(ventas.length != 0){
            sumatoriaVentas = ventas.reduce(function(acum, elemento){
                return acum + elemento;
            });
        }
        return sumatoriaVentas;
    },
    puedeComprar: function(auto, persona){
        if(persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)){
           return true;
        } else{
           return false;
        }
    },
    autosQuePuedeComprar: function(persona){
        let autosParaComprar = this.autosParaLaVenta();
        let autosQuePuedeComprar = [];
        for(let i = 0; i < autosParaComprar.length; i++){
            if(this.puedeComprar(autosParaComprar[i], persona) == true){
                autosQuePuedeComprar.push(autosParaComprar[i]);
            }
        }
        return autosQuePuedeComprar;
    }
}

concesionaria.autosQuePuedeComprar();





console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.totalDeVentas());