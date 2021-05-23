import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveUser } from '../redux/actions/CredentialActions';
import { LogIn } from '../redux/actions/AuthActions';
function Home() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const { savedUser } = useSelector((state) => state.CredentialReducer);
  const dispatch = useDispatch();
  const onPressLogin = (e) => {
    e.preventDefault();
    console.log({ loginEmail, loginPassword });
    
    const exists = savedUser.find(
      (user) => user.email == loginEmail && user.password == loginPassword
    );
    if (exists) {
      dispatch(LogIn({ email: loginEmail, password: loginPassword }));
    } else {
      alert('user does not exists');
    }
  };
  const onPressSignup = (e) => {
    e.preventDefault();
    console.log({ signupEmail, signupPassword });
    dispatch(SaveUser({ email: signupEmail, password: signupPassword }));
    dispatch(LogIn({ email: signupEmail, password: signupPassword }));
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-evenly', color:'gold'}}>
      <div style={{ 
        border:'solid 2px #FFD700',
        borderRadius:'5px',
        height:'350px', 
        width: '280px',
        marginTop:'100px',
        display :'flex',
        flexDirection:'column',
        alignItems:'center'
        }}>
        <h1>Login</h1>
        <form 
        onSubmit={onPressLogin}
        style={{
          display: 'flex',
          flexDirection:'column',
          height: '300px',
          justifyContent:'space-evenly'
        }}>
          {/* <div> */}
            <label>
              Email:
            </label>
              <input
                style={{backgroundColor:'transparent', width:'230px',color:'orange'}}
                id={'email'}
                type={'email'}
                value={loginEmail}
                required
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            
          {/* </div> */}
            <label>
              Password:
              </label>
              <input
                style={{backgroundColor:'transparent', width:'230px', color:'orange'}}
                id={'password'}
                required
                type={'password'}
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
          <div style={{display:'flex', justifyContent:'center'}}>
            <input style={{backgroundColor:'#00BFFF'}} type={'submit'} value={'login'} />
          </div>
        </form>
      </div>

      <div style={{
        border:'solid 2px #FFD700',
        borderRadius:'5px',
        height:'350px', 
        width: '280px',
        marginTop:'100px',
        display :'flex',
        flexDirection:'column',
        alignItems:'center'
       }}>
        <h1>Signup</h1>
        <form 
        onSubmit={onPressSignup}
        style={{
          display: 'flex',
          flexDirection:'column',
          height: '300px',
          justifyContent:'space-evenly'
        }}>
            <label>
              Email:
            </label>
              <input
                style={{backgroundColor:'transparent', width:'230px', color:'orange'}}
                id={'email'}
                type={'email'}
                value={signupEmail}
                required
                onChange={(e) => {
                  setSignupEmail(e.target.value);
                }}
              />
            
            <label>
              Password:
            </label>
              <input
                style={{backgroundColor:'transparent', width:'230px',color:'orange'}}
                id={'password'}
                required
                type={'password'}
                value={signupPassword}
                onChange={(e) => {
                  setSignupPassword(e.target.value);
                }}
              />
           
          <div style={{display:'flex', justifyContent:'center'}}>
            <input style={{backgroundColor:'#00BFFF'}} type={'submit'} value={'Signup'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
