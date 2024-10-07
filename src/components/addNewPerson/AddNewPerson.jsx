import { useEffect, useState } from "react";

export default function AddNewPerson() {
  const [age, setAge] = useState(0);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [users, setUsers] = useState("");

  const handleAge = (e) => {
    const dateFilled = e.target.value;
    const dateFromFilledDate = new Date(dateFilled);

    const currentYear = new Date();
    setAge(currentYear.getFullYear() - dateFromFilledDate.getFullYear());
  };

  const handleLocalStorage = (e) => {
    e.preventDefault();
    if (name != "" && dob != "" && aadhar != "") {
      const formData = { name, dob, aadhar, mobile, age };
      const dataFromLocalStorage =
        JSON.parse(localStorage.getItem("data")) || [];

      dataFromLocalStorage.push(formData);

      localStorage.setItem("data", JSON.stringify(dataFromLocalStorage));
      fetchDataFromLocalStorage();
    }
  };

  const handleDelete = (index) => {
    users.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(users));
    setUsers(JSON.parse(localStorage.getItem("data")));
    fetchDataFromLocalStorage();
  };

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, [name, dob, aadhar, mobile, age]);

  function fetchDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    setUsers(data);
  }
  return (
    <div className="mx-8 border p-8 h-[70vh]  relative">
      <div>
        <h2 className="text-xl absolute top-0 left-0 border-r border-b p-4">
          Add New Person
        </h2>
        {/* table */}
        {users.length > 0 && (
          <table className="mt-12 w-full ">
            <thead className=" bg-blue-500 text-white ">
              <th className="p-4">Name</th>
              <th className="p-4">Date of Birth</th>
              <th className="p-4">Aadhar Number</th>
              <th className="p-4">Mobile Number</th>
              <th className="p-4">Age</th>
              <th className="p-4">Actions</th>
            </thead>
            <tbody className="border border-collapse">
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="border p-3 text-center">{user.name}</td>
                    <td className="border p-3  text-center">{user.dob}</td>
                    <td className="border p-3  text-center">{user.aadhar}</td>
                    <td className="border p-3  text-center">{user.mobile}</td>
                    <td className="border p-3  text-center">{user.age}</td>
                    <td
                      className="border p-3  text-center cursor-pointer "
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {/* form */}
        {open && (
          <div className="mt-12 flex flex-col justify-center items-center p-4 bg-blue-500 rounded text-white">
            <h3 className="text-lg mb-4">Fill Below form for New Entry</h3>
            <form onSubmit={handleLocalStorage} className="flex w-full ">
              <input
                type="text"
                placeholder="Name"
                className="border py-2 px-4  text-black grow"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="date"
                // onChange={handleAge}
                className="border py-2 px-4  text-black grow"
                name="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  handleAge(e);
                }}
                required
              />
              <input
                type="number"
                placeholder="Aadhar Number"
                className="border py-2 px-4  text-black grow"
                name="aadhar "
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                required
                min="100000000000"
                max="999999999999"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="border py-2 px-4  text-black grow"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required="true"
                min="1000000000"
                max="9999999999"
              />
              <input
                className="border py-2 px-4  text-black grow bg-white "
                value={age}
                name="age"
              />

              <button
                type="submit"
                className="border py-2 px-4  text-black grow bg-white"
              >
                Save
              </button>
            </form>
          </div>
        )}

        <button
          className="bg-blue-500 text-white px-8 py-4 rounded absolute bottom-8 right-8"
          onClick={() => setOpen(!open)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
