import {readFileSync, writeFile} from 'fs'
import { stringToArray } from './vector_utils.js'

export function getVectorByArchive(archiveName){
    const fileIn = readFileSync(archiveName, 'utf-8')
    const vectorFile = stringToArray(fileIn)

    return vectorFile
}