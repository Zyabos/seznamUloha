/* Úloha e-mail heslo */
function solution(S) {
    let noNumberInWords = S.split(/[0-9]/g)
    let wordWithBigLetters = noNumberInWords.filter(s => s.match(/[A-Z]/g))

    if(wordWithBigLetters.length!==0){
        const wordNumbers = wordWithBigLetters.map(oneWordWithBigLetters => {
            return oneWordWithBigLetters.length
        })
        return Math.max(...wordNumbers)
    }else{
        return -1
    }

}

solution("a0Ba")






