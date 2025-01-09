    #include <iostream> // Entrada e saída de dados.
    #include <string>
    #include <vector>
    #include "utils.h" // Biblioteca de funções utils
    #include "shell.h"
    using namespace std;

    int main(){
        Shell shell = Shell();

        string input;
        vector<string> tokens;
        char divider = ' ';
        string path = "";

        while(true){
            cout << "> ";
            input = GetInput();
            tokens = GetTokens(input, divider);

            shell.Execute(tokens);
        }
        return 0;
    }