import React, { useState, useEffect } from "react";
import "../components/Home.css";
import axios from "axios";

const activitiesUrl = "http://www.boredapi.com/api/activity/";

const Home = () => {
    const [activityData, setActivityData] = useState('')

    async function fetchActivities() {
        const response = await fetch('http://www.boredapi.com/api/activity/', { cache: "no-cache" });
        const activityData = await response.json();
        console.log(`Data: ${JSON.stringify(activityData)}`);
      }

      const  submitHandler = () => {
        setActivityData(fetchActivities)
      }
      fetchActivities();


  return (
    <div>
      <h1 className="Welcome"> Welcome </h1>
      <h2 className="Activities"> Activities</h2>
      <p>{fetchActivities}</p>
      <button onClick={submitHandler}>Search</button>
    </div>
  );
};

export default Home;
