import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
      {users != null ? (
        <div className="card text-center m-3">
          <h5 className="card-header">GET Users Request</h5>
          <div className="card-body">User first name: {users.first_name}</div>
          <div className="card-body">User last name: {users.last_name}</div>
          <div className="card-body">User age: {users.age}</div>
          <div className="card-body">User email: {users.email}</div>
        </div>
      ) : null}
    </>
  );
}

export default App;
