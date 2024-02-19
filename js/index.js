function getPetExerciseInfo(tipo_mascota, edad) {
    if (tipo_mascota === "perro") {
        if (edad < 1) {
            return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
        } else if (edad >= 1 && edad <= 7) {
            return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
        } else if (edad > 7) {
            return "Los perros viejos necesitan caminatas más cortas";
        }
    } else if (tipo_mascota === "gato") {
        if (edad < 1) {
            return "Los gatitos necesitan frecuentes sesiones de juego";
        } else if (edad >= 1 && edad <= 7) {
            return "Los gatos a esta edad necesitan jugar diariamente";
        } else if (edad > 7) {
            return "Los gatos viejos necesitan sesiones de juego más cortas";
        }
    } else if (tipo_mascota === "ave") {
        if (edad < 1) {
            return "Las aves jóvenes necesitan mucho espacio para volar";
        } else if (edad >= 1 && edad <= 7) {
            return "Las aves necesitan jugar diariamente y un lugar para volar";
        } else if (edad > 7) {
            return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
        }
    } else {
        return "Tipo de mascota inválida";
    }
}

let tipo_mascota = prompt("Ingrese el tipo de mascota (perro, gato, ave):");
let edad = parseInt(prompt("Ingrese la edad de la mascota:"));

let mensaje = getPetExerciseInfo(tipo_mascota, edad); alert(mensaje);