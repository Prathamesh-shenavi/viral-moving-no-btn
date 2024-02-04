document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const button = document.getElementById("moveButton");
  const yesBtn = document.getElementById("yesBtn");
  const img = document.getElementById("gif");
  const heading = document.getElementById("head");
  function getRandomCoordinates() {
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    const percentX = (randomX / maxX) * 500;
    const percentY = (randomY / maxY) * 500;

    return {x: `calc(${percentX}% - 50%)`, y: `calc(${percentY}% - 50%)`};
  }

  button.addEventListener("mouseover", function () {
    const {x, y} = getRandomCoordinates();
    button.style.transform = `translate(${x}, ${y})`;
  });
  button.addEventListener("click", function () {
    const {x, y} = getRandomCoordinates();
    button.style.transform = `translate(${x}, ${y})`;
  });
  yesBtn.addEventListener("click", function () {
    img.src = "https://media1.tenor.com/m/0eJ-_I5eaAoAAAAC/yay.gif";
    img.style = "height: 60%; width:40%;";
    heading.textContent = "Thank You !!";
    yesBtn.style.display = "none";
    button.style.display = "none";
  });
});
