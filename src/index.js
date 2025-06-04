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
  let prompt =
    "User instructions are: Generate a French poem about ${instructionsInput.value}";
  let context =
    "You arer a romantic poem expert and you love to write short poems. Your mission is to generate 4 line poem in basic html. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
