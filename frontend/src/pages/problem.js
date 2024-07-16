import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../context/user/userContext';
import { useParams } from 'react-router-dom';
import { getTestCases } from '../service/api';
import Compiler from './compiler';
import { DescriptionCard, SubmissionCard, AllSubmissionsCard } from '../component';

const Problem = () => {
  const { code } = useParams();
  const { user, fetchUserProfile } = useContext(UserContext);

  const initialCode = `// Your First C++ Program
    #include <bits/stdc++.h>
    using namespace std;

    int main(){
        cout << "Hello World !";
        return 0;
    }
  `;

  const [problem, setProblem] = useState({
    code: "",
    title: "",
    description: "",
    constraints: [""],
    tags: [""],
    testcaseId: [""],
    timelimit: 0,
    memorylimit: 0,
    difficulty: "",
  });

  const [testcases, setTestcases] = useState({
    input1: '',
    output1: '',
    input2: '',
    output2: '',
  });

  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchTestCases = async () => {
      try {
        const response = await getTestCases(code);
        if (response.success) {
          setTestcases({
            input1: response.testcases[0].input,
            output1: response.testcases[0].output,
            input2: response.testcases[1].input,
            output2: response.testcases[1].output,
          });
          setProblem(response.existProblem);
        }
      } catch (err) {
        console.log("Error in getting TestCases", err);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
    fetchTestCases();
  }, [user, fetchUserProfile, code]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Problem" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Problem cards section */}
          <div className="col-lg-5 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 rounded-3" style={{ backgroundColor: '#ffffff' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <button
                    className={`btn btn-sm btn-${activeTab === 'description' ? 'primary' : 'secondary'} px-4`}
                    onClick={() => handleTabClick('description')}
                  >
                    Description
                  </button>
                  <button
                    className={`btn btn-sm btn-${activeTab === 'submission' ? 'primary' : 'secondary'} px-4`}
                    onClick={() => handleTabClick('submission')}
                  >
                    Submission
                  </button>
                  <button
                    className={`btn btn-sm btn-${activeTab === 'allSubmissions' ? 'primary' : 'secondary'} px-4`}
                    onClick={() => handleTabClick('allSubmissions')}
                  >
                    All Submissions
                  </button>
                </div>

                {/* Conditionally render cards based on button click */}
                {activeTab === 'description' && <DescriptionCard problem={problem} testcases={testcases} />}
                {activeTab === 'submission' && <SubmissionCard problemId={problem._id} userId={user._id} />}
                {activeTab === 'allSubmissions' && <AllSubmissionsCard problemId={problem._id} />}
              </div>
            </div>
          </div>

          {/* Compiler card section */}
          <div className="col-lg-7 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 rounded-3" style={{ backgroundColor: '#ffffff' }}>
                <h5 className="card-title mb-4">Compiler</h5>
                <Compiler problem={problem} initialCode={initialCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
