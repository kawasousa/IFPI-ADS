# Atividade Extra - Classes e Abstrações

## Questão 1 - Diferença entre Classe e Objeto
### Resposta:
Classes podem ser entendidas como modelos/moldes para a construção de um objeto, que define o que a instância de um objeto deve ter, a partir desse molde é que serão construídos os objetos. Todo objeto tem as características e comportamentos que foram definidas na classe a qual ele pertence.

Um objeto é a concretização de uma classe. A partir dessa concretização, os valores dos atributos, bem como os comportamentos, descritos na classe podem ser obtidos ou manipulados.
### Exemplo:
Uma Classe `Gato` define que características um gato qualquer deve ter, como `nome`, `idade` ou `peso`, características são atributos que, a nível de classe, não têm valor. A classe Gato também tem comportamentos que todo gato tem, como `Miar`, `Correr` ou `Dormir`.

O objeto `Akira` é uma instância da classe Gato, ou seja, tem os atributos e métodos que todo gato tem, mas com valores definidos. Seu atributo `nome` tem o valor "Akira", seu atributo `idade` tem valor. Seu comportamento `Miar`, no entanto, faz o mesmo que toda instância da Classe Gato faz (há também a possibilidade de sobreposição de métodos, mas não levemos isso em consideração _ainda_).

Um outro objeto também da classe Gato seria a instância `Amelie`, que pode ou não ter atributos iguais ao do objeto `Akira`, mas as alterações feitas no Gato Amelie não mudarão as características do objeto Akira.
### Obs:
Alterações feitas na Classe `mudarão as características dos objetos` construídos a partir dessa classe, mas mudanças no Objeto/Instância `apenas alteram os atributos e métodos do objeto`.
## Questão 2 - Conceitue `Atributos` e `Métodos`
### Atributos
São características básicas de uma classe, valores que podem ser lidos e/ou manipulados. São basicamente `variáveis` comuns em todos os objetos moldados a partir dessa classe e têm valor atribuído ou mudado durante a manipulação de um objeto.

A manipulação de um atributo a partir de um objeto apenas altera a característica desse objeto.
Como exemplo, pode-se tomar uma Classe `Bolo` e os objetos `Bolo de Cenoura` e `Bolo de Limão`. A `quantidade de pedaços` de bolo é um atributo que todos os bolos têm, mas retirar um pedaço do Bolo de Cenoura, isto é, `alterar o atributo "quantidade de pedaços"`, _apenas_ muda essa característica no  Bolo de Cenoura, mantendo o valor de `quantidade de pedaços` do Bolo de Limão.
### Métodos
São comportamentos comuns e acessíveis a todos os objetos moldados a partir dessa classe. São `funções` que qualquer instância da classe pode executar.
### Exemplo:
- Pessoa
	- Atributos: idade, nome;
	- Métodos: comer(), falar().
## Questão 3 - Atributos importantes de um sistema
Atributos são definidos como importantes ou não a depender dos requisitos do sistema desenvolvido e da sua utilidade para o software. Isso significa que uma característica de uma mesma abstração (a idade de uma classe Pessoa, por exemplo) pode ser essencial em um sistema (a requisição de uma CNH) ou irrelevante em outro (a requisição de um bilhete de entrada numa festa infantil).
### CPF
#### Importante

#### Não Importante
- Cadastro em rede social
#### Essencial
- Gerenciamento de uma conta bancária
### Histórico de saúde
#### Importante

#### Não Importante
- Sistema de venda de lanches
#### Essencial
