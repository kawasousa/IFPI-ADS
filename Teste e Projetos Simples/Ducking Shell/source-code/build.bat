@echo off
:: Definir diretórios e arquivos
set INCLUDE_DIR=include
set SRC_DIR=src
set BUILD_DIR=build
set OUTPUT=%BUILD_DIR%\main.exe

:: Transformar o cmd em UTF-8
chcp 65001
cls

:: Compilar código
echo Iniciando compilação...
g++ -I %INCLUDE_DIR% %SRC_DIR%\main.cpp -o %OUTPUT%

:: Verificar se a compilação foi bem-sucedida
if exist %OUTPUT% (
    echo Compilação bem-sucedida!
) else (
    echo Erro na compilação!
)