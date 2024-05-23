# Prueba Técnica

Este documento describe cómo configurar y ejecutar la prueba técnica. Siga los pasos a continuación para instalar y ejecutar el proyecto.

## Prerrequisitos

Antes de poder ejecutar este proyecto, debe tener instalado Node.js y npm. Puede descargar Node.js y npm desde [aquí](https://nodejs.org/).

## Pasos para la Configuración

### 1. Instalar pnpm

PNPM es un administrador de paquetes rápido, eficiente y determinista. Para instalarlo, ejecute el siguiente comando en su consola:

```shell
npm install -g pnpm
```

### 2. Instalar Dependencias del Proyecto

Para instalar las dependencias del proyecto, navegue hasta el directorio del proyecto y utilice el siguiente comando:

```shell
pnpm install
```

### 3. Ejecutar los Paquetes

Para ejecutar un paquete específico sin tener que ir a su directorio, puedes usar el comando `--filter`. Aquí hay un ejemplo de cómo filtrar y ejecutar paquetes con PNPM:

```shell
pnpm --filter <packageName> dev 
```

## Notas Generales
Se pide mejorar la integración de Typescript en el proyecto con todos aquellos cambios que se consideren necesarios para 
mejorar la calidad del mismo y la experiencia de desarrollo.

Además se pueden realizar mejoras en el código de los componentes y en la estructura de los mismos para ampliar su funcionalidad

## Prueba 01

Para ejecutar la prueba 01, utilice el siguiente comando:

```shell
pnpm --filter pruebas-01 dev
```

Esta aplicación tiene un componente App que pinta dos instancias de un componente llamado `Counter`. 
Cada instancia de `Counter` tiene un botón que incrementa su valor en uno. El componente `Counter` recibe un 
prop llamado `value` que se utiliza para establecer el valor del contador.

Se desea optimizar el rendimiento de la aplicación. Para ello, se deben hacer las modificaciones necesarias 
para que no se actualice la instancia del componente `Counter` con el que no se ha interactuado.

Cada componente tiene un console.info que se ejecuta cada vez que se actualiza. El resultado final debe ser 
que solo se muestre por console el info del App y únicamente del Counter con el que se ha interactuado

Se pide documentar el codigo con comentarios explicando el porqué de las modificaciones realizadas.

## Prueba 02

Para ejecutar la prueba 02, utilice el siguiente comando:

```shell
pnpm --filter pruebas-02 dev
```

Esta aplicacion tiene dos implementaciones visuales distintas del mismo componente `Counter` a nivel lógico.

Se pide refactorizar el código para abstraer la lógica de contador en un hook que pueda ser reutilizado por ambos componentes.

Se pide refactorizar el código para abstraer la lógica de contador en un componente con Render Props que pueda ser reutilizado por ambos componentes.

Importante, tras el refactor los componentes Counter y FancyCounter deben no tener ningún tipo de lógica y recibir la implementación por props.

## Prueba 03

Para ejecutar la prueba 03, utilice el siguiente comando:

```shell
pnpm --filter pruebas-03 dev
```

En esta aplicación se muestra una app con una lista cargada de información local que simula refrescarse contra una API
simulada con un setTimeout de 5 segundos.

Existe un bug en el cual, si se borra el primer elemento rápidamente antes de que se refresque la lista, tras refrescarse
la lista se quedará incosistente mostrando el primer elemento que habíamos borrado.

Se pide modificar el código para que tras refrescarse la lista, esta se quede consistente y no muestre elementos que han sido borrados.


