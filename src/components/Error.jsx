const Error = ({ msg }) => {
  return (
    <div className="bg-red-100 text-red-700 text-center py-2 mb-2 rounded">
      <p>{msg}</p>
    </div>
  );
};

export default Error;
