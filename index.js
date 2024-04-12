document.addEventListener("DOMContentLoaded",async function (event){
    const data = await trainers()
})



const wrapper =document.getElementById("join");
wrapper.addEventListener("click", function (){
    document.querySelector(".wrapper").style.display ="flex"
})

const delBtn = document.querySelector(".btn-x")
delBtn.addEventListener("click", function (){
   document.querySelector(".wrapper").style.display = "none"
})

const booking = document.getElementById("btn1")
booking.addEventListener("click", function(){
    document.querySelector(".background").style.display = "flex";

})


function trainers (){
const ul = document.getElementById("trainer");

    return fetch("https://server-2-7uxc.onrender.com/gymInfo")
    .then(res => res.json())
    .then(data => data.map(tlist =>{
        let li = document.createElement("li");
        li.innerHTML= `
        <div id="t" class="train">
        <h4  class="train">${tlist.trainerName}--${tlist.description}<h4>
        </div>
        `
        ul.appendChild(li)
    }))
}

function srv (){
    const ul = document.getElementById("service");

    return fetch("https://server-2-7uxc.onrender.com/gymInfo")
    .then(res => res.json())
    .then(data => data.map(srvlist =>{
        let li = document.createElement("li");
        li.innerHTML= `
        <div id="s" class="srv">
        <h4  class="srv">${srvlist.service}<h4>
        </div>
        `
        ul.appendChild(li)
    }))
}

srv()


const form1 =document.getElementById("form1");
form1.addEventListener("submit", event => {
    event.preventDefault()

    const email1 = document.getElementById("email-1").value
    const password = document.getElementById("password").value

    fetch("https://server-2-7uxc.onrender.com/gymInfo" , {
        method : "POST",
        body: JSON.stringify({
            email: email1,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
});

const form2 =document.getElementById("form2");
form2.addEventListener("submit", event => {
    event.preventDefault()

    const email2 = document.getElementById("email-2").value
    const name = document.getElementById("name").value
    const date = document.getElementById("date").value

    fetch("https://server-2-7uxc.onrender.com/gymInfo" , {
        method : "POST",
        body: JSON.stringify({
            memberName: name,
            email: email2,
            date: date
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
});


const cards = document.getElementsByClassName("cards");
Array.from(cards).forEach(card => {
    card.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "grey";
    });
    card.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "goldenrod";
    });

});


