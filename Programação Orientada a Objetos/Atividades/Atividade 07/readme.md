# Exercício 07
## Questão 1
`Enunciado`: As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Reescreva as classes usando herança para que os atributos duplicados não sejam mais necessários.
`Resposta`: 

```ts
class Veiculo {
	placa: String;
	ano: number;
}

class Carro extends Veiculo {
	modelo: String;
}

class CarroEletrico extends Carro {
	autonomiaBateria: number;
}
```
## Questão 2
`Enunciado`: Crie uma classe Calculadora com:
	a. Dois tributos privados chamados representando dois operandos;
	b. Crie um construtor que inicializa os atributos;
	c. Crie um método que retorna a soma dos dois atributos;
	d. Teste a classe.
`Resposta`:  [Link para o arquivo Calculadora.ts](), [Link para o arquivo com os testes da classe]()
## Questão 3
`Enunciado`:Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora do exercício passado e:
	a. Implemente um método chamado exponenciar que retorne o primeiro
	operando elevado ao segundo;
	b. Teste a classe;
	c. Foi necessária alguma modificação em Calculadora para o acesso aos
	atributos?
`Resposta`: [Link para o arquivo CalculadoraCientifica.ts](), [Link para o arquivo com os testes da classe]()
Resposta letra c: Sim, foi necessario alterar os modificadores de acesso de `private` (que só deixa acessar de dentro da classe) para `protected` (que só deixa acessar de dentro da classe e de subclasse).
## Questão 4
`Enunciado`:
`Resposta`: 

## Questão 5
`Enunciado`:
`Resposta`: 