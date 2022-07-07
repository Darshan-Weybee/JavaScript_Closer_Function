const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0)
};

poll.registerNewAnswer = function(){
    const input = Number(prompt(`What is your favourite programming language? ${"\n"} ${this.options.join("\n")} ${"\n"} (Write option number)`));
    if(typeof input == "number" && input < this.answers.length){
        this.answers[input]++;
    }
    // let [a,b,c,d] = poll.answers;
    // console.log(a,b,c,d);
    // const str = `Poll results are ${a,b,c,d}`;
    this.displayResults();
    this.displayResults("string");
};

document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults = function(type = "array"){
    if(type == "array")
         console.log(this.answers);
    else if(type == "string")
         console.log(`Poll results are ${this.answers.join(", ")}`);
}

poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [5, 2, 3]}, "string");

poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, "string");