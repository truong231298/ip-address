import iconArrow from "/images/icon-arrow.svg"
import iconLocaion from "/images/icon-location.svg"
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState("");

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.ipify.org?format=json`);
      const ip = response.data.ip;
      const locationResponse = await axios.get(`http://ip-api.com/json/${ip}`);
      setLocationData(locationResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <main className="min-h-screen">
      <section className="flex flex-col">
        {/* part 1: search */}
        <article className="flex flex-col gap-4 justify-center items-center bg-bg-desk bg-cover bg-repeat sm:bg-bg-mobile h-72">
          <h1 className="text-4xl text-white">IP Address Tracker</h1>
          <div className="max-w-xl mx-auto flex flex-row items-center">
            <input type="text" placeholder="Search for any IP address or domain" className="w-96 rounded-lg border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
            <span className="flex justify-center items-center bg-black h-full py-2 px-4 rounded-r-xl -translate-x-1 cursor-pointer">
              <img src={iconArrow} alt="" className="" />
            </span>
          </div>
        </article>
        {/* part 2: show */}
        <article className=" w-96 sm:w-2/3 mx-auto bg-white border-2 rounded-lg sm:-translate-y-1/2 -translate-y-1/3">
          <div className="flex flex-col text-center sm:text-start sm:flex-row gap-4 sm:p-4">
            {/* ip */}
            <div className="show ">
              <h2>ip address</h2>
              <p>{locationData.query}</p>
            </div>

            {/* location */}
            <div className="show ">
              <h2>location</h2>
              <p>{locationData.city}, {locationData.regionName}, {locationData.country}</p>
            </div>

            {/* the zone */}
            <div className="show ">
              <h2>the zone</h2>
              <p>UTC {locationData.timezone}</p>
            </div>

            {/* isp */}
            <div className="show ">
              <h2>jsp</h2>
              <p>{locationData.isp}</p>
            </div>
          </div>

        </article>
        {/* part 3: map */}
        <article className="w-full">
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </article>
      </section>
    </main>
  )
}