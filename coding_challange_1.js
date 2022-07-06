const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0)
};

poll.registerNewAnswer = function(){
    const input = Number(prompt(`What is your favourite programming language? ${"\n"} ${this.options.join("\n")} ${"\n"} (Write option number)`));
    if(input < 4){
        this.answers[input]++;
    }
    let [a,b,c,d] = poll.answers;
    console.log(a,b,c,d);
    const str = `Poll results are ${a,b,c,d}`;
    this.displayResults(str);
};

document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults = function(result = poll.answers){
    console.log(result);
}