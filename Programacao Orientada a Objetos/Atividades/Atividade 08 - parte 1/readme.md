# Exercício 08 - parte 1
## Questão 01
`Enunciado`: Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com códigos seus ou pesquisados na internet.

`Resposta`:
- Desconsiderar operação
```ts
/* Desconsiderando a operação de adicionar amigo na classe Profile */
public addFriend(friend: Profile) {
	if (!this._friends.includes(friend)) {
		this._friends.push(friend);
	}
}
```
- Exibir mensagem de erro
```ts
/* Exibindo mensagem de erro se o perfil já estiver na lista de amigos */
public addFriend(friend: Profile) {
	if (!this._friends.includes(friend)) {
		this._friends.push(friend);
	}
	else{
		console.log("Esse perfil já está na sua lista de amigos!")
	}
}
```
- Retornar código de erro
```ts
/* Retornar código de erro */
public addFriend(friend: Profile): boolean {
	if (!this._friends.includes(friend)) {
		this._friends.push(friend);
		return true;
	}
	else{
		return false;
	}
}
```

## Questão 02
`Enunciado:` Explique por que cada um dos 3 métodos acima possui limitações de uso.

`Resposta`: 
- Desconsiderar operação: Não existe certeza de que o método executou a operação da qual era responsável;
- Exibir mensagem de erro: Prende o método a um modo de exibição da mensagem, como o console (além de delegar mais de uma operação ao método);
- Retornar código de erro: Faz ser necessário testar o método pra saber o resultado e, no caso do método já retornar algo, confunde o retorno com a mensagem de erro.
## Questão 03
`Enunciado:`Com o código repassado, crie duas contas e teste o método transferir de modo que a conta a ser debitada não possua saldo suficiente. Explique o que ocorreu.

`Resposta`: O código levanta um Erro.
[Link para o código]()

## Questão 04
`Enunciado:` Instancie uma classe App e, caso necessário, crie duas contas. Acesse a opção de transferir com valor alto o suficiente para lançar uma exceção/erro. Verifique que o lançamento da exceção foi “propagado” para o método conta.transferir(),
banco.transferir() e App.menu()? Como você avalia a confiabilidade dessa
implementação.

`Resposta`: Como o Error foi propagado pela aplicação, qualquer uma dos métodos onde esse Error foi propagado pode tratá-lo, fazendo com que a camada de interface possa tratá-lo da maneira correta.
## Questão 05
`Enunciado:` Crie um método chamado validaValor(valor) na que lance um erro caso o valor repassado seja menor ou igual a zero ou em formato inválido. Chame o método no construtor da classe conta para validar o saldo inicial. Chame o método também nos métodos sacar e depositar. Reexecute a classe App e chame as opções de menu que aceitam valores referentes a saldo, débito, crédito e transferir. Avalie o tratamento do erro.

`Resposta`: