# Duckling Shell
Este projeto trata de uma aplicação em ambiente de console que simula um Prompt de Comando Windows feito em C++ e tem como propósito melhorar minha familiaridade com a linguagem.
## Comandos projetados
os comandos iniciais do projeto são:
- `help`: mostra o guia de uso da aplicação e os possíveis comandos
- `dir`: lista os diretórios do diretório atual
- `cd`: navega entres o diretórios
- `mkdir`: cria um novo diretório no diretório atual
- `rmdir`: apaga o diretório do caminho passado
- `exit`: fecha a aplicação
## Estrutura de pastas

```
source-code/
│
├── src/                   # Diretório para arquivos-fonte
│   ├── main.cpp           # Arquivo principal com a função `main`
│   └── minhas_funcoes.cpp # Arquivo com a implementação das funções
│
├── include/               # Diretório para arquivos de cabeçalho
│   └── minhas_funcoes.h   # Cabeçalho que declara as funções
│
├── build/                 # Diretório para arquivos compilados
│
└── Makefile               # Definições de build do projeto
```
