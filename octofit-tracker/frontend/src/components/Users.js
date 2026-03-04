import React, { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching from:', endpoint);
    fetch(endpoint).then(res => res.json()).then(json => {
      const results = json.results || json;
      setData(results);
      console.log('Fetched data:', results);
    });
  }, []);
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-secondary">Users</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-secondary">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-secondary mt-3">Add User</button>
      </div>
    </div>
  );
};
export default Users;
