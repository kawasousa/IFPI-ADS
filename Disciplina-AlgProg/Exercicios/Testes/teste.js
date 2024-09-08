import { keyIn } from "readline-sync";
import { cursorTo } from "readline";

// Função para escrever em uma linha específica
function write(line, collumn, text) {
    cursorTo(process.stdout, collumn, line);
    process.stdout.write(text);
}

function main(){
    console.clear()
    let line = 1
    let collumn = 1
    
    while(true){
        console.clear()
        write(line, collumn, '>')
        
        let selectedKey = keyIn("", {hideEchoBack: true, mask: ""})

        if(selectedKey == 'w'){
            line -= 1
        }
        else if(selectedKey == 's'){
            line += 1
        }
        else if(selectedKey == 'l'){
        }
        line = line <= 0 ? 0 : line

        if(selectedKey === String.fromCharCode(32)){
            break
        }
    }

    console.log('----\nFim.')
}
main()