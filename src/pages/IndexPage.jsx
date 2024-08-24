import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [events, setEvents] = useState([]);
  return (
    <>
      <div className="mt-1 flex flex-col">
        <div className="hidden sm:block">
          <div href="#" className="flex item-center inset-0">
            <img src="../src/assets/hero.jpg" alt="" className="w-full" />
          </div>
        </div>

    
      </div>
    </>
  );
}
