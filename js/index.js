Vue.createApp({
    data(){
        return {
            word: null,
            output1: null,
            output2: null,
            output3: null,
            output4: null,
            output5: null,
            output6: null,
        }
    }, methods: {
        showWord() {
            if (this.word == null) {
                alert("Please enter a word before clicking show")
                //Kan kun give denne alert hvis der ikke er skrevet et ord førhen
            }
            else {
                this.output1 = this.word
                this.output2 = this.word.toLowerCase()
                this.output3 = this.word.toUpperCase()
                this.output4 = this.word.charAt(0).toUpperCase() + this.word.slice(1)
                this.output5 = this.word.slice(0, -1) + this.word.charAt(this.word.length-1).toUpperCase()
                this.output6 = this.word.split("").reverse().join("")
            }
        }
    }
}).mount ("#app")