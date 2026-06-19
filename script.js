const screen = document.getElementById("screen");

let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        document.getElementById("birthdayMusic").play();
        musicStarted = true;
    }
}

let selectedFlower = "";

const flowers = {
Tulip:"images/tulip.jpg",
Rose:"images/rose.jpg",
Mogra:"images/mogra.jpg",
Lily:"images/lily.jpg",
};

const foods = {
Samosa:"images/samosa.jpg",
Panipuri:"images/panipuri.jpg",
Misal:"images/misal.jpg",
Vadapav:"images/vadapav.jpg"
};

const pets = {
Cat:"images/cat.jpeg",
Dog:"images/dog.jpg",
Elephant:"images/elephant.jpg",
Pig:"images/pig.jpg"
};

// Unlock date: 30 July 2026, 11:59 PM
const unlockDate = new Date("2026-07-31T11:00:00");

if (new Date() < unlockDate) {

    const remaining = unlockDate - new Date();
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));

    screen.innerHTML = `
        <div class="card">
            <h1>🎁 Surprise Locked</h1>

            <img src="images/payment.jpg"
                 alt="Pay ₹1"
                 style="width:250px; border-radius:10px; margin:15px 0;">

            <p>
    Hey Sakshi ❤️<br><br>
    Start from 17/06/2026 <br><br>
   lock due to no payment on 19/06/2026 <br><br>
   </p>

<br><br>
</p>


            // <h2>${days} days left ⏳</h2>
        </div>
    `;

} else {
    start();
}


function start(){

    

screen.innerHTML=`

<div class="card">
<h1>🎂 Hey Sakshi ❤️</h1>

<p>I heard it's your birthday today...</p>

<button class="btn yes" onclick="yesPage()">YES 🎉</button>

<button class="btn no" onclick="noPage()">NO 🤔</button>

</div>

`;
}

function noPage(){

screen.innerHTML=`

<div class="card">
<h1>😏</h1>

<p>You are lying! I know it's your birthday.</p>

<button class="btn yes" onclick="start()">
Answer Again
</button>

</div>

`;
}

function yesPage(){

screen.innerHTML=`

<div class="card">
<h1>🎉</h1>

<p>Let's walk through a few questions...</p>

<button class="btn yes" onclick="flowerQuestion()">
Start
</button>

</div>

`;
}

function flowerQuestion(){

screen.innerHTML=`

<div class="card">

<h1>🌷 Favorite Flower?</h1>

<button class="option"
onclick="showFlower('Tulip')">Tulip</button>

<button class="option"
onclick="showFlower('Rose')">Rose</button>

<button class="option"
onclick="showFlower('Mogra')">Mogra</button>

<button class="option"
onclick="showFlower('Lily')">Lily</button>

</div>

`;
}

function showFlower(name){

selectedFlower=name;

screen.innerHTML=`

<div class="card">

<img class="preview"
src="${flowers[name]}">

<h1>${name}</h1>

<button class="btn yes"
onclick="foodQuestion()">

Next

</button>

</div>

`;
}

function foodQuestion(){

screen.innerHTML=`

<div class="card">

<h1>🍔 Favorite Street Food?</h1>

<button class="option"
onclick="showFood('Samosa')">Samosa</button>

<button class="option"
onclick="showFood('Panipuri')">Panipuri</button>

<button class="option"
onclick="showFood('Misal')">Misal</button>

<button class="option"
onclick="showFood('Vadapav')">Vadapav</button>

</div>

`;
}

function showFood(food){

screen.innerHTML=`

<div class="card">

<img class="preview"
src="${foods[food]}">

<h1>${food}</h1>

<button class="btn yes"
onclick="petQuestion()">

Next

</button>

</div>

`;
}

function petQuestion(){

screen.innerHTML=`

<div class="card">

<h1>🐾 Favorite Pet?</h1>

<button class="option"
onclick="showPet('Cat')">Cat</button>

<button class="option"
onclick="showPet('Dog')">Dog</button>

<button class="option"
onclick="showPet('Elephant')">Elephant</button>

<button class="option"
onclick="showPet('Pig')">Pig</button>

</div>

`;
}

