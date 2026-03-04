import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched data:', results);
      });
  }, []);
  return ( 
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-info">Teams</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-info">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id || idx}>
                <td>{item.name || 'N/A'}</td>
                <td>{item.members || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-3">Create Team</button>
      </div>
    </div>
};
export default Teams;
