import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCopy, FaWhatsappSquare, FaFacebook } from "react-icons/fa";

export default function DisplayEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://backend-event-qj0c.onrender.com/api/events/events")
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const handleWhatsAppShare = (url) => {
    const whatsappMessage = encodeURIComponent(`Check out this event: ${url}`);
    window.open(`whatsapp://send?text=${whatsappMessage}`);
  };

  const handleFacebookShare = (url) => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="text-center">
      <h1 className="my-3 sm:my-4 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-10 tracking-tight text-black">
            Listed
            <span className="text-blue-700"> Events..</span>
          </h1>
    <div className="mx-10 my-5 grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.length > 0 &&
        events.map((event) => {
          const imageUrl = event.image
            ? `https://backend-event-qj0c.onrender.com/${event.image}`
            : '';

          // Ensure eventDate exists before splitting
          const eventDate = event.eventDate ? event.eventDate.split("T")[0] : 'N/A';
          const eventTime = event.eventTime || 'N/A';

          const eventUrl = `https://eventhorizonamit.netlify.app/event/${event._id}`;

          return (
            <div className="bg-white rounded-xl relative overflow-hidden shadow-lg" key={event._id}>
              <div className="relative">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={event.title}
                    width="300"
                    height="200"
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <h1 className="font-bold text-lg mb-2">{event.title.toUpperCase()}</h1>
                <p className="text-sm text-gray-700 mb-2">
                  {eventDate}, {eventTime}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  {event.ticketPrice === 0 ? 'Free' : 'Rs. ' + event.ticketPrice}
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  {event.description || 'No description available'}
                </p>

                <div className="flex gap-4 mb-2">
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

                  <button
                    onClick={() => handleFacebookShare(eventUrl)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </button>
                </div>

                <Link
                  to={`/event/${event._id}`}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  </div>
  );
}
