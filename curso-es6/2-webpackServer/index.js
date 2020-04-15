//import { soma } from './exemplo1';
import { soma, sub } from './importExport/exemplo2';
import somaExemplo3 from './importExport/exemplo3';
import somaOutro, { sub as subOutro } from './importExport/exemplo4';
import * as funcoes from './importExport/exemplo5';

export function importExport() {
    console.log(soma(2, 2));
    console.log(sub(8, 2));
    console.log(somaExemplo3(8, 8));
    console.log(somaOutro(10, 10));
    console.log(subOutro(100, 50));
    console.log(funcoes.mult5(100, 10));
}

import ClasseUsuario, { idade as IdadeUsuario } from './functions';

export function desafio() {
    ClasseUsuario.info();
    alert(IdadeUsuario);
}