import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div 
              className="mission" data-testid="missions" key={mission.mission_id}
            >
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;


// List of Prop states for setting up tests
/**  
* Props states
*
* error
*  - empty string (no error)
*  - error string 
*
* missions
*  - empty array (starting state before API call)
*  - array of missions
*
*/