// works w/ fetch request
async function getPartyData() {
try {
    const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events", {method: "GET"}
    );
    if(!response.ok){
    throw new Error("Cold not access data.")
    }

    const json = await response.json();
    if(json && json.data){
    return json.data
    }
} catch (error) {
    console.error("Error fetching data:", error);
}
};

// Display parties on the page
function displayParties(parties){
const list = document.getElementById("party-list")
list.innerHTML = "" // clear list

parties.forEach(party => {
    const listItem = document.createElement("li")
    listItem.textContent = `${party.name} - ${party.date} - ${party.location} - ${party.description}`

    const deleteButton = document.createElement("button")
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener("click", ()=>deleteParty(party.id))

    listItem.appendChild(deleteButton)
    list.appendChild(listItem)

})
console.log("Button!");
}
// Delete a party
async function deleteParty(itemId) {
try{
    const response = await fetch(
    `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events/${itemId}`,
    {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    }
    ) 
    if(!response.ok){
    throw new Error("Failed to delete a party.")
    }
    // Refresh the list of parties after deletion
    const parties = await getPartyData()
    displayParties(parties)
} catch(error){
    console.error("There was a problem deleting the party:", error)
}
}


// Add a new party
const addParty = async (newParty) => {
const apiUrl = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-FT/events"

// Combine date and time into ISO-8601 format
const formattedDateTime = new Date(`${newParty.date}T${newParty.time}:00`).toISOString();

const formattedParty = {
    name: newParty.name,
    date: formattedDateTime,
    location: newParty.location,
    description: newParty.description
};

const requestOptions = {
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(formattedParty)
};
try{
    const response = await fetch(apiUrl, requestOptions)
    if (!response.ok){
    const errorMessage = await response.text()
    throw new Error(`Failed to add data to the API: ${errorMessage}`)
    }
    const data = await response.json()
    console.log('Party added: ', data)

    // load data again after adding a new party
    const parties = await getPartyData()
    displayParties(parties)
} catch(error){
    console.error("There was a problem adding the data to the API: ", error)
}
};


const init = async () => {
    const parties = await getPartyData()
    displayParties(parties);

    // Add party button
    document.getElementById('party-form').addEventListener('submit', function(event) {
    event.preventDefault()

    const newParty = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value,
    }
    console.log(newParty)
    addParty(newParty)
    })
};

init();