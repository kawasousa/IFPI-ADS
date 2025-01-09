executar o arquivo `build.bat` para compilar

## Função de acessar o tokens.txt
o que eu quero é abrir o arquivo `.txt` e me deparar com o seguinte texto:

```txt
sair:exit
ajuda:help
navegar:cd
```

a primeira divisão vai ser nas quebras de linha (`"\n"`). Assim, eu terei um array de strings do tipo `entrada:função`. A segunda divisão é quebrar essas strings no divisor `:`.
Com a segunda divisão, eu terei outro array de strings em que o primeiro item (`entrada`) vai representar a entrada aceita pelo terminal e o segundo item (`função`) vai representar o que será executado quando a entrada for passada.
O valor de entrada pode ser mudado.

vai ter um dicionário relacionando as entradas às funções
dessa forma, quando for passada a entrada "sair" pelo usuário, a verificação no dicionário vai apontar que "sair" é chave para a função exit, e é essa função que será executada.
```duckling-shell
> sair
```

```cpp
#include <iostream>
#include <map>
#include <functional>
using namespace std;

void exit(){
	exit(0);
}

void help(){
	cout << "AAAAAAAAA << endl;
}

map<string,function<void()>> mapa_funcoes;
mapa_funcoes["sair"] = exit;
mapa_funcoes["ajuda"] = help;

# sem considerar verificações
void execute(string input){
	mapa_funcoes[input]();
}

```

nesse sentido, todas as funcoes devem ter o mesmo retorn e o mesmo paramentro. Uma saída para o retorno é que dentro da funcao uma variável global seja alterada.