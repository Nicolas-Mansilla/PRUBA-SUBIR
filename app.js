//Nicolas Mansilla //
//Trabajo Práctico para FIP //
//Ejercicio numero 1: Exporta el componente//
//Solucion//
export default function Profile() {
    //Para ser exportado debe contener si o si las palabras export default.//
    return (
      <img
        src="https://img.freepik.com/fotos-premium/gatito-lindo-fondos-escritorio-dibujos-animadospequeno-gatito_607202-1368.jpg?w=740"
        alt="Gatito Lindo"
      />
    );
  }
  //Ejercicio número 2:Arregla la sentencia //
      export default function Profile(){
          return(
              <img
              src="https://img.freepik.com/fotos-premium/gatito-lindo-fondos-escritorio-dibujos-animadospequeno-gatito_607202-1368.jpg?w=740"
              alt="Gatito Lindo"
              />
          )//-El valor de retorno debe estar dentro de un parentesis para ser exportado, sin parentesis, esto sera ignorado -//
      }
      //Ejercicio 3:detectar el error //
      function profile//aqui ya que cualquier clase debe tener la inicial en mayuscula//
      //para que la funcion  profile pueda ser usada debe tener mayuscula por ej//
      funcion Profile (){
        return(
          <img
          src=""
          alt="Gatito"
          />
        );
      }