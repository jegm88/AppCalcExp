//creando la clase pila
var p = new Pila();
var resultado;
var pos;
// Métodos
function calcularExpresion(exp){
    return calcular(infija2Postfija(exp)).toString().replace("e+","*10^");
}

function calcular (expPos) {
    for (var i = 0; i < expPos.length; i++) {
        if (expPos[i].toLowerCase() == '+') {
            var num1 = Number(p.quitar());
            var num2 = Number(p.quitar());
            var res = sumar(num1,num2);
            p.poner(res);
        }else if(expPos[i].toLowerCase() == '-') {
            var num1 = Number(p.quitar());
            var num2;
            if(p.vacia()){
                num2=0;
            }else{
                num2 = Number(p.quitar());    
            }
            var res = restar(num1,num2);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == '*') {
            var num1 = Number(p.quitar());
            var num2 = Number(p.quitar());
            var res = multiplicar(num1,num2);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == '/') {
            var num1 = Number(p.quitar());
            var num2 = Number(p.quitar());
            var res = dividir(num1,num2);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == '^') {
            var num1 = Number(p.quitar());
            var num2 = Number(p.quitar());
            var res = pot(num2,num1);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'sqrt') {
            var num = Number(p.quitar());
            var res = sqrt(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'xsqrt') {
            var num1 = Number(p.quitar());
            var num2 = Number(p.quitar());
            var res = xsqrt(num1,num2);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'ln') {
            var num = Number(p.quitar());
            var res = ln(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'log') {
            var num = Number(p.quitar());
            var res = log(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'e') {
            var res = e();
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'pi') {
            var res = pi();
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'sin') {
            var num = Number(p.quitar());
            var res = sin(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'cos') {
            var num = Number(p.quitar());
            var res = cos(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'tan') {
            var num = Number(p.quitar());
            var res = tan(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'asin') {
            var num = Number(p.quitar());
            var res = asin(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'acos') {
            var num = Number(p.quitar());
            var res = acos(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == 'atan') {
            var num = Number(p.quitar());
            var res = atan(num);
            p.poner(res);
        }else
        if (expPos[i].toLowerCase() == '!') {
            var num = Number(p.cima());
            var res = fact(num);
            p.quitar();
            p.poner(res);
        }else{
            p.poner(expPos[i].toLowerCase());
        }
    }
    return Number(p.quitar());
}

function sumar (num1,num2) {
    return num1 + num2;
}

function restar (num1,num2) {
    return num2 - num1;
}

function multiplicar (num1,num2) {
    return num2 * num1;
}

function pot (num1,num2) {
    return Math.pow(num1,num2);
}

function sqrt (num) {
    return Math.sqrt(num);
}


function ln (num) {
    return Math.log(num);
}

function log(num) {
    return Math.log(num) / Math.log(10);
}

function dividir (num1,num2) {
    if (num2 == 0) {
        alert("error division por cero");
        return 0;
    }else{
        return num2 / num1;
    }
}

function e (){
    return Math.E;
}

function pi (){
    return Math.PI;
}

function sin (num){
    return Math.sin(num);
}

function cos (num){
    return Math.cos(num);
}

function tan (num){
    return Math.tan(num);
}

function asin (num){
    return Math.asin(num);
}

function acos (num){
    return Math.acos(num);
}

function atan (num){
    return Math.atan(num);
}
function fact (num){
    var f=1; 
    for (var i = 1; i <= num; i++) {
        f*=i;
    };
    return f;
}
function xsqrt (num1, num2) {
    return Math.exp(Math.log(num1) / num2);
}