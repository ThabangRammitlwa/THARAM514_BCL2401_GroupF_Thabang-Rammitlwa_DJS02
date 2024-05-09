const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  if (parseInt(divider) === 0) {
    result.classList.add("error-message");
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero");
    return;
  }
  if (isNaN(parseInt(dividend)) || isNaN(parseInt(divider))) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Invalid input provided");
    return;
  }

  const quotient = Math.floor((dividend) / (divider));
  result.innerText = `${quotient}`;
});
