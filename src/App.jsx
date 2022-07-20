import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getPatientsLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem("Patients")) ?? [];
      setPatients(patientsLS);
    };
    getPatientsLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("Patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatePatients = patients.filter((i) => i.id !== id);

    setPatients(updatePatients);
  };

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-5 mx-8 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <List
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
