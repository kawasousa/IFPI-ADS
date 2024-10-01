#include <stdio.h>

//total de minutos para dias, horas e minutos

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int totalMinutes = GetNumber("Digite o total de meses: ");

    //Processamento
    int days = totalMinutes / 1440;
    int hours = (totalMinutes - days*1440) / 60;
    int minutes = totalMinutes - days*1440 - hours*60;

    //Saída
    printf("%d minutos equivalem a %d dias, %d horas e %d minutos.", totalMinutes, days, hours, minutes);

    return 0;
}