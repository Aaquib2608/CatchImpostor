console.log("hiii");

let nameArray = [];
let currentPlayer = 0;
let playerWords = [];

// Example word pairs (replace with 500 pairs later)
const wordPairs = [
    ["Car", "Truck"],
    ["Cat", "Lion"],
    ["Doctor", "Surgeon"],
    ["Pizza", "Sandwich"],
    ["Ocean", "Lake"],
    ["Book", "Journal"],
    ["Keyboard", "Piano"],
    ["Pen", "Pencil"],
    ["Coffee", "Espresso"],
    ["Shoe", "Slipper"],
    ["Chair", "Stool"],
    ["Banana", "Plantain"],
    ["Apple", "Pear"],
    ["Spoon", "Ladle"],
    ["Hat", "Cap"],
    ["Dog", "Wolf"],
    ["Money", "Gold"],
    ["River", "Stream"],
    ["Mountain", "Volcano"],
    ["Clock", "Watch"],
    ["Butter", "Margarine"],
    ["Milk", "Cream"],
    ["Sugar", "Salt"],
    ["Knife", "Sword"],
    ["Cloud", "Fog"],
    ["Rain", "Hail"],
    ["Pants", "Shorts"],
    ["T-shirt", "Vest"],
    ["Window", "Mirror"],
    ["Door", "Gate"],
    ["Hammer", "Mallet"],
    ["Nail", "Screw"],
    ["Flower", "Weed"],
    ["Grass", "Moss"],
    ["Tree", "Bush"],
    ["Guitar", "Ukelele"],
    ["Drum", "Cymbals"],
    ["Stadium", "Arena"],
    ["Team", "Squad"],
    ["Passport", "Visa"],
    ["Wallet", "Purse"],
    ["Coat", "Jacket"],
    ["Gloves", "Mittens"],
    ["Television", "Monitor"],
    ["Radio", "Speaker"],
    ["Phone", "Tablet"],
    ["Map", "Compass"],
    ["Candle", "Torch"],
    ["Fire", "Smoke"],
    ["Desert", "Tundra"],
    ["Island", "Peninsula"],
    ["Tent", "Cabin"],
    ["Pillow", "Cushion"],
    ["Blanket", "Quilt"],
    ["Pasta", "Noodles"],
    ["Rice", "Quinoa"],
    ["Chicken", "Duck"],
    ["Beef", "Steak"],
    ["Cheese", "Yogurt"],
    ["Bread", "Toast"],
    ["Soup", "Broth"],
    ["Salad", "Coleslaw"],
    ["Hotel", "Motel"],
    ["Apartment", "Condo"],
    ["Village", "Town"],
    ["City", "Metropolis"],
    ["School", "University"],
    ["Teacher", "Tutor"],
    ["Student", "Pupil"],
    ["Desk", "Table"],
    ["Shelf", "Drawer"],
    ["Broom", "Mop"],
    ["Soap", "Shampoo"],
    ["Towel", "Washcloth"],
    ["Brush", "Comb"],
    ["Toothpaste", "Mouthwash"],
    ["Movie", "Play"],
    ["Song", "Poem"],
    ["Painting", "Sculpture"],
    ["Museum", "Gallery"],
    ["Bridge", "Tunnel"],
    ["Highway", "Freeway"],
    ["Train", "Subway"],
    ["Bus", "Coach"],
    ["Pilot", "Captain"],
    ["Sailor", "Mariner"],
    ["Beach", "Coast"],
    ["Sand", "Gravel"],
    ["Lemon", "Lime"],
    ["Orange", "Clementine"],
    ["Grape", "Raisin"],
    ["Cookie", "Cracker"],
    ["Cake", "Pie"],
    ["Donut", "Bagel"],
    ["Wine", "Cider"],
    ["Beer", "Ale"],
    ["Whiskey", "Brandy"],
    ["Cup", "Mug"],
    ["Plate", "Bowl"],
    ["Fork", "Tongs"],
    ["Scissors", "Shears"],
    ["Rope", "String"],
    ["Chain", "Cable"],
    ["Basket", "Crate"],
    ["Bottle", "Flask"],
    ["Glove", "Gauntlet"],
    ["Helmet", "Visor"],
    ["Armor", "Shield"],
    ["Castle", "Fortress"],
    ["Tower", "Spire"],
    ["Knight", "Squire"],
    ["King", "Emperor"],
    ["Queen", "Princess"],
    ["Crown", "Tiara"],
    ["Jewel", "Gem"],
    ["Diamond", "Ruby"],
    ["Emerald", "Sapphire"],
    ["Ring", "Bracelet"],
    ["Necklace", "Pendant"],
    ["Mask", "Veil"],
    ["Goggles", "Spectacles"],
    ["Pouch", "Sack"],
    ["Can", "Jar"],
    ["Bucket", "Pail"],
    ["Faucet", "Hose"],
    ["Shower", "Bathtub"],
    ["Mirror", "Glass"],
    ["Brick", "Stone"],
    ["Cement", "Mortar"],
    ["Wood", "Timber"],
    ["Metal", "Alloy"],
    ["Plastic", "Vinyl"],
    ["Rubber", "Latex"],
    ["Cotton", "Linen"],
    ["Wool", "Silk"],
    ["Trousers", "Leggings"],
    ["Sneakers", "Cleats"],
    ["Boots", "Waders"],
    ["Tie", "Bowtie"],
    ["Suit", "Tuxedo"],
    ["Uniform", "Costume"],
    ["Badge", "Medal"],
    ["Ribbon", "Sash"],
    ["Flag", "Banner"],
    ["Statue", "Bust"],
    ["Fountain", "Well"],
    ["Clock Tower", "Lighthouse"],
    ["Factory", "Mill"],
    ["Warehouse", "Depot"],
    ["Office", "Cubicle"],
    ["Desk Lamp", "Chandelier"],
    ["Circuit", "Chip"],
    ["Wire", "Fiber"],
    ["Battery", "Capacitor"],
    ["Engine", "Motor"],
    ["Wheel", "Axle"],
    ["Tire", "Tread"],
    ["Brake", "Clutch"],
    ["Pedal", "Lever"],
    ["Gears", "Cogs"],
    ["Magnet", "Coil"],
    ["Filter", "Screen"],
    ["Pump", "Siphon"],
    ["Valve", "Spigot"],
    ["Thermostat", "Regulator"],
    ["Fuse", "Breaker"],
    ["Ink", "Toner"],
    ["Paper", "Parchment"],
    ["Envelope", "Stamp"],
    ["Calendar", "Agenda"],
    ["Folder", "Binder"],
    ["Scissors", "Razor"],
    ["Tweezers", "Forceps"],
    ["Microscope", "Telescope"],
    ["Scale", "Balance"],
    ["Needle", "Pin"],
    ["Thread", "Yarn"],
    ["Zipper", "Button"],
    ["Pocket", "Cuff"],
    ["Seam", "Hem"],
    ["Garden", "Orchard"],
    ["Hedge", "Fence"],
    ["Patio", "Deck"],
    ["Chimney", "Flue"],
    ["Attic", "Cellar"],
    ["Stairs", "Ladder"],
    ["Porch", "Balcony"],
    ["Roof", "Shingles"],
    ["Wall", "Partition"],
    ["Ceiling", "Vault"],
    ["Pond", "Swamp"],
    ["Marsh", "Bog"],
    ["Canyon", "Gorge"],
    ["Cliff", "Ledge"],
    ["Cave", "Grotto"],
    ["Glacier", "Iceberg"],
    ["Snow", "Sleet"],
    ["Wind", "Breeze"],
    ["Storm", "Hurricane"],
    ["Tornado", "Cyclone"],["cat", "lion"], ["dog", "wolf"], ["apple", "pear"], ["car", "bike"], ["house", "cottage"],
["book", "notebook"], ["sun", "moon"], ["river", "lake"], ["foot", "hand"], ["king", "prince"],
["pen", "pencil"], ["tree", "bush"], ["coffee", "tea"], ["chair", "stool"], ["shirt", "t-shirt"],
["bread", "bun"], ["train", "tram"], ["mountain", "hill"], ["window", "door"], ["bottle", "jar"],
["fish", "shrimp"], ["eagle", "hawk"], ["horse", "mule"], ["ice", "water"], ["sugar", "honey"],
["star", "planet"], ["cup", "mug"], ["rain", "snow"], ["snake", "lizard"], ["rose", "tulip"],
["frog", "toad"], ["lion", "tiger"], ["car", "truck"], ["house", "villa"], ["bread", "cake"],
["pencil", "marker"], ["chair", "bench"], ["sun", "star"], ["apple", "grape"], ["table", "desk"],
["river", "stream"], ["dog", "puppy"], ["book", "magazine"], ["foot", "leg"], ["king", "duke"],
["queen", "princess"], ["pen", "quill"], ["tree", "palm"], ["bush", "shrub"], ["coffee", "latte"]
];

