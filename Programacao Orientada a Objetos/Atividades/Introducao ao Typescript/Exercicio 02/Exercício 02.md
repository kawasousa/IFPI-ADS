# Exercício 02 - Introdução ao Typescript
## Questão 01
`Enunciado`: Qual a diferença entre tipagem dinâmica e tipagem estática

`Resposta`: Tipagem dinâmica envolve não atribuir o tipo da variável no momento da sua declaração, enquanto tipagem estática trata de explicitar o tipo da variável assim que ela é declarada.
Em linguagens como Python, a tipagem é do tipo dinâmica, o que significa que, a uma mesma variável, podem ser atribuídos valores de diferentes tipos.
```python
# Exemplo de tipagem dinâmica
enzo = 19
enzo = "estudante"
```
Já em linguagens com tipagem estática, como é o caso de C#, o tipo de uma variável deve ser explicitado no momento da declaração.
```csharp
// Exemplo de tipagem estática
int enzoIdade = 19;
string enzoProfissao = "estudante"
// O valor "estudante" não pode ser passado à variável enzoIdade porque "estudante" é uma string e a variavel é do tipo int
```

## Questão 2
`Enunciado`: Qual o principal problema do uso de tipagem dinâmica?

`Resposta`: Uma linguagem que usa tipagem dinâmica deve estar preparada pra atribuir qualquer tipo a uma variável, isso resulta em um consumo maior de memória já que, mesmo que uma variável receba posteriormente um valor inteiro, desde o momento da sua declaração foi separado um espaço na memória que comportasse as necessidades de uma string, por exemplo. Além disso, do ponto de vista do desenvolvedor, o código fica menos legível do que no caso da tipagem estática.
## Questão 3
`Enunciado`: Pesquise um exemplo na internet em que a tipagem dinâmica pode ser problemático.

`Resposta`:  Conversão automática de valores number/int em string gerando valores indesejados ao invés de levantar erros ([Conversa com ChatGPT](https://chatgpt.com/share/678acc31-9fd4-800d-804b-481c01d57224));
## Questão 4
`Enunciado`: Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C, mesmo tendo tipagem estática, possui tipagem fraca.

`Resposta`: No geral, C tem a tipagem forte, mas tem também algumas facilitações de linguagens de tipagem fraca, como transformar um int em float automaticamente quando se faz a soma de duas variáveis desses tipos

```c
int variavelInteiro = 1;
float variavelFloat = 1.5;
float soma = variavelInteiro + variavelFloat;

// A variavel soma vai assumir o valor 2.5 porque variavelInteiro foi tratado como 1.0 (um valor float)
```
## Questão 5
`Enunciado`: Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo number aceitar tanto inteiros como ponto flutuante?

`Resposta`: Não, pois tipagem fraca envolve, entre outras coisas, permitir operações entre **tipos diferentes**. Nesse caso, as operações são todas feitas em relação a apenas um tipo (number), já que não há tipos como int ou float.
## Questão 6
`Enunciado`: Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas
separadamente e “interpoladas” na string:
Ely
My payment time is 120.56
and
my preffered language is TypeScript
`Resposta`: 

```typescript
const name: string = "Ely";
const payment: number = 120.56;
const prefferedLanguage: string = "TypeScript";

console.log(`
${name}
My payment time is ${payment}
and
my preffered language is ${prefferedLanguage}
`)
```
## Questão 7
`Enunciado`: Pesquise e configure o seu arquivo de configuração do TypeScript com as opções abaixo. Faça testes com as mudanças e perceba a diferença após a configuração.

`Resposta`: [Link para o arquivo tsconfig.json](https://github.com/kawasousa/IFPI-ADS/blob/29ff4d1f06c609182695df1416db5d38368f6a6f/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/Atividades/Introducao%20ao%20Typescript/Exercicio%2002/tsconfig.json), [Link para o arquivo exercicio.ts](https://github.com/kawasousa/IFPI-ADS/blob/29ff4d1f06c609182695df1416db5d38368f6a6f/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/Atividades/Introducao%20ao%20Typescript/Exercicio%2002/exercicio02.ts).
