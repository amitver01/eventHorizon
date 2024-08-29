import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function AddEvent() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    organizedBy: '',
    eventDate: '',
    eventTime: '',
    location: '',
    ticketPrice: '',
    image: '',
    
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });

    try {
      const response = await axios.post('https://backend-event-qj0c.onrender.com/api/events/createEvent', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Event posted successfully:', response.data);
      alert('Event posted successfully!');
      setIsPopupOpen(true);
    } catch (error){
      if (error.response) {
        console.error('Error posting event:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error in request setup:', error.message);
      }
      console.error('Error configuration:', error.config);
    }
  };

  return (
    <div className="flex flex-col ml-20 mt-10">
      <h1 className="font-bold text-36 mb-5">Post an Event</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col">
          Title:
          <input
            type="text"
            name="title"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        
        
        <label className="flex flex-col">
          Description:
          <textarea
            name="description"
            className="rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 h-20 border-none"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        
        <label className="flex flex-col">
          Organized By:
          <input
            type="text"
            name="organizedBy"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
            value={formData.organizedBy}
            onChange={handleChange}
          />
        </label>
        
        <label className="flex flex-col">
          Event Date:
          <input
            type="date"
            name="eventDate"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </label>
        
        <label className="flex flex-col">
          Event Time:
          <input
            type="time"
            name="eventTime"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
            value={formData.eventTime}
            onChange={handleChange}
          />
        </label>
        
        <label className="flex flex-col">
          Location:
          <input
            type="text"
            name="location"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        
        <label className="flex flex-col">
          Ticket Price:
          <input
            type="number"
            name="ticketPrice"
            className="rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none"
            value={formData.ticketPrice}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          Image:
          <input
            type="file"
            name="image"
            className="rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 h-8 border-none"
            onChange={handleChange}
          />
          </label>
        
        
        <button className="primary" type="submit">Submit</button>
      </form>
      <Popup 
  open={isPopupOpen} 
  onClose={() => setIsPopupOpen(false)} 
  position="top center"
  contentStyle={{ padding: '0', border: 'none', borderRadius: '8px', width: '300px' }}
  overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
>
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <h2 className="text-xl font-bold text-green-600 mb-4">Success!</h2>
    <p className="text-gray-700 mb-6">Event posted successfully!</p>
    <button 
      onClick={() => navigate('/')} 
      className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primarydark transition duration-200"
    >
      Go to Home
    </button>
  </div>
</Popup>

    </div>
  );
}
