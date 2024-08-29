import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminPage() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '' });
  const [deleteEventId, setDeleteEventId] = useState('');

  
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('https://backend-event-qj0c.onrender.com/api/events/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    }
    fetchEvents();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new event
  const handleAddEvent = async () => {
    try {
      await axios.post('https://backend-event-qj0c.onrender.com/api/events/createEvents', newEvent);
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', description: '', date: '' });
    } catch (error) {
      console.error('Error adding event', error);
    }
  };

  // Delete an event
  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`https://backend-event-qj0c.onrender.com/api/events/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
      setDeleteEventId('');
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      
      {/* Add Event Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Event
        </button>
      </div>

      {/* Event List and Delete Functionality */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Event List</h2>
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event._id} className="border p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
              <button
                onClick={() => handleDeleteEvent(event._id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete Event
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
