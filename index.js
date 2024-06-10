
  async function getPartyData() {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events"
    );
    if(!response.ok){
      throw new Error("Cold not access data.")
    }

    const displayed = response.json();
    console.log(displayed);
    return displayed;
  } catch (error) {
    console.error(error);
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

async function deleteParty(itemId) {
  try{
    const response = await fetch(

    `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events/${itemId}`,
    {
      method: "DELETE",
      headers: {"Content-Type": "application/json",
      },
    }
  );

  if (!response.ok)
    throw new Error("Error");
  
  
  const displayed = await response.json();
  console.log(displayed);
} catch (error) {
  console.error(error);
}
};

const addParty = async (newPart) => {
  const apiUrl =  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events";
try{ const response = await fetch(apiUrl, {
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newParty),
});

if(!response.ok){
  throw new Error("Failed to add party");
}
 const addedParty = await response.json();
 console.log(addedParty);
} catch(error){
  console.error(error);
}
};

const formEl = document.querySelector('form');
formEl.addEventListener('submit', async(event)=>{
event.preventDefault();
const formData = new FormData(formEl);
const data = object.forEntries(formData);
try{
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events', {
    Method: 'Post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
if(!response.ok){
  throw new Error('Failed to submit form');
}
const result = await response.json();
console.log(results);
} catch(error){
  console.error(error);
}
});

const init = () => {
getPartyData(). then((displayed) =>{
  displayParties(displayed);
}
)};


init();