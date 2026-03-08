document.addEventListener('DOMContentLoaded', () => {
    const ticketForm = document.getElementById('ticketForm');
    const ticketBody = document.getElementById('ticketBody');

    // 1. Function to Fetch and Display Tickets (The "Read" in CRUD)
    const fetchTickets = async () => {
        try {
            const response = await fetch('/tickets'); // You'll need to add this GET route to server.js
            const tickets = await response.json();
            
            ticketBody.innerHTML = ''; // Clear current table rows

            tickets.forEach(ticket => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>#${ticket.id}</td>
                    <td>${ticket.title}</td>
                    <td>${ticket.category}</td>
                    <td><span class="badge ${ticket.priority.toLowerCase()}">${ticket.priority}</span></td>
                    <td>${ticket.status}</td>
                `;
                ticketBody.appendChild(row);
            });
        } catch (err) {
            console.error("Error fetching tickets:", err);
        }
    };

    // 2. Handle Form Submission (The "Create" in CRUD)
    ticketForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const ticketData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            priority: document.querySelector('input[name="priority"]:checked').value
        };

        try {
            const response = await fetch('/create-ticket', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ticketData)
            });

            if (response.ok) {
                alert("Ticket Created Successfully!");
                ticketForm.reset();
                fetchTickets(); // Refresh the table to show the new ticket
            } else {
                alert("Error creating ticket");
            }
        } catch (err) {
            console.error("Submission error:", err);
        }
    });

    // Initial fetch on page load
    fetchTickets();
});