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
                    this.randomEmail.push(resp.data.response)
                    if (this.randomEmail.length == 11) {
                        this.randomEmail.length = 0
                    }
                })
                
        },
    }
}).mount("#app")

