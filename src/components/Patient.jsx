const Patient = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, date, symptoms, id } = patient;

  const handleDelete = () => {
    const res = confirm("Do you really want to delete this patient?");
    if (res) {
      deletePatient(patient.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded md:mx-5 py-5 px-10 mb-5">
      <p className="font-semibold text-gray-700 ">
        Name: <span className="font-normal">{name}</span>
      </p>
      <hr className="my-3" />
      <p className="font-semibold mb-2 text-gray-700 ">
        Owner Name: <span className="font-normal">{owner}</span>
      </p>
      <p className="font-semibold mb-2 text-gray-700 ">
        Email: <span className="font-normal">{email}</span>
      </p>
      <p className="font-semibold mb-2 text-gray-700 ">
        Check In: <span className="font-normal">{date}</span>
      </p>
      <p className="font-semibold mb-2 text-gray-700 ">
        Symptoms: <span className="font-normal">{symptoms}</span>
      </p>
      <div className="mt-5">
        <button
          type="button"
          className="mr-2 py-1 px-8 bg-green-700 hover:bg-green-800 text-center text-white rounded cursor-pointer transition-all"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-1 px-8 bg-yellow-500 hover:bg-red-600 hover:text-white text-center text-gray-800 rounded cursor-pointer transition-all"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
