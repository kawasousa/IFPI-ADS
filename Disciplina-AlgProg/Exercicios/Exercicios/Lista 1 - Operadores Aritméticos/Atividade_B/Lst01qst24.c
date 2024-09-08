#include <stdio.h>

//m para cm

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float meter = GetNumber("Digite o valor em metros: ");

    //Processamento
    float centimeter = meter * 100;

    //Saida
    printf("O equivalente de %.1f metros e %.1f centimetros.", meter, centimeter);

    return 0;
}