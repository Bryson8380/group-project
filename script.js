const header = 'Top 10 games on xbox!';
document.querySelector('.header').innerHTML = header;

const games on xbox = [
  {name: "Halo" Date: "11/15/2001" made: "6bil+" imgurl:"https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg"
   {name:"GTAV" Date:"9/17/13" made:"7.7 billion" imgurl:"https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
   {name:"RDR2" Date:"10/26/18" make:"1.38 bil" imgurl:"https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
   {name: "Call of Duty black ops 2" Date:"11/12/12" made:"2.75 bil" imgurl:"https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png"
   {name: "Forza Horizon 4" Date: "10/22/18" made: "230 milliom" imgurl:"https://upload.wikimedia.org/wikipedia/en/8/87/Forza_Horizon_4_cover.jpg"
   {name: "overwatch 2" date: "10/4/22" make:"225 million", imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Overwatch_2_full_logo.svg/330px-Overwatch_2_full_logo.svg.png",
   {name:"fortnite", Date: "9/26/17", made: "26 billion", imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Fortnite_BR_2022_Logo_with_black_text.svg/330px-Fortnite_BR_2022_Logo_with_black_text.svg.png",
   {name: "Rainbow Six seige", Date: "12/1/15", make: "380 million", imgurl: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg",
   {name: "Fall guys", date: "8/4/20", made: "185 million", imgurl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Fall_Guys_Post_F2P_keyart.png/330px-Fall_Guys_Post_F2P_keyart.png",
   Name: "minecraft", date:"11/18/11", made:"4 billion", imgurl: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
   
   
  
   
   
   

function createCardHTML(movie) {
  return `
    <div class="card">
      <div class="modalButton">
        <button class="openModalBtn">
          <img class="card-img" src="${movie.imgUrl}" alt="${movie.name}">
        </button>
      </div>
    </div>
  `;
}

const cardsHTML = movies.map(createCardHTML).join("");
document.querySelector('.cards').innerHTML = cardsHTML;

// Get the modal and close button elements
const modal = document.querySelector('.myModal');
const closeModalBtn = document.querySelector(".close");

// Function to open modal
function openModal(movie) {
  modal.style.display = "block";
  const modalDetails = document.querySelector('.modal-details');
  modalDetails.innerHTML = `
    <h2>${movie.name}</h2>
    <p>Date: ${movie.date}</p>
    <p>Duration: ${movie.time}</p>
    <p>Box Office: ${movie.boxOffice}</p>
  `;
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for opening modal when View Details button is clicked
document.querySelectorAll('.openModalBtn').forEach((button, index) => {
  button.addEventListener('click', () => {
    openModal(movies[index]);
  });
});

// Event listener for closing modal when close button is clicked
closeModalBtn.addEventListener('click', () => {
  closeModal();
});

// Event listener for closing modal when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeModal();
  }
});
