Proceso desc_tipo_membresia
//Calular el descuento seg�n tipo de mebresi�as
// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membres�a dependiendo de su tipo, 
// s�lo existen tres tipos de membres�a, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	
	Definir memb Como Caracter;
	Definir desct, compra como real;
	desct <- 0;
	compra <- 0;
	Escribir Sin Saltar "Valor de Compra: S/."
	Leer compra;
	Escribir Sin Saltar "Escoger el Tipo de Membres�a (Tipo A, Tipo B � Tipo C): ";
	Leer Tecla
	Escribir "";
	Si (memb = A) Entonces
		Escribir "Membresia Tipo A";
		desct <- 0.10;
	SiNo
			SI (memb = B) Entonces
				Escribir "Membresia Tipo B";
				desct <- 0.15;
			SiNo
				SI (memb = C) Entonces
					Escribir "Membresia Tipo C";
					desct <- 0.20;
			FinSi
		FinSi
	FinSi
	
	Escribir "Descuento : S/.",desct;
	Escribir "Importe desct : S/.",compra*desct;
	Escribir "Pago Total : S/.",compra-(compra*desct);
		
FinProceso
