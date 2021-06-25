import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const AddContact = () => {;
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state);


  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      date,
      number,
    };
    dispatch({ type: "ADD_TASK", payload: data });
    toast.success("Task added succesfully");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
            <span>D.O.B</span>
           <DatePicker onChange={setDate}  value={date} />
            </div>
            <div className="form-group">
            <input
                className="form-control"
                type="number"
                placeholder="Contact"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;