const wordList = [
  { word: "GREAT WALL OF CHINA", hint: "World's longest man-made structure" },
  { word: "MOUNT EVEREST", hint: "Tallest mountain above sea level" },
  { word: "BURJ KHALIFA", hint: "Tallest building on Earth" },
  { word: "VATICAN CITY", hint: "Smallest country by area and population" },
  { word: "PACIFIC OCEAN", hint: "Largest ocean on the planet" },
  { word: "SAHARA DESERT", hint: "World’s largest hot desert" },
  { word: "NILE RIVER", hint: "Often considered the longest river" },
  { word: "LAKE BAIKAL", hint: "Deepest freshwater lake in the world" },
  { word: "ANTARCTICA", hint: "Coldest and driest continent" },
  { word: "MARIANA TRENCH", hint: "Deepest oceanic trench on Earth" },
  { word: "JUPITER", hint: "Largest planet in our solar system" },
  { word: "MOUNT KILIMANJARO", hint: "Highest peak in Africa" },
  { word: "AMAZON RIVER", hint: "Largest river by volume" },
  { word: "CANADA", hint: "Second-largest country by area" },
  { word: "RUSSIA", hint: "Largest country by land area" },
  { word: "LUXEMBOURG", hint: "One of the richest countries per capita" },
  { word: "PYRAMIDS OF GIZA", hint: "Ancient wonders located in Egypt" },
  { word: "TAJ MAHAL", hint: "Iconic white marble mausoleum" },
  { word: "FIFA WORLD CUP", hint: "Major global football competition" },
  { word: "BRAZIL", hint: "Won the most FIFA World Cups (men's)" },
  { word: "KYLIE MBAPPÉ", hint: "Star French footballer at World Cup 2022" },
  { word: "LIONEL MESSI", hint: "Led Argentina to World Cup glory in 2022" },
  { word: "AUSTRALIA", hint: "Most Men's Cricket World Cup titles" },
  { word: "INDIA", hint: "Won Cricket World Cups in 1983 & 2011" },
  { word: "BEN STOKES", hint: "Crucial performance in 2019 Cricket Final" },
  { word: "ICC TROPHY", hint: "Awarded in cricket world competitions" },
  { word: "FORMULA ONE", hint: "Premier international auto racing series" },
  { word: "BASKETBALL", hint: "Sport with slam dunks and three-pointers" },
  { word: "OLYMPICS", hint: "Global multi-sport event every four years" },
  { word: "MARATHON", hint: "Race over 26.2 miles" },
  { word: "TENNIS GRAND SLAM", hint: "Includes Wimbledon and US Open" },
  { word: "MICHAEL PHELPS", hint: "Most Olympic gold medals ever" },
  { word: "NEPAL", hint: "Home country of Mount Everest" },
  { word: "EVEREST BASE CAMP", hint: "Popular trekking destination in Nepal" },
  { word: "THE GODFATHER", hint: "Legendary mob movie" },
  { word: "TITANIC", hint: "Blockbuster starring Leonardo DiCaprio" },
  { word: "AVENGERS ENDGAME", hint: "Highest-grossing film of all time (briefly)" },
  { word: "SHAH RUKH KHAN", hint: "Bollywood’s King of Romance" },
  { word: "RAHUL DRAVID", hint: "The Wall of Indian Cricket" },
  { word: "SACHIN TENDULKAR", hint: "Cricket icon known as the 'Master Blaster'" },
  { word: "SONG OF THE YEAR", hint: "Prestigious Grammy category" },
  { word: "GANGNAM STYLE", hint: "Viral K-pop track by PSY" },
  { word: "BOHEMIAN RHAPSODY", hint: "Queen’s operatic rock classic" },
  { word: "TAKE ON ME", hint: "Famous for its sketch animation video" },
  { word: "SWIFTIES", hint: "Nickname for Taylor Swift fans" },
  { word: "A R RAHMAN", hint: "Oscar-winning Indian composer" },
  { word: "SPUTNIK", hint: "First satellite launched into space" },
  { word: "NEIL ARMSTRONG", hint: "First man on the moon" },
  { word: "GANDHI", hint: "Led India to independence" },
  { word: "MARTIN LUTHER KING", hint: "Had a dream of civil rights" },
  { word: "WORLD WAR II", hint: "Global conflict from 1939 to 1945" },
  { word: "UNITED NATIONS", hint: "Global diplomatic organization" },
  { word: "MALALA", hint: "Youngest Nobel Prize laureate" },
  { word: "NOBEL PEACE PRIZE", hint: "Awarded for humanitarian efforts" },
  { word: "DNA", hint: "Genetic blueprint of life" },
  { word: "MICROSOFT", hint: "Tech giant known for Windows and Office" },
  { word: "AI", hint: "Artificial Intelligence abbreviation" },
  { word: "MICROSOFT EDGE", hint: "A modern web browser" },
  { word: "HANGMAN", hint: "Classic letter-guessing game" },
  { word: "EINSTEIN'S THEORY", hint: "Revolutionized physics with relativity" },
  { word: "COFFEE & DONUTS", hint: "A popular morning combo" },
  { word: "PYRAMID SCHEME", hint: "Deceptive business model" },
  { word: "TOILET PAPER", hint: "Household item with unexpected scarcity in 2020" },
  { word: "KATHMANDU", hint: "Capital city of Nepal" },
  { word: "TIKTOK", hint: "Short video platform with global reach" },
  { word: "YOUTUBE", hint: "Popular video-sharing website" },
  { word: "WIKIPEDIA", hint: "Free encyclopedia anyone can edit" },
  { word: "SOLAR SYSTEM", hint: "Includes the Sun and 8 planets" },
  { word: "HUMAN BRAIN", hint: "Organ with over 80 billion neurons" },
  { word: "T-REX", hint: "Fierce dinosaur of the Cretaceous" },
  { word: "E=MC^2", hint: "Einstein’s famous formula" },
  { word: "SUPER BOWL", hint: "Major American football event" },
  { word: "WIMBLEDON", hint: "Prestigious tennis tournament" },
  { word: "WORLD SERIES", hint: "Championship in American baseball" },
  { word: "DISNEYLAND", hint: "The happiest place on Earth" },
  { word: "CIRQUE DU SOLEIL", hint: "Famous for acrobatic circus shows" },
  { word: "NETFLIX", hint: "Streaming platform known for originals" },
  { word: "LIONEL MESSI", hint: "barcelona->psg->inter miami" },
  { word: "CRISTIANO RONALDO", hint: "sporting->man utd->realmadrid->juventus->al nassr" },
  { word: "NEYMAR", hint: "barcelona->psg->al hilal" },
  { word: "KYLIAN MBAPPE", hint: "monaco->psg" },
  { word: "LUIS SUAREZ", hint: "ajax->liverpool->barcelona->atletico madrid" },
  { word: "ZINEDINE ZIDANE", hint: "juventus->realmadrid" },
  { word: "RONALDINHO", hint: "psg->barcelona->ac milan" },
  { word: "DAVID BECKHAM", hint: "man utd->realmadrid->la galaxy->psg" },
  { word: "GARETH BALE", hint: "tottenham->realmadrid->lafc" },
  { word: "EDEN HAZARD", hint: "lille->chelsea->realmadrid" },
  { word: "KAKA", hint: "ac milan->realmadrid" },
  { word: "ZLATAN IBRAHIMOVIC", hint: "ajax->juventus->inter->barcelona->psg->man utd->ac milan" },
  { word: "ROBERTO FIRMINO", hint: "hoffenheim->liverpool->al ahli" },
  { word: "JAMES RODRIGUEZ", hint: "porto->monaco->realmadrid->bayern->everton" },
  { word: "MO SALAH", hint: "basel->chelsea->roma->liverpool" },
  { word: "SADIO MANE", hint: "salzburg->southampton->liverpool->bayern->al nassr" },
  { word: "RICHARLISON", hint: "watford->everton->tottenham" },
  { word: "DE BRUYNE", hint: "genk->chelsea->wolfsburg->manchester city" },
  { word: "VIRGIL VAN DIJK", hint: "groningen->celtic->southampton->liverpool" },
  { word: "JACK GREALISH", hint: "aston villa->manchester city" },
  { word: "CASEMIRO", hint: "sao paulo->realmadrid->man utd" },
  { word: "TONI KROOS", hint: "bayern->realmadrid" },
  { word: "KARIM BENZEMA", hint: "lyon->realmadrid->al ittihad" },
  { word: "RAHEEM STERLING", hint: "liverpool->manchester city->chelsea" },
  { word: "JORDAN HENDERSON", hint: "sunderland->liverpool->al ettifaq" },
  { word: "MASON MOUNT", hint: "chelsea->man utd" },
  { word: "JUDE BELLINGHAM", hint: "birmingham->dortmund->realmadrid" },
  { word: "ERLING HAALAND", hint: "salzburg->dortmund->manchester city" },
  { word: "KANTE", hint: "caen->leicester->chelsea->al ittihad" },
  { word: "HAKIM ZIYECH", hint: "ajax->chelsea->galatasaray" },
  { word: "IVAN RAKITIC", hint: "sevilla->barcelona->sevilla->al shabab" },
  { word: "ANTOINE GRIEZMANN", hint: "real sociedad->atletico madrid->barcelona->atletico madrid" },
  { word: "FERNANDO TORRES", hint: "atletico madrid->liverpool->chelsea->ac milan->atletico madrid" },
  { word: "PENALTY KICK", hint: "Awarded for major foul in the box" },
  { word: "VAR", hint: "Video review system in football" },
  { word: "TIKI TAKA", hint: "Barcelona’s short-passing style" },
  { word: "RED CARD", hint: "Sent off for serious foul" },
  { word: "OFFSIDE TRAP", hint: "Defensive tactic catching forwards" },
  { word: "EL CLASICO", hint: "Real Madrid vs Barcelona rivalry" },
  { word: "DER KLASSIKER", hint: "Bayern Munich vs Dortmund" },
  { word: "SUPER SUNDAY", hint: "Multiple big Premier League games" },
  { word: "THE TREBLE", hint: "Winning league, domestic cup & UCL" },
  { word: "GOLDEN BOOT", hint: "Award for top goalscorer" },
  { word: "BALLON D'OR", hint: "Best footballer of the year" },
  { word: "PUSKAS AWARD", hint: "Best goal of the year" },
  { word: "FIFA WORLD CUP", hint: "Biggest tournament in football" },
  { word: "QATAR 2022", hint: "Hosted winter World Cup" },
  { word: "BRAZIL", hint: "Most FIFA World Cup titles" },
  { word: "GERMANY", hint: "Won 4 World Cups" },
  { word: "ARGENTINA", hint: "Champions in 1978, 1986, 2022" },
  { word: "FRANCE", hint: "Won in 1998 and 2018" },
  { word: "ENGLAND", hint: "1966 World Cup winners" },
  { word: "ICELAND", hint: "Smallest nation to reach a World Cup" },
  { word: "GHANA", hint: "Came close in 2010 World Cup" },
  { word: "HAND OF GOD", hint: "Controversial goal by Maradona" },
  { word: "THE INVINCIBLES", hint: "Arsenal’s unbeaten season in 2003–04" },
  { word: "ANFIELD", hint: "Liverpool's legendary home ground" },
  { word: "CAMP NOU", hint: "Barcelona’s iconic stadium" },
  { word: "OLD TRAFFORD", hint: "Manchester United's home" },
  { word: "SANTIAGO BERNABEU", hint: "Home of Real Madrid" },
  { word: "ALLIANZ ARENA", hint: "Bayern Munich's home" },
  { word: "EMIRATES STADIUM", hint: "Arsenal’s home since 2006" },
  { word: "MESSI VS RONALDO", hint: "The GOAT debate" },
  { word: "FREE KICK", hint: "Awarded for non-penalty fouls" },
  { word: "HAT TRICK", hint: "Scoring 3 goals in one match" },
  { word: "LONG RANGE GOAL", hint: "Scored from well outside the box" },
  { word: "STOPPAGE TIME", hint: "Added time after 90 minutes" },
  { word: "YELLOW CARD", hint: "Warning for misconduct" },
  { word: "MIDFIELD ENGINE", hint: "Role of a hard-working central midfielder" },
  { word: "GOAL LINE CLEARANCE", hint: "Crucial defensive save" },
  { word: "DERBY", hint: "Match between local rivals" },
  { word: "WORLD XI", hint: "Best players selected globally" },
  { word: "CLUB WORLD CUP", hint: "Tournament between continental champions" },
  { word: "UEFA EURO", hint: "European national teams championship" },
  { word: "AFCON", hint: "Africa’s continental championship" },
  { word: "ASIAN CUP", hint: "Continental championship in Asia" },
  { word: "COPA AMERICA", hint: "South American football championship" },
  { word: "MODRIC", hint: "Won Ballon d’Or in 2018" },
  { word: "SHE BELIEVES CUP", hint: "Women’s football tournament in the USA" },
  { word: "WOMEN'S WORLD CUP", hint: "Top international tournament for women" },
  { word: "MEGAN RAPINOE", hint: "USWNT star and activist" },
  { word: "ALEX MORGAN", hint: "Key player in US World Cup wins" },
  { word: "SAM KERR", hint: "Australia’s iconic striker" },
  { word: "VICKY LOSADA", hint: "Spanish international and Barça Femení leader" },
  { word: "UEFA SUPER CUP", hint: "Between UCL and Europa League winners" },
  { word: "EUROPA LEAGUE", hint: "Second-tier European club competition" }
];

