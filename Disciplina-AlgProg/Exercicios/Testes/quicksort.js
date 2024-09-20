function quicksort(list){
    if(list.length < 2){ return list}

    let pivot = list[0];
    let leftList = [1,2];
    let rightList = [2,3];

    // for(let number of list){
    //     if(number < pivot){
    //         leftList.push(number)
    //     }
    //     else{
    //         rightList.push(number)
    //     }
    // }

    return quicksort(leftList).concat([pivot]).concat(quicksort(rightList))
}

function main(){
    let list = [10,2,3,50,3];
    list = quicksort(list);
    console.log(list);
}
main();