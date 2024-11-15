#include <iostream>
#include <filesystem>
#include <string.h>
using namespace std;

filesystem::path ShowCuDir(){
    filesystem::path current_path = filesystem::current_path();
    return current_path;
}