#include <stdio.h>

//Area do triângulo

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float base = GetNumber("Digite o valor da base do triângulo (em cm): ");
    float height = GetNumber("Digite o valor da altura do triângulo (em cm): ");

    //Processamento
    float area = (base * height) / 2;

    //Saida
    printf("A area do triangulo é de %.2fcm!", area);

    return 0;
}