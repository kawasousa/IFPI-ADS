#ifndef SHELL_H
#define SHELL_H

#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

class Shell{
private:
    map<string, string> inputs_dict;
    vector<string> inputs_vector;
    
    map<string,string> GetInputDicts(){

    }
    
    vector<string> GetInputVector(){

    }   
public:
    Shell(){

    } 
    
    vector<string> GetInputs(){

    }
    
    void SetInput(string input, string new_input){

    }
    
    void Execute(vector<string> tokens){

    }
    
    void Finish(){

    }
};

#endif