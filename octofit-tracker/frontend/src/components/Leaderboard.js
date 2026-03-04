import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
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
        <h2 className="card-title mb-4 text-success">Leaderboard</h2> 
        <table className="table table-hover table-bordered"> 
          <thead className="table-success"> 
            <tr> 
              <th>Name</th> 
              <th>Points</th> 
            </tr> 
          </thead> 
          <tbody> 
            {data.map((item, idx) => ( 
              <tr key={item.id || idx}> 
                <td>{item.name}</td> 
                <td>{item.points}</td> 
              </tr> 
            ))} 
          </tbody> 
        </table> 
      </div> 
    </div> 
  ); 
};
export default Leaderboard;
