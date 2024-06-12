const btn = document.getElementById("btn")
const output = document.querySelector(".output")

let quote = ["Whether you think you can or you think you can't, you're right. - Henry Ford", "I would rather die of passion than of boredom. - Vincent Van Gogh", 
    "There is no substitute for hard work. - Thomas Edison", "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln", 
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou", "Love the life you live. Live the life you love. - Bob Marley", 
    "Life is either a daring adventure or nothing at all. - Helen Keller", "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson", 
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. - Henry Ford", "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson", 
    'The Way Get Started Is To Quit Talking And Begin Doing. -Walt Disney',
'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty. -Winston Churchill',
'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up. - Vince Lombardi',
'If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You.- Steve Jobs',
'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. - Rob Siltanen',
'We May Encounter Many Defeats But We Must Not Be Defeated. - Maya Angelou'
]

btn.addEventListener("click", ()=>{
    let random = Math.floor(Math.random()*quote.length)
    output.textContent = quote[random];
})