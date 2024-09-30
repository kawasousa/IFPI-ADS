#include <stdio.h>
#include <math.h>

//Area do quadrado

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float side = GetNumber("Digite o lado do quadrado (em cm): ");

    //Processamento
    float area = pow(side, 2);

    //Saida
    printf("A area do seu quadrado e de %.2f", area);

    return 0;
}