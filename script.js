const w = "Hello, my name is aryan";

function typewritter(){
    for (let i = 0; i < w.length; i++) {
                setTimeout(()=> {
                document.querySelector("div").innerHTML+=w[i];
                console.log(w[i]);
        },i*100);
    }
}
typewritter();