// Criar um sistema que irá gerenciar as consultas de uma clínica médica.

// Como requisitos, nós teremos as seguintes funcionalidades:
// Adicionar uma nova consulta
// Listar todas as consultas
// Atualizar uma consulta existente
// Cancelar uma consulta

const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];

while (true) {

    console.log(`
1. Adicionar nova consulta;
2. Listar todas as consultas;
3. Atualizar uma consulta existente;
4. Cancelar uma consulta;
0. Sair
            `);

            let opcao = prompt("Escolha uma opção: ");

            switch (opcao) {
                case "1":
                    let consulta = {};

                    consulta.paciente = prompt("Nome do paciente: ");
                    consulta.medico = prompt("Nome do médico(a): ");
                    consulta.data = prompt("Data da consulta: ");
                    consulta.hora = prompt("Horário da consulta: ");
                    
                    break;

                    case "2":

                        break;

                            case "3": 

                                break;

                                    case "4":

                                        break;

                                            case "5":

                                                break;
            
                default:
                    break;
            }

        }