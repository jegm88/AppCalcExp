//Inicializar la Expresión Postfija EP

var expPostfija;
var expInfija;

var operadores = ['+','-','*','/','^'];
var funciones = ['sqrt','xsqrt','ln','log','abs','sin','cos','tan','asin','acos','atan','!'];
var constantes = ['e','pi'];
var prioridades = [1,1,2,2,3];
var priorfunciones = 4;

function esOperador(op){
   for (var i = 0; i < operadores.length; i++) {
      if (operadores[i]===op){
         return true;
      }
   };
   return false;
}

function esFuncion(fx){
   for (var i = 0; i < funciones.length; i++) {
      if (funciones[i]===fx){
         return true;
      }
   };
   return false;
}

function prioridad (c){
   if(esOperador(c)){
      for (var i = 0; i < operadores.length; i++) {
         if (operadores[i]===c){
            return prioridades[i];
         }
      };
   }else if(esFuncion(c)){
      return priorfunciones;
   }
   return null;
}

function separarExpresion(expresion){
   var myRegexp = /([\+\*\/\^\!])|((\B(?![0-9])-)?\d+((\.|\,)\d+)?)|([a-zA-Z]+)|([\(\)\[\]\{\}])|(\-)/g;
   var match = expresion.match(myRegexp);
   return match;
}

function infija2Postfija (expInfija){
   var c;
   var i;
   var prioridadCima=0;
   var prioridadOper;
   var expPos = new Array();
   var med = new Pila();
   var pos = new Pila();
   if(expInfija !== null){
      
      var expSep = separarExpresion(expInfija);
      expPos =  new Array();
      
      for(i=0;i<expSep.length;i++){
         c = expSep[i];

         if(c === '(' ){
            med.poner(c);
         }else if(c === ')'){
            while(med.cima() !== '('){
               pos.poner(med.quitar());
            }
            med.quitar();
         }else if(esOperador(c)||esFuncion(c)){
            prioridadCima = prioridad(med.cima());
            prioridadOper = prioridad(c);
            while(!med.vacia() && (prioridadOper <= prioridadCima)){
               pos.poner(med.quitar());
               prioridadCima = prioridad(med.cima());
            }
            med.poner(c);
        }else{
            pos.poner(c);
         }
      }
      while(!pos.vacia()){
         med.poner(pos.quitar());
      }
      while(!med.vacia()){
        expPos.push(med.quitar());
      }
   }
   alert(expPos);
   return expPos;
}