@echo off
echo Iniciando compilacao...

:: Definir diretórios e arquivos
set INCLUDE_DIR=include
set SRC_DIR=src
set BUILD_DIR=build
set OUTPUT=%BUILD_DIR%\main.exe

:: Compilar projeto.
gcc  %SRC_DIR%\main.c %SRC_DIR%\book.c %SRC_DIR%\library.c -I %INCLUDE_DIR% -o %OUTPUT%

%OUTPUT%/main.exe