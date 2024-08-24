import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillCalendar } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { FaCopy, FaWhatsappSquare, FaFacebook } from 'react-icons/fa';

export default function DisplayEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:4000/api/events/events${id}`)
      .then(response => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching event:', error);
        setError('Failed to load event.');
        setLoading(false);
      });
  }, [id]);

  const handleCopyLink = () => {
    const linkToShare = window.location.href;
    navigator.clipboard.writeText(linkToShare).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const handleWhatsAppShare = () => {
    const linkToShare = window.location.href;
    const whatsappMessage = encodeURIComponent(linkToShare);
    window.open(`whatsapp://send?text=${whatsappMessage}`);
  };

  const handleFacebookShare = () => {
    const linkToShare = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkToShare)}`;
    window.open(facebookShareUrl);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        {event.image && (
          <img
            src={`http://localhost:4000/api/events/events${event.image}`}
            alt={event.title}
            className="w-full max-w-3xl rounded-lg object-cover mb-4"
          />
        )}

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{event.title.toUpperCase()}</h1>

        <div className="text-lg font-bold mb-2">
          {event.ticketPrice === 0 ? 'Free' : `LKR. ${event.ticketPrice}`}
        </div>

        <div className="text-md mb-4">
          {event.description}
        </div>

        <div className="text-md font-semibold mb-4">
          Organized By: {event.organizedBy}
        </div>

        <div className="text-md mb-4">
          <h2 className="text-lg font-bold mb-2">When and Where</h2>
          <div className="flex items-center mb-2">
            <AiFillCalendar className="text-primarydark mr-2" />
            <span>{event.eventDate.split('T')[0]}, {event.eventTime}</span>
          </div>
          <div className="flex items-center">
            <MdLocationPin className="text-primarydark mr-2" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button onClick={handleCopyLink} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
            <FaCopy className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={handleWhatsAppShare} className="p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700">
            <FaWhatsappSquare className="w-6 h-6" />
          </button>
          <button onClick={handleFacebookShare} className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700">
            <FaFacebook className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
