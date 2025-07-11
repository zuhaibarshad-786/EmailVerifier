//VerifyMetaData
export function toggleButton() {
  const buttons = document.querySelectorAll(".verify-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
      });
      button.style.backgroundColor = "white";
    });
  });
}