// Add player
function addName(name) {
    document.querySelector(".players").innerHTML += `<div class="player1 flex">${name}</div>`;
}

// Add button click
document.querySelector(".addbtn").addEventListener("click", () => {
    let name = document.getElementById("playerDetail").value.trim();
    if (name != "") {
        nameArray.push(name);
        addName(name);
        document.getElementById("playerDetail").value = "";
    } else {
        alert("Enter the name");
    }
});

// Start game
document.querySelector(".btnStart").addEventListener("click", () => {
    if (nameArray.length >= 3) {
        document.querySelector(".home").style.display = "none";
        document.querySelector(".game").style.display = "flex";
        currentPlayer = 0;
        setupWords();
        showPlayerCard(currentPlayer);
        document.querySelector(".nextplayer").style.display = "inline-block";
        document.querySelector(".restart").style.display = "none";
    } else {
        alert("Not enough players (minimum 3)");
    }
});

// Setup words
function setupWords() {
    const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    // Shuffle words in pair
    const pair = Math.random() < 0.5 ? randomPair : [randomPair[1], randomPair[0]];
    const mainWord = pair[0];
    const imposterWord = pair[1];
    const imposterIndex = Math.floor(Math.random() * nameArray.length);
    playerWords = nameArray.map((_, i) => (i === imposterIndex ? imposterWord : mainWord));
}

