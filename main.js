const days = {
  1: 'lunes',
  2: 'martes',
  3: 'miércoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado',
  0: 'domingo',
};
const months = {
  enero: 0,
  febrero: 3,
  marzo: 3,
  abril: 6,
  mayo: 1,
  junio: 4,
  julio: 6,
  agosto: 2,
  septiembre: 5,
  octubre: 0,
  noviembre: 3,
  diciembre: 5,
};
const century = {
  1600: 6,
  1700: 4,
  1800: 2,
  1900: 0,
  2000: 6,
}
let day = 0
let variable = 0
let month = ''
let year = 0
let keyCentury = 0
let lastTwoDigits = 0
alert('Bienvenido a la aplicación que le permitirá conocer que día de la semana nació. Para continuar dar aceptar')

function validacionDeDatos(periodo){
    do{    
        variable = Number(prompt('Ingrese el ' + periodo + ' de nacimiento'))
        if(isNaN(variable)){
            alert('Solo se permiten valores númericos')
        }    
    }while(isNaN(variable))
    return variable
}
day = validacionDeDatos('día')
month = prompt('Ingrese el mes de nacimiento')
year = validacionDeDatos('año')

keyCentury = Math.trunc(year/100)*100

if(year >= 1600 && year<1700) {
    lastTwoDigits = year%1600
}else if (year >= 1700 && year<1800){
    lastTwoDigits = year%1700
}else if (year >= 1800 && year<1900){
    lastTwoDigits = year%1800
}else if (year >= 1900 && year<2000){
    lastTwoDigits = year%1900
}else{
    lastTwoDigits = year%2000
}

if((year%4 == 0 && year%100 != 0) && (month == 'enero' || month == 'febrero')) {
    alert("Naciste el día " + days[((day+ months[month]+ century[keyCentury]+ Math.trunc(lastTwoDigits/4) + lastTwoDigits%7)%7)-1])
}else if((year%100 == 0 && year%4 == 0 && year%400 == 0) && (month == 'enero' || month == 'febrero')) {
    alert("Naciste el día " + days[((day+ months[month]+ century[keyCentury]+ Math.trunc(lastTwoDigits/4) + lastTwoDigits%7)%7)-1])
}else {
    alert("Naciste el día " + days[(day+ months[month]+ century[keyCentury]+ Math.trunc(lastTwoDigits/4) + lastTwoDigits%7)%7])
}



