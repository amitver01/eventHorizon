// src/pages/EventDetailPage.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShareAlt, FaCopy, FaWhatsappSquare, FaFacebook } from "react-icons/fa";

export default function EventDetailPage() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://backend-event-qj0c.onrender.com/api/events/event/${id}`)
      .then((response) => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching event details.");
        setLoading(false);
      });
  }, [id]);

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const handleWhatsAppShare = (url) => {
    const whatsappMessage = encodeURIComponent(`Check out this event: ${url}`);
    window.open(`whatsapp://send?text=${whatsappMessage}`);
  };

 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!event) return <div>No event found.</div>;

  const imageUrl = event.image ? `https://backend-event-qj0c.onrender.com/${event.image}` : '';
  const eventUrl = `https://eventhorizonamit.netlify.app/event/${event._id}`;
  const eventDate = event.eventDate ? event.eventDate.split("T")[0] : 'N/A';
  const eventTime = event.eventTime || 'N/A';

  return (
    <div>
      
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={event.title}
              className="w-full h-72 object-cover"
            />
          )}
          <div className="absolute top-0 right-0 p-4 flex gap-2">
            <button
              onClick={() => handleCopyLink(eventUrl)}
              className="text-gray-600 hover:text-gray-800"
            >
              <FaCopy className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleWhatsAppShare(eventUrl)}
              className="text-green-600 hover:text-green-800"
            >
              <FaWhatsappSquare className="w-6 h-6" />
            </button>
            
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
          <p className="text-sm text-gray-700 mb-2">
            {eventDate}, {eventTime}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            {event.ticketPrice === 0 ? 'Free' : 'Rs. ' + event.ticketPrice}
          </p>
          <p className="text-base text-gray-900 mb-4">
            {event.description || 'No description available'}
          </p>
         
        </div>
      </div>
    </div>
  </div>
  );
}