let selectedWord = "";
let guessed = [];
let wrongLetters = [];
let gameScore = 0;
let usedWords = [];

const parts = [
  document.getElementById("head"),
  document.getElementById("body"),
  document.getElementById("left-arm"),
  document.getElementById("right-arm"),
  document.getElementById("left-leg"),
  document.getElementById("right-leg")
];

const wordContainer = document.getElementById("word");
const lettersContainer = document.getElementById("letters");
const message = document.getElementById("message");
const wrong = document.getElementById("wrong");
const resetButton = document.getElementById("reset");
const hintText = document.getElementById("hint-text");
const scoreDisplay = document.getElementById("score");

function setup() {
  if (usedWords.length === wordList.length) {
    message.textContent = "🎉 You've guessed all the words!";
    disableAllButtons();
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * wordList.length);
  } while (usedWords.includes(randomIndex));

  usedWords.push(randomIndex);
  const randomWord = wordList[randomIndex];
  selectedWord = randomWord.word.toLowerCase();

  guessed = [];
  wrongLetters = [];
  hintText.textContent = randomWord.hint;
  message.textContent = "";
  wrong.textContent = "";
  scoreDisplay.textContent = `Score: ${gameScore}`;
  parts.forEach(part => part.classList.remove("show"));
  displayWord();
  createKeyboard();
}

