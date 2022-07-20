import Patient from "./Patient";

const List = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-semibold text-3xl text-center">
        {patients.length === 0 ? "Add a Patient" : "Manage your Patients"}
      </h2>
      <p className="text-lg mt-5 text-center mb-5">
        Manage yours{" "}
        <span className="text-green-700 font-bold">
          patients and appointments.
        </span>
      </p>
      {patients.map((i) => {
        return (
          <Patient
            key={i.id}
            patient={i}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        );
      })}
    </div>
  );
};

export default List;
