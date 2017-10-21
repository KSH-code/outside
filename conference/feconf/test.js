function* Go() {
    idx = 1
    while (idx < 3) {
        yield idx++
    }
}
go = Go()
console.log(go.next().value) // 1
console.log(go.next().value) // 2
console.log(go.next().value)