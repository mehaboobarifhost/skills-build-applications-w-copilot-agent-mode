import React, { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
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
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((item, idx) => <li key={item.id || idx}>{JSON.stringify(item)}</li>)}
      </ul>
    </div>
  );
};
export default Users;
