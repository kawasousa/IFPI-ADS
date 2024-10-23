# Anotações sobre Estrutura de Dados
## O que é estrutura de dados
Dados podem ser arranjados de várias formas. Arranjos de dados lógicos ou matemáticos são chamados de `estrutura de dados`.

Ex: Array, Lista ligada, pilha, fila, Grafo de Árvore, etc.
## Tipos de estruturas de dados
- Primitivos e Não Primitivos
	- Primitivos: int, float, string;
	- Não Primitivos: `Linear` ou `Não Linear`.
- Estáticos e Dinâmicos.
- Persistentes e Efêmeros.
	- [Persistentes](https://www.blip.ai/blog/tecnologia/persistencia-de-dados/): `Parcialmente Persistente`, `Completamente Persistente`, `Persistentemente Confluente`.
## Operações em estruturas de dados
- Iteração
- Busca
- Inserção
- Exclusão
- Mesclagem
- Organização
## Algoritmos de Busca
Um algoritmo de busca é uma sequência de instruções usados para localizar dados específicos em um conjunto.
### Busca linear
Uma busca linear (ou busca sequencial) é um método de pesquisa para encontrar um elemento em uma lista. É uma checagem sequencial em cada elemento da lista até que o elemento procurado seja encontrado ou até que toda a lista seja analisada.

Complexidade: C(n) = n/2
### Busca Binária
Em uma abordagem de busca binária, os elementos são sempre buscados no centro de uma repartição da lista. É necessário ordenar os itens antes de fazer uma busca binária.
## Array
Array é um tipo de estrutura de dados linear e pode ser entendido como uma coleção de mais de um dado onde todos os dados armazenados têm o mesmo tipo.
### Tipos de Array
#### Array unidirecional
Um Array com apenas uma camada de elementos, onde os elementos não são outros conjuntos de dados
```c
//Ex:
int a[5];
```
#### Array Bidirecional
Um Array com duas camadas, onde cada elemento de um conjunto é um Array unidirecional

```c
//Ex:
int a[5][5];
```
### Array Multidirecional
Um Array que agrupa outros Arrays com mais de uma camada.
## Lista Ligada
É uma estrutura de dados linear que agrupa elementos com mais de um tipo de dado c
### Lista de ligação única
quero gozar lentinho pros crias
