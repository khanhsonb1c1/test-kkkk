import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState, useLayoutEffect } from "react";

//styles
import {Wrap} from './index.styles'
import ModalComponent from "../../components/Modal";
import { account } from "../../axiosconfig";
import LoadingComponent from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountType from "../../type/AccountType";


type Inputs = {
  user_email: string;
  password: string;
  retype_password: string;
  accept_term: boolean;
};

function Login() {

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);


   const [accountList, setAccountList] = useState(Array<AccountType>);

  const [email, setEmail] = useState(""); 
  const [pass, setPass] = useState(""); 

  const navigate = useNavigate()

  useLayoutEffect(() => {
    handleFetchData();
  }, []);



  const handleFetchData = () => {
    account.get("/account").then(({ data }) => {
      setAccountList(data);
    });
  };

  const handleSubmitForm = () => {
  const find_acc =  accountList.find((acc) => {
      return  acc.email === email;
    })

    if(find_acc) {
        if(find_acc.password === pass){
            navigate("/")
        } else {
           toast("Please enter your correct password")
        }
    } else {
      toast("Can not find your account");
      navigate("/register")

    }
  }
  const handleNavigate = () => {
    navigate("/register")
  }

  return (
    <Wrap>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto card-style"
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-gray text-center mb-4 campaigns">
                  Your Social Campaigns
                </p>
                <button type="button" className="btn btn-danger w-100 p-2 mb-2">
                  Sign in with Google
                </button>
                <button type="button" className="btn btn-primary w-100 p-2">
                  Sign in with Facebook
                </button>
                <div className="email-container">
                    <span className="email-line" />
                    <div className="options">Or with email</div>
                    <span className="email-line" />
                </div>
                <div className="form-floating mb-4 w-100">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="formControlLg" className="form-label">
                      Email
                    </label>
                  
                  </div>
                  <div className="form-floating mb-4 w-100">
                    <input
                      type="password"
                      className="form-control"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <label htmlFor="formControlLg" className="form-label">
                      Password
                    </label>
                    
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 p-2 mb-4"
                    onClick={handleSubmitForm}
                  >
                    Submit
                  </button>
                <button  
                    type="submit"
                    className="btn btn-secondary w-100 p-2"
                    onClick={handleNavigate}
                >
                    Sign up</button>               

                {err && (
                  <span className="text-danger fs-small mt-3">{err}</span>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <ToastContainer />

      </MDBContainer>
      {loading && <LoadingComponent />}
    </Wrap>
  );
}

export default Login;