// Show player card
function showPlayerCard(index) {
    const pname = nameArray[index];
    const word = playerWords[index];
    const container = document.querySelector(".cardContainer");
    container.innerHTML = `
        <div class="card">
            <div class="greet"><h1>${pname} Turn</h1></div>
            <h1>Your word is</h1>
            <div class="hide">
                <div class="word">${word}</div>
                <div class="prompt">Tap to reveal</div>
            </div>
        </div>
    `;
    const hideEl = container.querySelector(".hide");
    const wordEl = container.querySelector(".word");
    const promptEl = container.querySelector(".prompt");

    hideEl.addEventListener("click", () => {
        wordEl.style.display = "flex";
        promptEl.innerHTML = "Click NEXT to continue";
    });
    hideEl.addEventListener("touchstart", () => {
        wordEl.style.display = "flex";
        promptEl.innerHTML = "Click NEXT to continue";
    });
}

// Next player button
document.querySelector(".nextplayer").addEventListener("click", () => {
    currentPlayer++;
    if (currentPlayer < nameArray.length) {
        showPlayerCard(currentPlayer);
    } else {
        document.querySelector(".cardContainer").innerHTML = `<h2>All players done!</h2>`;
        document.querySelector(".nextplayer").style.display = "none";
        document.querySelector(".restart").style.display = "inline-block";
    }
});

// Restart button (same players, new round)
document.querySelector(".restart").addEventListener("click", () => {
    currentPlayer = 0;
    setupWords();
    showPlayerCard(currentPlayer);
    document.querySelector(".nextplayer").style.display = "inline-block";
    document.querySelector(".restart").style.display = "none";
});
