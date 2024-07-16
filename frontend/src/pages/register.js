import { useState } from 'react';
import '../styles/register.css';
import { uploadData } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await uploadData(user);
      console.log('Response at handleSubmit', response);
      if (response.status === 201) {
        navigate('/');
      }
    } catch (err) {
      console.error('Error in handleSubmit', err);
    }
  };

  return (
    <div className="Register">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="center-box bg-light">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label htmlFor="InputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputFirstName"
                      name="firstname"
                      placeholder="First name"
                      value={user.firstname}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="InputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputLastName"
                      name="lastname"
                      placeholder="Last name"
                      value={user.lastname}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputRole">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputRole"
                    name="role"
                    placeholder="Role"
                    value={user.role}
                    onChange={handleInput}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{
                  background: '#4e54c8',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  marginTop: '20px',
                }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
