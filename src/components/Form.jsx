import React, { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setname] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setname(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);
    return random + dateNow;
  };

  const onChangeName = (e) => {
    setname(e.target.value);
  };
  const onChangeOwner = (e) => {
    setOwner(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeSymptoms = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }

    const newPatient = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      // Editando
      newPatient.id = patient.id;
      const updatedPatients = patients.map((i) =>
        i.id === patient.id ? newPatient : i
      );

      setPatients(updatedPatients);
      setPatient({});
    } else {
      // Creando registro
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    // Reiniciar
    setname("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-semibold text-3xl text-center">Patient Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Add a patient and{" "}
        <span className="text-green-700 font-bold">manage it.</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded py-10 px-5 mb-10"
      >
        {error && <Error msg="All fields are required..." />}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Pet Name"
            className="border-2 border-green-700 p-2 w-full mt-2 placeholder-stone-400 rounded"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ownerName"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Owner Name"
            className="border-2 border-green-700  p-2 w-full mt-2 placeholder-stone-400 rounded"
            value={owner}
            onChange={onChangeOwner}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 border-green-700  p-2 w-full mt-2 placeholder-stone-400 rounded"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="checkin"
            className="block text-gray-700 uppercase font-bold"
          >
            Check In
          </label>
          <input
            id="checkin"
            type="date"
            className="border-2 border-green-700  p-2 w-full mt-2 placeholder-stone-400 rounded"
            value={date}
            onChange={onChangeDate}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="checkin"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            name="symptoms"
            id="symptoms"
            placeholder="Symptoms"
            className="border-2 border-green-700  p-2 w-full mt-2 placeholder-stone-400 rounded"
            value={symptoms}
            onChange={onChangeSymptoms}
          ></textarea>
        </div>
        <input
          type="submit"
          className={
            patient.id
              ? "bg-yellow-500  rounded text-center w-full p-2 hover:bg-yellow-400 cursor-pointer transition-all"
              : "bg-green-700  rounded text-center text-white font-semibold w-full p-2 hover:bg-green-800 cursor-pointer transition-all"
          }
          value={patient.id ? "Edit Patient" : "Save"}
        />
      </form>
    </div>
  );
};

export default Form;