function showPet(pet){

screen.innerHTML=`

<div class="card">

<img class="preview"
src="${pets[pet]}">

<h1>${pet}</h1>

<button class="btn yes"
onclick="personQuestion()">

Next

</button>

</div>

`;
}

function personQuestion(){

screen.innerHTML=`

<div class="card">

<h1>❤️ Whom do you like most?</h1>

<div class="people-grid">

    <div class="person-card" onclick="chosen('Rushikesh')">
        <img src="images/rushikesh.jpeg">
        <h3>Rushikesh ❤️</h3>
    </div>

    <div class="person-card" onclick="chosen('Karan')">
        <img src="images/karan.jpeg">
        <h3>Karan</h3>
    </div>

    <div class="person-card" onclick="chosen('Divya')">
        <img src="images/divya.jpeg">
        <h3>Divya</h3>
    </div>

    <div class="person-card" onclick="chosen('Sham')">
        <img src="images/sham.jpeg">
        <h3>Sham</h3>
    </div>

</div>

</div>

`;
}

function chosen(name){

if(name !== "Rushikesh"){

alert(
"That's not fair 😭. You're supposed to click Rushikesh!"
);

return;
}

finalPage();
}

function finalPage(){
    

screen.innerHTML=`

<div class="card">

<h1 class="final-title">

🎂 Happy Birthday Sakshi ❤️

</h1>

<p>

May your smile stay bright,
your dreams come true,
and your life be filled with
love, happiness and success.

🌸 Your favorite flower:
${selectedFlower}

</p>

<div class="gallery">

<img src="images/sakshi1.jpeg">
<img src="images/sakshi2.jpeg">
<img src="images/sakshi3.jpeg">
<img src="images/sakshi4.jpeg">
<img src="images/sakshi5.jpeg">
<img src="images/sakshi6.jpeg">
<img src="images/sakshi7.jpeg">
<img src="images/sakshi8.jpeg">
<img src="images/sakshi9.png">
<img src="images/sakshi10.jpeg">
<img src="images/sakshi11.png">
<img src="images/sakshi12.png">
<img src="images/sakshi13.png">
<img src="images/sakshi14.png">


</div>
    <button class="btn yes" onclick="friendsTour()">
👭 Take a Tour of Your Friends
</button>

</div>

`;
}

function friendsTour(){

screen.innerHTML = `

<div class="card">

<h1>💖 Sakshi's Amazing Friends 💖</h1>

<p>
Every beautiful memory becomes special because of the people who are part of it.
</p>

<div class="friends-scroll">

<div class="friend">
<img src="images/friend1.jpg">
<h3>💖</h3>
</div>

<div class="friend">
<img src="images/friend2.jpg">
<h3>💖💖</h3>
</div>

<div class="friend">
<img src="images/friend3.jpg">
<h3>💖💖💖</h3>
</div>

<div class="friend">
<img src="images/friend4.jpg">
<h3>💖💖💖💖</h3>
</div>

<div class="friend">
<img src="images/friend5.png">
<h3>💖</h3>
</div>

<div class="friend">
<img src="images/friend6.png">
<h3>💖💖</h3>
</div>

<div class="friend">
<img src="images/friend7.jpg">
<h3>💖💖💖</h3>
</div>

<div class="friend">
<img src="images/friend8.png">
<h3>💖💖💖💖</h3>
</div>

<div class="friend">
<img src="images/friend9.png">
<h3>💖</h3>
</div>

<div class="friend">
<img src="images/friend10.png">
<h3>💖💖</h3>
</div>

<div class="friend">
<img src="images/friend11.png">
<h3>💖💖💖</h3>
</div>

<div class="friend">
<img src="images/friend12.png">
<h3>💖💖💖💖</h3>
</div>


</div>

<button class="btn yes" onclick="memoryMessage()">
✨ One Last Surprise
</button>

</div>


`;

}

function memoryMessage(){

screen.innerHTML = `

<div class="card">

<h1>💝 Dear Sakshi</h1>

<p>

May every smile,
every memory,
every friendship,
and every dream of yours
grow more beautiful with time.

Thank you for being such an amazing person.

✨ Happy Birthday Once Again ✨

❤️ From Rushikesh ❤️

</p>

</div>

`;

}

document.addEventListener(
    "click",
    function () {
        startMusic();
    },
    { once: true }
);
