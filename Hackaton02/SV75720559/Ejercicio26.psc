//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso  Ejercicio26
    Definir dividendo, divisor, cociente, resto como Entero
	
    Escribir "Ingrese el dividendo: "
    Leer dividendo
	
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    cociente <- 0
	
    Mientras dividendo >= divisor Hacer
        dividendo = dividendo - divisor
        cociente = cociente + 1
    Fin Mientras
	
    resto = dividendo
	
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
FinAlgoritmo
