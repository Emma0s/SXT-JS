function fact() {
    var i;
    var n=0;
    for (i=2;i<5;i++){
        do {
            if (i%3) continue;
            n++;
        }while (!i);
        n++;
    }
    return n;
}
console.log(fact());