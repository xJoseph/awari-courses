import readline from 'node:readline';

import { SportCar, UtilCar } from "./class/car";
import { Employee, Client } from "./class/people";
import Promotion from "./class/mail_promotion";
import Reserve from './class/reserve';
// import Localiza from '../src/class/search';

// const localiza = new Localiza();

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function exibirMenu() {
// 	console.log('===== Menu =====');
// 	console.log('1. Cadastrar Cliente');
// 	console.log('2. Cadastrar Funcionário');
// 	console.log('3. Cadastrar Carro');
// 	console.log('4. Criar Reserva');
// 	console.log('5. Cancelar Reserva');
// 	console.log('6. Enviar Promoção');
// 	console.log('0. Sair');
// 	console.log('================');
// }

const employee = new Employee("Joseph", "09754461937", 35, "Rua João Licério", 5541997120635, 20220619, 95000, 0, true);
console.log(employee);
const client = new Client("Chelsia", "09875454931", 25, "Rua Rosa Machio Batistão", 5541997220798, 19951128, 5149873, "image.png", 20300522, "chelsia.souza@gmail.com")
console.log(client);
const promotion = new Promotion("Cupom de desconto de 10% - Localiza", "Utilize o seguinte cupom para receber 10% de desconto na sua próxima compra!", 20231101);
console.log(promotion);

const car1 = new SportCar("AD2AS54F", 2002, "yellow", "HB20", 15230, 299.99, 6, "Teto Solar");
const car2 = new SportCar("AD2AS54F", 2002, "yellow", "HB20", 15230, 299.99, 6, "Teto Solar", "Informações sobre o carro");
const car3 = new UtilCar("AD2AS54F", 2002, "yellow", "HB20", 15230, 299.99, 8, 22, 10);
const car4 = new UtilCar("AD2AS54F", 2002, "yellow", "HB20", 15230, 299.99, 6, 30, 20, "Informações sobre o carro");

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

car1.newImprovement("Melhorar a pintura");
car1.getImprovements()

Promotion.sendEmail(client);

const reserve1 = new Reserve("LCZ", true, 20221020, 20231020, client);