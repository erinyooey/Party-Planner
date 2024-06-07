//Create a list of approximately 6 parties happening in June with buttons that give the user the option to reserve party or decline.
// Each party in  the list will have a delete button
// On click delete that party is deleted from the list
// Create a form that allows user to add their party to the list onclick of submit
const getPartyData = async () => {
  try {
    const data = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events"
    );
    const response = await data.json();
    const displayed = response.data;
    console.log(displayed);
    return displayed;
  } catch (error) {
    console.log(error.message);
  }
};
getPartyData().then((displayed) => {
  displayParties(displayed);
});

function displayParties(displayed) {
  console.log("I am in display!");
}

const Party = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
  body.style.color = "pink";
  body.style.width = "100%";
};

function deleteParty(itemId) {
  fetch(
    `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events/${itemId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Event Deleted");
      getPartyData().then((displayed) => {
        displayParties(displayed);
      }); // items = items.filter(item => item.id !== itemId);
      // document.querySelector(`li[data-id="${itemId}"]`).remove();
      //     console.log('Event Eliminated');
    })
    .catch((error) => {
      console.error("There was a problem processing fetch request:", error);
    });
}

// const addParty = adocument.getElementById('party-form');
// addParty.addEventListener('submit', (e)=>{
//   e.preventDefault()
// })/

// use if/else statement to give user's the option to delete or reserve a party
//function addParty () {};

//Use Post to add new party to API

const init = () => {
  displayParties();
  console.log("Hello ");
};

init();
