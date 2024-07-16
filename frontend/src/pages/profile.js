import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import { UserProblemRow } from '../component';
import { getSubmission, getProblemSet } from '../service/api';

const Profile = () => {
  const { user, fetchUserProfile } = useContext(UserContext);
  const [submitProblem, setSubmitProblem] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state to manage loading state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProblemSet();
        const problems = response;
        const allSubmissionsResponse = await getSubmission();
        const allSubmissions = allSubmissionsResponse.data.submissions;

        if (allSubmissions.length > 0 && problems.length > 0) {
          const matchedProblems = [];

          allSubmissions.forEach((submission) => {
            if (submission.isPassed) {
              const matchedProblem = problems.find(
                (problem) => problem._id === submission.problemId
              );
              if (
                matchedProblem &&
                !matchedProblems.some(
                  (problem) => problem._id === matchedProblem._id
                )
              ) {
                matchedProblems.push(matchedProblem);
              }
            }
          });

          setSubmitProblem(matchedProblems);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes (or encounters an error)
      }
    };

    if (!user) {
      fetchUserProfile();
    } else {
      fetchData(); // Call fetchData only when user is available
    }
  }, [user, fetchUserProfile]);

  if (!user || loading) {
    return <div>Loading...</div>;
  }

  const handleProblem = (problem, event) => {
    event.preventDefault();
    navigate(`/problemset/problem/${problem.code}`);
  };

  return (
    <div style={{ backgroundColor: '#EAF5FF' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px' }}
                />
                <h5 className="my-3">{`${user.firstname} ${user.lastname}`}</h5>
                
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row gx-3">
              <div className="col-md-12">
                <div className="row-header row custom-row-style">
                  <div className="col-6 col-md-2 p-3">
                    <div className="text-center">Status</div>
                  </div>
                  <div className="col-6 col-md-6 p-3">Title</div>
                  <div className="col-6 col-md-2 p-3">Difficulty</div>
                  <div className="col-6 col-md-2 p-3">Solution</div>
                </div>

                <div className="table">
                  {submitProblem.map((problem, index) => (
                    <UserProblemRow
                      key={problem._id}
                      problem={problem}
                      index={index}
                      handleProblem={handleProblem}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
