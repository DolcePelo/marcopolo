Mostrar = () => {
    let valor = document.getElementById("valor").value;
     alert(valor);
     document.getElementById("valor").value="";

    ;};
    function Incrementar(){
        let valor = document.getElementById("incrementar").value;
        valor++;
        document.getElementById("incrementar").value = valor;

    }


//     La conjetura de Collatz (tambien llamada 3n + 1)

// (a) Dado un numero si es par ? lo divido por dos. volver a (a)
//     si es impar lo multiplico por (3n + 1) 
//     volver a evaluar (a)

// Tengo que hacer una funcion, que acepte un numero

// La conjetura de collatz dice que todos los numeros bajo este algoritmo
// terminan en uno.

    calcular = (n)=>{
        if (n<1){
            return alert('El numero debe ser mayor a 0')
        }
        if (n==1) return alert('Numero terminado en 1 :)');
        if(n % 2==0){
            n= n/2;
            calcular(n);
        
        }else{
            n =n*3 + 1
            calcular(n);
        }
        
    };

    calcular(5);