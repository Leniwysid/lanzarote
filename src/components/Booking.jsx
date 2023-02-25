import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Booking = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 gap-4 grid lg:grid-cols-3">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <h1 className="uppercase">
          Choose from 50+ world class resorts & book an affordable all-inclusive
          resort
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          aut perspiciatis eos corporis obcaecati, placeat animi dolorem nulla
          laboriosam veritatis amet numquam deleniti autem voluptatem labore
          atque commodi tempora recusandae inventore! Illo sed repellat
          voluptates id laborum delectus. Eius tempora sunt, aliquid asperiores
          ab ea laboriosam eum dicta vel doloremque repellendus adipisci
          explicabo?
        </p>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3>LEADING SERVICE</h3>
              <p>Our team is waiting 24/7 to book a room for You</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3>ONLY BEST HOTELS</h3>
              <p>Selected deals on the chosen apartments</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-4">Get an additional 10% off</p>
          <p className="py-4 uppercase font-bold">Only few rooms left</p>
          <p className="bg-gray-800 text-gray-200 py-3">Book now and save</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border p-2 rounded-lg">
              <option>Costa Teguise</option>
              <option>Puerto del Carmen</option>
              <option>Arrecife</option>
              <option>Arrieta</option>
              <option>Haria</option>
              <option>San Bartolomé</option>
              <option>Playa de Papago</option>
              <option>Punta Mujeres</option>
              <option>Yaiza</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input className="border p-2 rounded-lg" type="date"></input>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input className="border p-2 rounded-lg" type="date"></input>
          </div>
          <button className="w-full">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
