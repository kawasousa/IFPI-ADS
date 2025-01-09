#include <iostream>
#include <vector>
#include <string>
using namespace std;

#ifndef UTILS_H
#define UTILS_H

string GetInput();
vector<string> GetTokens(string input, char divider);
void ShowItens(vector<string> vector);

#endif