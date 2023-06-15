/* let Nome = prompt('Qual é o seu nome ?');
let Sobrenome = prompt('Qual é o seu sobrenome ?');
let CampodeEstudo = prompt('Qual é o seu campo de estudo ?');
let DatadeNascimento = prompt('Em que ano você nasceu ?');
let idade = (2023 - DatadeNascimento);
console.log ('Olá' ,Nome, Sobrenome,', interesante a área de estudo de' ,CampodeEstudo,', mas a sua idade é', idade, )

let n1 = prompt('Digite um número')
let n2 = prompt('Digite outro número')

n1 = parseInt(n1)
n2 = parseInt(n2)

console.log (n1+n2, n1-n2, n1*n2, n1/n2) */

/* Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso) */

let v1 = prompt ('Qual é o carro?')
let velocidade1 = prompt ('Qual é a velocidade desse carro')
let v2 = prompt ('Qual é o outro carro?')
let velocidade2 = prompt ('Qual é a velocidade desse carro')

let resultado = (velocidade1 > velocidade2) ? ('O carro 1 é mais rápido') : ('O carro 2 mais rápido')
console.log (resultado)

 
let nome = prompt ('Qual o nome')
let ataque = prompt ('Qual a força')
let vida = prompt ('Quantidade de vida')
let defesa = prompt ('Quantidade de defesa')
let escudo = prompt ('Quantidade de escudo')

/* 
e então calcule a quantidade de dano
causado baseado nas seguintes regras:

- If ataque > defesa && escudo = 0,
o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o
dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de
vida do personagem defensor e exibir na tela a quantidade de dano e as informações
atualizadas de ambos os personagens.
*/

