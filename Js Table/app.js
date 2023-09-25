let userName = document.getElementById("user_name");
let userEmail = document.getElementById("user_email");
let userNumber = document.getElementById("user_number");
let mainn = document.querySelector("main");
let tBody = document.querySelector("tbody");
let button = document.getElementById("add_row");
button.addEventListener("click", (event) => {
  event.preventDefault();
  if (userName.value == "" || userEmail.value == "" || userNumber == "") {
    document.querySelector(".empty").innerText = "Empty Fields";
    document.querySelector(".empty").style.color = "red";
    setTimeout(() => {
      document.querySelector(".empty").innerText = "";
    }, 2000);
  } else if (!userEmail.value.endsWith("@gmail.com")) {
    document.querySelector(".empty").innerText = "includes @ is missing";
    setTimeout(() => {
      document.querySelector(".empty").innerText = "";
    }, 2000);
  } else {
    document.querySelector(".empty").innerText = "Data Inserted Successfully";
    document.querySelector(".empty").style.color = "green";
    setTimeout(() => {
      document.querySelector(".empty").innerText = "";
    }, 2000);
    tBody.innerHTML += `<tr class="new_rows">
    <td>${userName.value}</td>
    <td>${userEmail.value}</td>
    <td>${userNumber.value}</td>
    <td id="remove"><button class="remove_btn">Remove</button></td>
    </tr>`;
  }
  userName.value = "";
  userEmail.value = "";
  userNumber.value = "";

  let removeBtn = document.querySelectorAll(".remove_btn");
  let x = Array.from(removeBtn);
  x.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.remove();
      document.querySelector(".empty").innerText = "Data Removed Successfully";
      document.querySelector(".empty").style.color = "green";
      setTimeout(() => {
        document.querySelector(".empty").innerText = "";
      }, 2000);
    });
  });
});
