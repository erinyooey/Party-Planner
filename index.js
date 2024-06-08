
  async function getPartyData() {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events"
    );
    if(!response.ok){
      throw new Error("Cold not access data.")
    }

    const response = await data.json();
    const displayed = response.data;
    console.log(displayed);
    return displayed;
  } catch (error) {
    console.error(error);
  }
};
    getPartyData().then((displayed) => {
    displayParties(displayed);
});

function displayParties(displayed) => {
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
      headers: {"Content-Type": "application/json",
      },
    }
  ) if(!resonse.ok){
    throw new Error("Error");
  }
  await response.json();
  console.log(displayed);
  

   const addParty = (newParty) => {
   const apiUrl =  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events";
   const apiToken = "Your_API_Token"; // Replace with your actual API token
   }


const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    },
    body: JSON.stringify(newParty)
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to add data to the API.');
    })
    .then(data => {
      console.log("Data successfully added to the API.", data);
      getPartyData().then((displayed) => {
        displayParties(displayed);
      });
    })
    .catch(error => {
      console.error("There was a problem adding the data to the API:", error);
    });
};

// Example usage
const newParty = {
  // Add the necessary fields for your new party
  name: "Party",
  date: "2024-06-30",
  location: //"Example Location"
};

addParty(newParty)

const init = () => {
    displayParties();
    console.log("Hello ");
  };
  init();