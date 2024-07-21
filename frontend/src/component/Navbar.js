import React, { useContext, useEffect } from 'react';
import { getProfile, delSession, getAdmin } from '../service/api';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, fetchUserProfile } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      fetchUserProfile();
    }
  }, [user]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await delSession();
      console.log("Response while logout: ", response);
      if (response.success) {
        window.location.href = '/';
      }
    } catch (err) {
      console.log("Error while logout: ", err);
    }
  };

  const handleProfilePage = async (e) => {
    e.preventDefault();
    try {
      const response = await getProfile();
      console.log("response profile : ", response);
      if (response.success) {
        navigate('/profile');
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error('Error while checking authentication:', err);
    }
  };

  const handleAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await getAdmin();
      console.log("response profile : ", response);
      if (response.success) {
        navigate('/admin');
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error('Error while checking authentication:', err);
    }
  };

  const linkStyle = {
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '20px',
    textDecoration: 'none',
    margin: '0 5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  };

  const applyHoverStyle = (e) => {
    e.target.style.backgroundColor = '#0056b3';
    e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
  };

  const removeHoverStyle = (e) => {
    e.target.style.backgroundColor = '#007bff';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  };

  const navStyle = {
    backgroundColor: '#f8f9fa',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: '#333' }}>ProCoder Arena</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/problemset" 
                style={linkStyle} 
                onMouseEnter={applyHoverStyle}
                onMouseLeave={removeHoverStyle}
              >ProblemSet</Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                onClick={handleProfilePage} 
                style={linkStyle} 
                onMouseEnter={applyHoverStyle}
                onMouseLeave={removeHoverStyle}
              >Profile</Link>
            </li>
            {user && user.role === 'admin' && (
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  onClick={handleAdmin} 
                  style={linkStyle} 
                  onMouseEnter={applyHoverStyle}
                  onMouseLeave={removeHoverStyle}
                >Admin</Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user && (
              <>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    to="/login" 
                    style={linkStyle} 
                    onMouseEnter={applyHoverStyle}
                    onMouseLeave={removeHoverStyle}
                  >Login</Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    to="/register" 
                    style={linkStyle} 
                    onMouseEnter={applyHoverStyle}
                    onMouseLeave={removeHoverStyle}
                  >Register</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    onClick={handleProfilePage} 
                    style={linkStyle} 
                    onMouseEnter={applyHoverStyle}
                    onMouseLeave={removeHoverStyle}
                  >{user.firstname}</Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    onClick={handleLogout} 
                    style={linkStyle} 
                    onMouseEnter={applyHoverStyle}
                    onMouseLeave={removeHoverStyle}
                  >Logout</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
