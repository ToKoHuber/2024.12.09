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
// const narutoInfo = [
//   {
//     title: "Naruto",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
//     imgUrl: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
//   },
// ];
const appDiv = document.querySelector(".app");

function generateCard(title, description, imgUrl) {
  const cardDiv = document.createElement("div");
  const h2tag = document.createElement("h2");
  h2tag.innerText = title;
  const textTag = document.createElement("p");
  textTag.innerText = description;

  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", imgUrl);

  cardDiv.setAttribute("class", "card");
  cardDiv.appendChild(h2tag);
  cardDiv.appendChild(textTag);
  cardDiv.appendChild(imgTag);
  appDiv.appendChild(cardDiv);
}

generateCard(
  "Naruto",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
  "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
);
