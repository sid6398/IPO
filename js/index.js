const textArray = [
    "Welcome to Our Website",
    "Learn Frontend Development",
    "Grow with ReactJS",
    "Design Stunning Websites",
  ];
  let index = 0;
  
  const textElement = document.getElementById("changing-text");
  
  function changeText() {
    textElement.textContent = textArray[index];
    index = (index + 1) % textArray.length;
  }
  
  setInterval(changeText, 3000); 
  changeText(); 
  