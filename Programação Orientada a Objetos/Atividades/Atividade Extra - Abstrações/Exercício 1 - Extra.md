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

| Atributo                 |       Não importante       |           Importante            |            Essencial             |
| ------------------------ | :------------------------: | :-----------------------------: | :------------------------------: |
| CPF                      |        Rede social         | Gerador de cupons de descontos  |          Conta bancária          |
| Histórico de saúde       | Sistema de venda de lanche |  Cadastro em concurso público   |          Plano de saúde          |
| Quantidade de seguidores |       Plano de saúde       | Sistema de pesquisa estatística |           Rede social            |
| Habilidade destra        |       Conta bancária       |          Jogo de RPG¹           | Cadastro em competição esportiva |
| Endereço                 |        Rede social         |         Plano de saúde          |       Sistema de entregas        |
| Saldo em conta           |        Rede Social         |         Plano de saúde          |          Conta bancária          |
| Etnia                    |       Conta bancária       | Sistema de pesquisa estatística |   Cadastro em concurso público   |
¹Um sistema de RPG em que a habilidade destra do personagem é importante para o sucesso de uma jogada.
## Questão 4 - `Conta` e `Pessoa` como objetos
### a. Usar Pessoa como atributo de Conta
#### Enunciado:
Seria interessante em um sistema bancário um objeto `conta` possuir uma `pessoa` como um atributo interno representando o titular da conta?
#### Resposta:
Sim, pois as operações feitas na conta estarão sempre vinculadas ao titular dessa conta, que é uma pessoa. Tendo uma `Pessoa` como atributo da `conta`, é possível obter informações do titular da conta, além de rastrear as alterações feitas, como saques e depósitos, e vinculá-las ao usuário.
### b. Usar Contas como atributos de Pessoa
#### Enunciado:
Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
uma conta como atributo? Que elemento da programação estruturada melhor
representaria o conjunto de contas de uma pessoa?
#### Resposta:
Uma pessoa ter várias contas seria, sim, um caso interessante se considerado, por exemplo, que uma pessoa pode ter vários `tipos de conta` dentro do sistema bancário, como `conta corrente` ou `conta poupança`. Esses vários tipos de conta poderiam armazenados em uma lista (um Array, um List ou qualquer outro tipo de conjunto de dados) e, dessa forma, o melhor elemento da [programação estruturada](https://platzi.com.br/blog/programacao-estruturada/) seria a `iteração ou loop`, que percorreria a lista de contas para obter ou manipular as informações.
## Questão 5 - Objetos do Controle Acadêmico

## Questão 6 - Atributos e Métodos de um [Pong](https://www.bbc.com/portuguese/geral-60039831)
O jogo escolhido para abstrair foi o Pong, um dos primeiro jogos eletrônicos criados.
### Atributos
- Jogador 1;
- Jogador 2;
- Pontuação do Jogador 1;
- Pontuação do Jogador 2.
- Vencedor;
### Métodos
- Iniciar partida;
- Pausar partida;
- Computar ponto;
- Encerrar partida.
- Mostrar vencedor.
## Questão 7 - Implementar a classe `Retângulo`
### Enunciado:
Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo. Teste os métodos do
retângulo.
### Código:

## Questão 8 - Classe `Circulo`
### Enunciado:
Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.
### Código:

## Questão 9 - Classe `SituacaoFinanceira`
### Enunciado:
Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a
diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize
os dois atributos e exiba o resultado do método calcularSaldo().
### Código:

## Questão 10 - UML das classes Circulo e SituacaoFinanceira no draw.io
[Definição de Diagrama UML de classes - LucidChart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)
### Enunciado
Represente as classes das questões 8 e 9 no formato UML. Pesquise uma
ferramenta como draw.io ou PlantUML
### Resposta:
![Imagem do UML Circulo](https://github.com/kawasousa/IFPI-ADS/blob/e3a2b0d8c4edf14500d4417d59a187994e9625fd/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/Atividades/Atividade%20Extra%20-%20Abstra%C3%A7%C3%B5es/UML/Circulo.png)

[Link para o draw.io da classe Circulo](https://github.com/kawasousa/IFPI-ADS/blob/e3a2b0d8c4edf14500d4417d59a187994e9625fd/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/Atividades/Atividade%20Extra%20-%20Abstra%C3%A7%C3%B5es/UML/Circulo.drawio)


![Imagem do UML SituacaoFinanceira](https://github.com/kawasousa/IFPI-ADS/blob/e3a2b0d8c4edf14500d4417d59a187994e9625fd/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/Atividades/Atividade%20Extra%20-%20Abstra%C3%A7%C3%B5es/UML/SituacaoFinanceira.png)

[Link para o draw.io da classe SituacaoFinanceira](https://github.com/kawasousa/IFPI-ADS/blob/e3a2b0d8c4edf14500d4417d59a187994e9625fd/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/Atividades/Atividade%20Extra%20-%20Abstra%C3%A7%C3%B5es/UML/SituacaoFinanceira.drawio)
