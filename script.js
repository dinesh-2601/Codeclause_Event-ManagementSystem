const eventList = document.getElementById("event-list");
if (eventList) {
  const events = JSON.parse(localStorage.getItem("events") || "[]");

  if (events.length === 0) {
    eventList.innerHTML = "<p>No events available. <a href='create.html'>Create one now</a>.</p>";
  } else {
    events.forEach((event, index) => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h2>${event.title}</h2>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button onclick="bookTicket(${index})" class="btn">Book Ticket</button>
      `;
      eventList.appendChild(card);
    });
  }
}

function bookTicket(index) {
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  const event = events[index];
  alert(`Ticket booked for "${event.title}" on ${event.date}!`);
}
