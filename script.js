let input = document.querySelector("#evaluatedText");

input.addEventListener("input", () => {
  const count = input.value.length;
  let h = document.querySelector("#letterCount");
  h.innerText = count;
});
