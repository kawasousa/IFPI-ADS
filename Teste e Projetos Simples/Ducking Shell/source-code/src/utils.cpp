#include <iostream>
#include <string>
#include <vector>
using namespace std;

string GetInput(){
    string input;
    getline(cin, input);

    return input;
}

vector<string> GetTokens(string input, char divider){
    vector<string> vector; // Vetor de strings com os tokens.
    string token; // 
    string d(1,divider); // Divisor em formato de string.

    for(int i = 0; i < input.length(); i++){
        string c(1,input[i]); // Caractere atual em formato de string.

        if(c == d){
            vector.push_back(token);
            token.clear();
        }
        else{
            token.append(c);
        }
    }
    vector.push_back(token);

    return vector;
}
