const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail:[],
        }
    },
    methods: {
        generateEmail(){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then ((resp) => {
                    console.log(resp);
                    // do {
                    //     this.randomEmail.push(resp.data.response)
                    // } while (this.randomEmail.length > 10);

                   if (this.randomEmail.length < 10) {
                    this.randomEmail.push(resp.data.response)
                   }else{
                    this.randomEmail.length = 0
                   }
                   
                })
                
        },
    }
}).mount("#app")

