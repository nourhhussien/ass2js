var quoteList=[];

var html=""




function quote() {
 quote1={
    quote:"It's not what happens to you, but how you react to it that matters.",
    name:"--Epictetus"
 } 
 
 quote2={

    quote:"Do not take life too seriously. You will not get out alive.",
    name:"--Elbert Hubbard",
 }

 quote3={

    quote:"Resentment is like drinking poison and waiting for your enemies to die.",
    name:"--Nelson Mandela",
 }
 quote4={

    quote:"You miss 100% of the shots you don't take",
    name:"--Wayne Gretzy",
 }

 quote5={

    quote:"Be yourself; everyone else is already taken",
    name:"-- Oscar Wilde",
 }

 quote6={

    quote:"A room without books is like a body without a soul.",
    name:"Marcus Tullius Cicero",
 }

 quoteList=[quote1,quote2,quote3,quote4,quote5,quote6]

 quotList()
 
}

function quotList() {
  
   var randomIndex= Math.floor(Math.random() * quoteList.length) ; 

   var randomQuote=quoteList[randomIndex];

   

   html+=`
    
     <q class="py-3 fs-3">${randomQuote.quote}</q>
     <p class="m-4 fs-4">${randomQuote.name}</p>
    
    `

    document.getElementById("data").innerHTML=html;

     html=""
    
    }
 


