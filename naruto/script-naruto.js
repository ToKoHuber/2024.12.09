/*{
  <div class="card">
        <h2>Naruto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dignissimos?
        </p>
        <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
      </div> 
}*/
const narutoInfo = [
  {
    title: "Naruto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
    imgUrl: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
  },
];
const appDiv = document.querySelector(".app");

function generateCard(title, description, imgUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  appDiv.appendChild(cardDiv);
}

generateCard(narutoInfo);