function displayWord() {
  wordContainer.innerHTML = selectedWord
    .split("")
    .map(letter =>
      guessed.includes(letter) || letter.match(/[^a-z0-9]/i)
        ? letter
        : "_"
    )
    .join(" ");

  if (!wordContainer.textContent.includes("_")) {
    message.textContent = "🎉 You win!";
    gameScore += 6;
    scoreDisplay.textContent = `Score: ${gameScore}`;
    disableAllButtons();
  }
}

function createKeyboard() {
  lettersContainer.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const btn = document.createElement("button");
    btn.textContent = String.fromCharCode(i);
    btn.addEventListener("click", () => handleGuess(btn.textContent));
    lettersContainer.appendChild(btn);
  }
}

function handleGuess(letter) {
  letter = letter.toLowerCase();
  const btn = Array.from(lettersContainer.children).find(b => b.textContent.toLowerCase() === letter);
  if (btn) btn.disabled = true;

  if (selectedWord.includes(letter)) {
    if (!guessed.includes(letter)) {
      guessed.push(letter);
      displayWord();
    }
  } else if (!wrongLetters.includes(letter)) {
    wrongLetters.push(letter);
    wrong.textContent = wrongLetters.join(", ");
    showNextPart();

    if (wrongLetters.length === parts.length) {
      message.textContent = `💀 Game over! The word was "${selectedWord.toUpperCase()}"`;
      gameScore = Math.max(0, gameScore - 6);
      scoreDisplay.textContent = `Score: ${gameScore}`;
      disableAllButtons();
    }
  }
}

function showNextPart() {
  const part = parts[wrongLetters.length - 1];
  if (part) part.classList.add("show");
}

function disableAllButtons() {
  document.querySelectorAll("#letters button").forEach(btn => btn.disabled = true);
}

resetButton.addEventListener("click", setup);

// ✨ Keyboard typing support
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (key.match(/^[a-z0-9]$/)) {
    handleGuess(key);
  } else if (key === "escape") {
    setup();
  }
});

setup();