import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
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
        <h2 className="card-title mb-4 text-warning">Workouts</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-warning">
            <tr>
              <th>Name</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            {data.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.name}</td>
                <td>{workout.sets}</td>
                <td>{workout.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-warning mt-3">Add Workout</button>
      </div>
    </div>
  );
};
export default Workouts;
