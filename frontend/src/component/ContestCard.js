
import { useNavigate } from "react-router-dom";

const ContestCard = ({ iconClass, contestType, daysLeft, rating, title, contestCode, progress, applied, capacity }) => {
  
  const navigate = useNavigate();

  const handleContestRegister = (contestCode, event) => {
    event.preventDefault();
    navigate(`/contests/${contestCode}`);
  };
  
  
  
  return (
      <div className="col-md-4">
        <div className="card contest-card p-3 mb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="icon"> 
                <i className={iconClass}></i> 
              </div>
              <div className="ms-2 c-details">
                <h6 className="mb-0">{contestType}</h6> 
                <span>{daysLeft} days left</span>
              </div>
            </div>
            <div className="badge"> 
              <span>Rating: {rating}</span> 
            </div>
          </div>
          
          <div className="mt-5">
            <div className="row">
              <div className="col-12">
                <h3 className="heading">{title}</h3>
              </div>
            </div>
            <div className="mt-3">
              <div className="progress bg-light">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="mt-3">
                <span className="text1 text-dark">{applied} Applied</span>
                <span className="text2 text-dark ms-1">of {capacity} capacity</span>
              </div>
            </div>
            <div className="text-end mt-4">
              <button type="button" 
              className="btn btn-outline-secondary"
              onClick={(event) => handleContestRegister(contestCode, event)}>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ContestCard;
  