#include <stdio.h>

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

void ShowOptions(char options[][]){
    for(int index = 0; index < sizeof(options); index++){
        printf("%s\n", options[index]);
    }
}

int main(){
    char options[8][100] = {"Calcular Fatorial","Sequecia de Fibonacci","Sequencia de numeros","Multiplicacao","Exponenciacao","Vetor Aleatorio","Contar Vogais e Consoantes","Sair"};
    // ShowOptions(options);
    // printf("%c", options);

    return 0;
}