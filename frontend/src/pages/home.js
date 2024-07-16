import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { getAllContest } from '../service/api';

const Home = () => {
  const [allContest, setAllContest] = useState([]);

  const fetchData = async () => {
    try {
        const response = await getAllContest();
        console.log("Here is my get contest:", response.data);
        setAllContest(response.data);
    } catch (error) {
        console.log("Error in fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateDaysLeft = (startTime) => {
    const currentDate = new Date();
    const startDate = new Date(startTime);
    const timeDiff = startDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  };

  return (
    <>
      <div>
        <h1>Welcome to ProCoder Arena </h1>
      </div>
    </>
  );
};

export default Home;
