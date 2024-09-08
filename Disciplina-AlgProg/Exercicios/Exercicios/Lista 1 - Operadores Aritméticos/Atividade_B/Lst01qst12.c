#include <stdio.h>

// Aumento de 25% no salário

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int salary = GetNumber("Digite o salario do trabalhador: ");

    //Processamento
    float newSalary = salary * 1.25;

    //Saída
    printf("O novo salario do trabalhador e %.2fR$!", newSalary);

    return 0;
}