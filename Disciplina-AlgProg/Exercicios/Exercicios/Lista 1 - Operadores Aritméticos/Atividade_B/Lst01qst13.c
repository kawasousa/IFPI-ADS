#include <stdio.h>

// 70% de um valor

float GetNumber(char message[]){
    float number;
    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float value = GetNumber("Digite um numero em reais: ");

    //Processamento
    float newValue = value * 0.7;

    //Saída
    printf("70%% de %.2fR$ equivalem a %.2fR$", value, newValue);

    return 0;
}