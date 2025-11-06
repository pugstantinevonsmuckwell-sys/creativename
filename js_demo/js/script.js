function askQuestion () {
var p = prompt ('what is the meaning of life?')

if (p != null ) {

    document.getElementById('question').innerHTML = 'eh. ' + p + " does not seem correct"
}

}