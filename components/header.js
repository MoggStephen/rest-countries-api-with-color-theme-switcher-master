export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content py-5 py-sm-4 d-flex justify-content-center align-items-center">
        <h1 className="m-0">Where in the world?</h1>
        <button className="btn ms-auto" onClick={darkModeHandler}> <i className="bi bi-moon-fill light-dark-mode-icon me-1 me-sm-2"></i><span className="light-dark-mode-text">Dark Mode</span></button>
      </div>
    </header>
  );
}

function darkModeHandler(){
  //Change all colors
  const root = document.querySelector("html");
  root.classList.toggle("dark-mode");

  //Change bootstrap icon between sun fill and moon fill.
  const iIcon = document.querySelector(".light-dark-mode-icon");
  if (iIcon.className.includes("bi-moon-fill")){
    iIcon.classList.remove("bi-moon-fill");
    iIcon.classList.add("bi-sun-fill");
  }
  else{
    iIcon.classList.remove("bi-sun-fill");
    iIcon.classList.add("bi-moon-fill");
  }
  
  //Change text
  const darkModeBtn = document.querySelector(".light-dark-mode-text");
  if (darkModeBtn.textContent === "Dark Mode") {
    darkModeBtn.textContent = "Light Mode";
  }
  else {
    darkModeBtn.textContent = "Dark Mode";
  }
}