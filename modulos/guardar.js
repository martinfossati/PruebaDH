let coches = this.autos.filter(function(elemento){
    return elemento.km < 100;
});
return coches;


/* autosNuevos: function(){
    let coches = this.autos.filter(function(elemento){
        return elemento.km < 100 && elemento.vendido != true;
    });
    return coches;
}
*/

/*
autosNuevos: function(){
    return this.autosParaLaVenta().filter(auto => auto.km < 100)
}
*/