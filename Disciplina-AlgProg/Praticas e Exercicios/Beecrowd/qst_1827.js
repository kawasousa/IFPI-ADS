    import { question } from "readline-sync"

    function generateEmptyMatrix(size){
        const matrix = []

        for(let index = 0; index < size; index++){
            matrix.push([])
        }
        
        for(let vector of matrix){
            for(let index = 0; index < size; index++){
                vector.push('0')
            }
        }

        return matrix
    }

    function showMatrix(vector){
        const stringVector = []
        for(let line of vector){
            let str = ''
            for(let number of line){
                str += String(number)
            }
            stringVector.push(str)
        }

        for(let line of stringVector){
            console.log(line)
        }
    }

    function modifyItems(vector, criterion, substitute){
        const length = vector.length
        
        for(let line = 0; line < length; line++){
            for(let column = 0; column < length; column++){
                if(criterion(line, column)){
                    vector[line][column] = substitute
                }
            }
        }
    }

    function changeCenter(vector){
        const center = Math.floor(vector.length / 2)
        vector[center][center] = 4
    }

    function main(){
        try{
            const matrix = generateEmptyMatrix(Number(question()))
            // const matrix = generateEmptyMatrix(lines.shift())
            modifyItems(matrix, (line, column)=>{return line == column}, 2)
            modifyItems(matrix, (line, column)=>{return line+column == matrix.length-1}, 3)
            modifyItems(matrix, (line, column)=>{
                const length = matrix.length
                const minimum = Math.floor(length / 3)
                const maximum = length - minimum
                return (line >= minimum && line < maximum) && (column >= minimum && column < maximum)
            }, 1)
            changeCenter(matrix)
            showMatrix(matrix)
        }
        catch (err){

        }
    }
    main()