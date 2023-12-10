import React from "react";
import { useState,useEffect } from "react";
import { Country,State,City } from "country-state-city";
import { addData } from "../utils/todoSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import User from "./user";

const RegForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    code: "",
    phoneNum: "",
    country: "",
    state: "",
    address: "",
    pin: "",
  });
  const [msg, setMsg] = useState({
    mfirstName: "",
    mlastName: "",
    memailId: "",
    mcode: "",
    mphoneNum: "",
    mcountry: "",
    mstate: "",
    maddress: "",
    mpin: "",
  });
 const dispatch=useDispatch();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  console.log(cities)

  useEffect(() => {
    const countryData = Country.getAllCountries();
    setCountries(countryData);
  }, []);

  const handleCountryChange = (selectedCountry) => {
    const statesData = State.getStatesOfCountry(selectedCountry.isoCode);
    setStates(statesData);
    setDetails({ ...details, country: selectedCountry.isoCode, state: "", address: "" });
  };

  const handleStateChange = (selectedState) => {
    const citiesData = City.getCitiesOfState(selectedState.isoCode);
    setCities(citiesData);
    setDetails({ ...details, state: selectedState.isoCode, address: "" });
  };

   
  const handleSubmit = () => {
    if (details.firstName.length < 5) {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        mcity: "",
        mpin: "",
      });
      setMsg({ ...msg, mfirstName: "Enter Valid name" });
    } else if (details.lastName.length < 5) {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, mlastName: "Enter Valid name" });
    } else if (
      details.emailId === "" ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(details.emailId)
    ) {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, memailId: "Enter a valid email Id" });
    } else if (details.code == "") {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, mcode: "Enter a valid code" });
    } else if (details.phoneNum.length != 10) {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, mphoneNum: "Phone number invalid" });
    } else if (details.country == "") {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, mcountry: "Select the country" });
    } else if (details.state == "") {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, mstate: "Select state" });
    } else if (details.pin.length != 6) {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      setMsg({ ...msg, mpin: "Enter valid pincode" });
    } else {
      setMsg({
        mfirstName: "",
        mlastName: "",
        memailId: "",
        mcode: "",
        mphoneNum: "",
        mcountry: "",
        mstate: "",
        maddress: "",
        mpin: "",
      });
      
     dispatch(addData(details)) 
     setDetails({
      firstName: "",
      lastName: "",
      emailId: "",
      code: "",
      phoneNum: "",
      country: "",
      state: "",
      address: "",
      pin: "",
    });
    setSubmitted(true);
    }
  };

  if(submitted){
    return <Navigate to="/user" />
  }
  return (
    <div className="main-container flex flex-col items-center justify-center ">
      <div className="ml-[80%]"><Link to='/user'><button className="border border-black p-1 rounded-lg bg-violet-300 ">View User</button></Link></div>
      <div >
      <div className="border border-black flex flex-col gap-8 p-5 m-5 rounded-2xl ">
        <h3 className="font-bold text-2xl">New User</h3>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 w-[100%]">
            <div className="w-[50%]">
              <input className="w-[100%] p-1 outline-none rounded-lg"
                placeholder="First Name"
                value={details.firstName}
                onChange={(e) =>
                  setDetails({ ...details, firstName: e.target.value })
                }
              />
              <p className="h-6 text-red-400 text-left m-1">{msg.mfirstName}</p>
            </div>
            <div className="w-[50%]">
              <input className="w-[100%] p-1 outline-none rounded-lg"
                placeholder="Last Name"
                value={details.lastName}
                onChange={(e) =>
                  setDetails({ ...details, lastName: e.target.value })
                }
              />
              <p className="h-6 text-red-400 text-left m-1">{msg.mlastName}</p>
            </div>
          </div>

          <div className="">
            <input
              className="w-[100%] p-1 outline-none rounded-lg"
              placeholder="Email-Id"
              value={details.emailId}
              onChange={(e) =>
                setDetails({ ...details, emailId: e.target.value })
              }
            />
            <p className="h-6 text-red-400 text-left m-1">{msg.memailId}</p>
          </div>

          <div className="flex flex-row gap-2">
            <div className="w-[50%]">
              <input className="w-[100%] p-1 outline-none rounded-lg"
                placeholder="Code"
                type="number"
                value={details.code}
                onChange={(e) =>
                  setDetails({ ...details, code: e.target.value })
                }
              />
              <p className="h-6 text-red-400 text-left m-1">{msg.mcode}</p>
            </div>
            <div className="w-[50%]">
              <input className="w-[100%] p-1 outline-none rounded-lg"
                type="number"
                placeholder="Phone-Number"
                value={details.phoneNum}
                onChange={(e) =>
                  setDetails({ ...details, phoneNum: e.target.value })
                }
              />
              <p className="h-6 text-red-400 text-left m-1">{msg.mphoneNum}</p>
            </div>
          </div>

          <div className="flex gap-2 w-[100%]">
      <div className="w-[50%]">
        <select className="w-[100%] p-1 outline-none rounded-lg"
          value={details.country}
          onChange={(e) => handleCountryChange(countries.find(country => country.isoCode === e.target.value))}
        >
          <option className="h-3" value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
        <p className="h-6 text-red-400 text-left m-1">{msg.mcountry}</p>
      </div>
      <div className="w-[50%]">
        <select className="w-[100%] p-1 outline-none rounded-lg"
          value={details.state}
          onChange={(e) => handleStateChange(states.find(state => state.isoCode === e.target.value))}
        >
          <option className="h-[50%]"  value="">Select State</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
        <p className="h-6 text-red-400 text-left m-1">{msg.mstate}</p>
      </div>
    </div>

          <div className="flex gap-2">
          <div className="w-[50%]">
              <input className="w-[100%] p-1 outline-none rounded-lg"
                placeholder="Address"
                value={details.address}
                onChange={(e) => setDetails({ ...details, address: e.target.value })}
              />
              <p className="h-6 text-red-400 text-left m-1">{msg.maddress}</p>
            </div>

            <div className="w-[50%]">
              <input className="w-[100%] p-1 outline-none rounded-lg"
                placeholder="Pincode"
                type="number"
                value={details.pin}
                onChange={(e) =>
                  setDetails({ ...details, pin: e.target.value })
                }
              />
              <p className="h-6 text-red-400 text-left m-1">{msg.mpin}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="border p-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 font-bold w-32" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};
export default RegForm;
















