#include <stdio.h>

//ºF para ºC

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;   
}

int main(){
    //Entrada
    float temperatureInF = GetNumber("Digite o valor da temperatura em graus Fahrenheit: ");

    //Processamento
    float temperatureInC = (5 * temperatureInF - 160) / 9;

    //Saida
    printf("O equivalente de %.1f graus Fahrenheit e %.1f graus Celcius.", temperatureInF, temperatureInC);

    return 0;
}