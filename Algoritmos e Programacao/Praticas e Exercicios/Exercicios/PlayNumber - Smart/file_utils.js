import {readFileSync, writeFile} from 'fs'
import { arrayToString, stringToArray } from './vector_utils.js'

export function getVectorByArchive(archiveName){
    const fileIn = readFileSync(archiveName, 'utf-8')
    const vectorFile = stringToArray(fileIn)

    return vectorFile
}

export function saveVectorInFile(vector, fileName = 'myVector.txt'){
    const fileOut = arrayToString(vector)
    console.log(fileOut)

    writeFile(fileName, fileOut, (error)=>{console.log('')}) //A função de escrever em um arquivo pede uma função de callback
}