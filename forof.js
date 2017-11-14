function forOf(iterable) {
    let iterator = iterable[Symbol.iterator]();
    while (true){
        let v = iterator.next();
        console.log(v.value);
        if(v.done)
            break;
    }
}

