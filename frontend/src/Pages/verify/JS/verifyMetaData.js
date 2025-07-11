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

//Validations to check the empty Field
export async function checkSingleMail(singleMail) {
  const singleMailInput = document.querySelector(".singleMail");

  if (!singleMail.current.value) {
    singleMailInput.classList.add("error");
    return false;
  }

  //API Call Here for single mail
  try {
    const response = await fetch("http://127.0.0.1:8000/validate-email/single", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: singleMail.current.value }),
    });
    const data = await response.json();
    if (data.valid) {
      // Handle valid email response
      console.log("Email is valid:", data);
    }
  } catch (error) {
    console.error("Error validating email:", error);
  }

  singleMail.current.value = "";

  //Temporary
  return true;
}

//Bulk Mail Verification
export function checkBulkMail(bulkMails) {
  const bulkMailInput = document.querySelector(".bulkMail");

  if (!bulkMails.current.value) {
    bulkMailInput.classList.add("error");
    return false;
  }

  //API Call here to check the bulk Mails

  //Removing the Error Class
  bulkMailInput.classList.remove("error");

  //Make the fileds Empty
  bulkMails.current.value = "";

  //Temporary
  return true;
}
