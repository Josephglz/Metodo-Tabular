# Quine-McCluskey

```shell
2019, abril
```

## Autores

* Francisco Pablo Rodrigo
* Flores Martínez Emanuel
* García Ruíz Andrea

## Materia

* Diseño Digital Moderno
* Semestre 2019-2
* Universidad Nacional Autónoma de México

## Tecnologías

* Javascript
* HTML 5
* CSS 3
* Bootrap v4.0

El método Quine-McCluskey es un método para minimizar funciones booleanas de n variables. Es funcionalmente idéntico a la utilización del mapa de Karnaugh, pero su forma tabular lo hace más eficiente para su implementación en lenguajes computacionales.

## Pasos

El método consta de dos pasos:

1. Encontrar los **implicantes primos** de la función.
2. Usar esos implicantes en una *tabla de implicantes primos* para encontrar los **implicantes primos esenciales**, los cuales son necesarios y suficientes para generar la función.


## Pseudocodigo

**QUEDA PENDIENTE SU REVISIÓN**

Para encontrar los implicantes primos

```shell
Formar grupos basado en la cantidad de unos que tiene el número en su representación binaria.
MIENTRAS que ...[Ahorita vemos]
    PARA cada elemento del grupo
        SI la resta de ese elemento con algun
        otro elemento de otro grupo es potencia de 2.
            * Crear un nuevo grupo y
            * Unir los numeros en un arreglo
            * Sacar el valor de fp
            * Marcar al elemento como usado
    SI hay elementos sin usar se vuelven implicantes
    primos        

```
