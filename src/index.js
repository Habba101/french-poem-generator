function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "d0e50fa0aabd593o0b84ed0t8acf23ad";
  let context =
    "You are a romantic poem expert and you love to write short poems. Your mission is to generate 4 line poem in basic html. Make sure to follow the user instructions.";
  let prompt =
    "User instructions: Generate a French poem about ${instructionsInput.value}. Please do not explain anything and English and never ever add anything else other than a French poem. Do not write the word html or include quotation marks, but rather just write the poem in French only without stating that it's html and separate each line with a <br />. Sign your poem with `SheCodes AI` inside a <strong>element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a French poem about ${instructionInput.value}</div>`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
