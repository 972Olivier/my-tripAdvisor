document.addEventListener("DOMContentLoaded", () => {
  //   console.log("chargé youpi c'est super");

  document.getElementById("button-head").addEventListener("click", () => {
    // console.log("clic");
    document.getElementById("form-submit").classList.remove("hidden");
    document.getElementById("body").classList.add("no-scrool");
  });

  document.getElementById("x").addEventListener("click", () => {
    document.getElementById("form-submit").classList.add("hidden");
    document.getElementById("body").classList.remove("no-scrool");
  });

  document.querySelector("#form").addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log("submit");
    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("textaera").value,
    };
    const response = await axios.post(
      "https://backend-tripadivsor.herokuapp.com/form",
      data
    );

    console.log(response);
    document.getElementById("form-submit").classList.add("hidden");
    document.getElementById("body").classList.remove("no-scrool");
  });
});
