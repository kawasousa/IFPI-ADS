#include <stdio.h>

//um numero de dias total para um numero de semanas e dias

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int totalDays = GetNumber("Digite o numero total de dias: ");

    //Processamento
    int week = totalDays / 7;
    int days = totalDays - (week * 7);

    //Saida
    printf("%d dias equivalem a %d semanas e %d dias.", totalDays, week, days);

    return 0;
}