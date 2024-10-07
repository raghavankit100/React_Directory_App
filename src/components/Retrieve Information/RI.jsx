import { useEffect, useState } from "react";

export default function RI() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
    setData(dataFromLocalStorage);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = data.filter((ele) => ele.aadhar.includes(input));
    setResult(filteredData);
  };
  return (
    <div className="mx-8 border p-8 h-[70vh]  relative">
      <div>
        <h2 className="text-xl absolute top-0 left-0 border-r border-b p-4">
          Retrieve Information
        </h2>

        <form action="" className="mt-12 w-1/2">
          <input
            type="number"
            placeholder="Search Using Aadhar Number...."
            className="w-1/2 border px-4 py-4 rounded mr-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-8 py-4 rounded font-bold"
            onClick={(e) => handleSearch(e)}
          >
            Find
          </button>
        </form>

        {result.length > 0 ? (
          <table className="mt-12 w-full">
            <thead className=" bg-blue-500 text-white ">
              <th className="p-4">Name</th>
              <th className="p-4">Date of Birth</th>
              <th className="p-4">Aadhar Number</th>
              <th className="p-4">Mobile Number</th>
              <th className="p-4">Age</th>
            </thead>
            <tbody className="border border-collapse">
              {result.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="border p-3 text-center">{user.name}</td>
                    <td className="border p-3  text-center">{user.dob}</td>
                    <td className="border p-3  text-center">{user.aadhar}</td>
                    <td className="border p-3  text-center">{user.mobile}</td>
                    <td className="border p-3  text-center">{user.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-2xl font-bold mt-20">No Data</div>
        )}
      </div>
    </div>
  );
}
