//creando la clase pila
var Pila = function(max){
  this.max=max;
  this.v = new Array(max);
  this.tope=-1;

  //funciones

  this.vacia = function(){
    return this.tope === -1;
  }


  this.llena = function(){
    return this.tope === max-1;
  }

  this.poner = function(dato){
    if(!this.llena()){
      this.v[++this.tope] = dato;
    }else{
      console.log('Pila llena');
    }
  }

  this.quitar = function(){
    dato = null;
    if(!this.vacia()){
      dato = this.v[this.tope--];
    }else{
      console.log('Pila vacia');
    }
    return dato;
  }

  this.cima = function(){
    if(!this.vacia()){
      return this.v[this.tope];
    }else{
      return null;
    }
  }
}