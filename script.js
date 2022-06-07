// script for Exercise
console.log("hello world");

const myApp = new Vue ({
    el: "#root",
    data : {
        emails: [],
    },
    mounted(){
        for(let i=0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                let risultato = result.data.response;
                console.log(risultato);
                this.emails.push(risultato);
            });
        }
    }


});