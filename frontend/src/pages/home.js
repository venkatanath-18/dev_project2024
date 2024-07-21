import React from 'react';

const HomePage = () => {
  const styles = {
    homePage: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    },
    h1: {
      fontSize: '2.5em',
      marginBottom: '0.5em',
      color: '#333',
    },
    h2: {
      fontSize: '2em',
      marginTop: '1.5em',
      color: '#444',
    },
    p: {
      fontSize: '1.2em',
      color: '#555',
    },
    ul: {
      margin: '20px 0',
      paddingLeft: '20px',
    },
    ol: {
      margin: '20px 0',
      paddingLeft: '20px',
    },
    li: {
      marginBottom: '10px',
    },
    strong: {
      color: '#000',
    },
    '@media (maxWidth: 768px)': {
      homePage: {
        padding: '10px',
      },
      h1: {
        fontSize: '2em',
      },
      h2: {
        fontSize: '1.5em',
      },
      p: {
        fontSize: '1em',
      },
      ul: {
        fontSize: '1em',
      },
      ol: {
        fontSize: '1em',
      },
    },
  };

  return (
    <div style={styles.homePage}>
      <h1 style={styles.h1}>Welcome to the Online Judge Platform</h1>
      <p style={styles.p}>
        Welcome to our Online Judge platform, a comprehensive environment for programmers of all levels to hone their coding skills. Here, you can tackle a variety of coding challenges, test your solutions against real-world scenarios, and see how you stack up against your peers on the leaderboard.
      </p>
      
      <h2 style={styles.h2}>Features:</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <strong style={styles.strong}>Wide Range of Problems:</strong> Browse through a diverse set of coding problems across multiple domains and difficulty levels. Whether you're a beginner looking to practice basic concepts or an experienced coder seeking advanced challenges, there's something here for everyone.
        </li>
        <li style={styles.li}>
          <strong style={styles.strong}>Real-Time Feedback:</strong> Submit your code and receive instant feedback on its correctness and efficiency. Our robust evaluation system ensures your solutions are tested against a comprehensive set of test cases.
        </li>
        <li style={styles.li}>
          <strong style={styles.strong}>User Profiles:</strong> Track your progress and showcase your achievements. View your past submissions, rankings, and coding history all in one place.
        </li>
        <li style={styles.li}>
          <strong style={styles.strong}>Leaderboard:</strong> Compete with other users and climb the ranks. Solve problems to earn points and see where you stand in the global coding community.
        </li>
        <li style={styles.li}>
          <strong style={styles.strong}>Code Editor:</strong> Write and test your code directly on our platform with support for multiple programming languages. Use the integrated code editor to run initial tests before submitting your final solution.
        </li>
        <li style={styles.li}>
          <strong style={styles.strong}>Tags and Sorting:</strong> Easily find problems that match your interest and skill level using our sorting and tagging system. Filter problems by difficulty, topic, and more to tailor your coding practice.
        </li>
      </ul>
      
      <h2 style={styles.h2}>How to Get Started:</h2>
      <ol style={styles.ol}>
        <li style={styles.li}><strong style={styles.strong}>Explore Problems:</strong> Head over to the problem set and start exploring the various challenges available.</li>
        <li style={styles.li}><strong style={styles.strong}>Run and Submit Code:</strong> Use the code editor to write your solutions. Run preliminary tests to check your code, then submit it for full evaluation.</li>
        <li style={styles.li}><strong style={styles.strong}>View Feedback:</strong> Receive detailed feedback on your submissions, including which test cases passed or failed.</li>
        <li style={styles.li}><strong style={styles.strong}>Improve and Compete:</strong> Learn from the feedback, improve your code, and resubmit if needed. Check the leaderboard to see how your efforts measure up against others.</li>
      </ol>
      
      <p style={styles.p}>
        Join our community of coders and start solving problems today. Whether you're preparing for coding interviews, participating in competitive programming, or just looking to improve your skills, our platform is here to support your journey.
      </p>
    </div>
  );
};

export default HomePage;
