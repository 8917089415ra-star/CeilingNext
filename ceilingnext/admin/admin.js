// Login
function login(){
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if(u === "admin" && p === "1234"){
    localStorage.setItem("adminLogin", "true");
    window.location = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid Login!";
  }
}

// Protect Dashboard
if(location.pathname.includes("dashboard")){
  if(localStorage.getItem("adminLogin") !== "true"){
    window.location = "login.html";
  }
}

// Logout
function logout(){
  localStorage.removeItem("adminLogin");
  window.location = "login.html";
}

// Gallery
function addImage(){
  const url = document.getElementById("imgUrl").value;
  let images = JSON.parse(localStorage.getItem("gallery")) || [];
  images.push(url);
  localStorage.setItem("gallery", JSON.stringify(images));
  showImages();
}

function deleteImage(i){
  let images = JSON.parse(localStorage.getItem("gallery"));
  images.splice(i,1);
  localStorage.setItem("gallery", JSON.stringify(images));
  showImages();
}

function showImages(){
  let images = JSON.parse(localStorage.getItem("gallery")) || [];
  let box = document.getElementById("galleryList");
  if(!box) return;
  box.innerHTML = "";
  images.forEach((img,i)=>{
    box.innerHTML += `
      <div>
        <img src="${img}">
        <button onclick="deleteImage(${i})">Delete</button>
      </div>`;
  });
}

showImages();
