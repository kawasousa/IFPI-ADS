# Duckling Shell
Este projeto trata de uma aplicação em ambiente de console que simula um Prompt de Comando Windows feita em C++ e tem como propósito melhorar minha familiaridade com a linguagem.
## Comandos projetados
os comandos iniciais do projeto são:
- `help`: mostra o guia de uso da aplicação e os possíveis comandos
- `dir`: lista os diretórios do diretório atual
- `cd`: navega entres o diretórios
- `mkdir`: cria um novo diretório no diretório atual
- `rmdir`: apaga o diretório do caminho passado
- `duckling --config`: abre a interface de configurações do terminal
- `exit`: fecha a aplicação
## Estrutura de pastas
```
source-code/
│
├── src/                   # Diretório para arquivos-fonte
│   ├── main.cpp           # Arquivo principal com a função `main`
│   └── utils.cpp          # Arquivo com a implementação das funções
│
├── include/               # Diretório para arquivos de cabeçalho
│   └── utils.h            # Cabeçalho para funções
│   └── shell.h            # 
│
├── models/                # 
│   └── shell.cpp          #
│
├── build/                 # Diretório para arquivos compilados
│   └── main.exe           # Arquivo compilado do programa
│
└── tokens/                #
│   └── tokens.txt         #
└── build.bat              # Código para compilar o projeto
```
