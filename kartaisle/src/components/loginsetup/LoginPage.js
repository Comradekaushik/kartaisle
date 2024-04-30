import React from 'react';
import LoginData from './LoginData';
import '../../styles/loginpage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  const navigate = useNavigate();

  const[userAuthenticationArray,setUserAuthenticationArray] = React.useState(LoginData);

  const passwordInputField = React.useRef(null);
  // const passwordref = passwordInputField.current;

  const usernameInputField = React.useRef(null);
  // const usernameref = usernameInputField.current;



  const showhidebtn = React.useRef(null);

  

  function handleVisibility() {
    if (passwordInputField.current) {
      if (passwordInputField.current.type === 'password') {
        passwordInputField.current.type = 'text';
        showhidebtn.current.innerText = 'Hide';
      } 
      else {
        passwordInputField.current.type = 'password';
        showhidebtn.current.innerText = 'Show';
      }
    }
  }

  function handleLogin(){


    const passwordref = passwordInputField.current;
    const usernameref = usernameInputField.current;
    console.log("clicked");

      if(passwordref && usernameref){
        let passwordentered = passwordref.value;
        let usernameentered = usernameref.value;

        let userfound = 0;

        for(let i = 0;i< userAuthenticationArray.length;i++){
          if(userAuthenticationArray[i].username === usernameentered && userAuthenticationArray[i].password === passwordentered){
            console.log('useristrue');
            navigate('/collections');
            break;
          }

          else if(i === userAuthenticationArray.length - 1 && userfound === 0){
            console.log("no user found");
          }
        }

      }
      else{
        console.log("Not yet rendered");
      }
    }

    const passwordInputFieldreg = React.useRef(null);
    const usernameInputFieldreg = React.useRef(null);
    

    const emailInput = React.useRef(null);

    function registernewuser(){
      if(usernameInputFieldreg.current && passwordInputFieldreg.current && emailInput.current){
        const newUser = {
          username : usernameInputFieldreg.current.value,
          email: emailInput.current.value,
          password : passwordInputFieldreg.current.value

        };

        console.log(newUser.username,newUser.email,newUser.password);
        setUserAuthenticationArray((previousArray)=>{return([...previousArray,newUser])});
        console.log(userAuthenticationArray);
      }
    }

    

    const [showLogin,setShowLogin] = React.useState(1);
    const [showSignUp,setShowSignUp] = React.useState(0);

    function handleShowLogin(){
      if(showLogin === 0){
        setShowLogin(1);
        setShowSignUp(0);

      }
      else if(showLogin === 1){
        setShowLogin(0);
        setShowSignUp(1);

      }


    }
    
    function handleShowSignup(){
      if(showSignUp === 0){
        setShowSignUp(1);
        setShowLogin(0);

      }
      else if(showSignUp === 1){
        setShowSignUp(0);
        setShowLogin(1);

      }

    }
  
  return (
    <>


      <div className="logo-header">
        KARTAISLE
      </div>

      {showLogin === 1 && <div className='login-section'>
              <div className='login-message'>Log in to Kartaisle</div>

              <div className='signup-instead'>Don't have an account? 
              <button className='signup-instead-button' onClick={handleShowSignup}>Sign up</button></div>
              <div className='username-input-container'>

                <input type = 'text' ref={usernameInputField} className='username-input' placeholder='Username'/>
              </div>

              <div className='password-input-container'>

                <input type = 'password' ref={passwordInputField} className='password-input' placeholder='Password'/>
                


              <div className='show-button-container'>
                <button onClick={handleVisibility} ref={showhidebtn} className='show-password-button'>Show</button>
              </div>
              </div>
              
              {/* <div>
                <button onClick={handleVisibility} ref={showhidebtn}>Show</button>
              </div> */}
              

              <div className='login-button-container'>
                <button onClick={handleLogin} className='login-button' >Login</button>
              </div>


              
              


      </div>}
      
      







      {showSignUp === 1 && <div className='signup-section'>
        <div className='signup-message'>Create your free account</div>
        <div className='login-instead'>
            Already have an account? 
            <button className='login-instead-button' onClick={handleShowLogin}>Log in</button>
        </div>
        
        <div className='email-input-container-signup'>
          <input type='email' className='email-input-signup' ref={emailInput} placeholder='you@email.com'/>
        </div>
        
        <div className='username-input-container-signup'>
          <input type = 'text' className='username-input-signup' ref={usernameInputFieldreg} placeholder='username'/>
        </div>

        <div className='password-input-container-signup'>
          <input type = 'password' className='password-input-signup' ref={passwordInputFieldreg} placeholder='Password'/>
        </div>
        
        
        



        <div className='login-button-container'>
          <button onClick={registernewuser} className='register-button-signup'>Register</button>
        </div>
        
        

      </div>}


     
    </>
    
  )
}



// import React from 'react';
// import LoginData from './LoginData';
// import '../../styles/loginpage.css';

// export default function LoginPage() {

//   const[userAuthenticationArray,setUserAuthenticationArray] = React.useState(LoginData);

//   const passwordInputField = React.useRef(null);
//   // const passwordref = passwordInputField.current;

//   const usernameInputField = React.useRef(null);
//   // const usernameref = usernameInputField.current;



//   const showhidebtn = React.useRef(null);

  

//   function handleVisibility() {
//     if (passwordInputField.current) {
//       if (passwordInputField.current.type === 'password') {
//         passwordInputField.current.type = 'text';
//         showhidebtn.current.innerText = 'Hide';
//       } 
//       else {
//         passwordInputField.current.type = 'password';
//         showhidebtn.current.innerText = 'Show';
//       }
//     }
//   }

//   function handleLogin(){
//     console.log("clicked");

//       if(passwordInputField.current && usernameInputField.current){
//         let passwordentered = passwordInputField.current.value;
//         let usernameentered = usernameInputField.current.value;

//         let userfound = 0;

//         for(let i = 0;i< userAuthenticationArray.length;i++){
//           if(userAuthenticationArray[i].username === usernameentered && userAuthenticationArray[i].password === passwordentered){
//             console.log('useristrue');
//             break;
//           }

//           else if(i === userAuthenticationArray.length - 1 && userfound === 0){
//             console.log("no user found");
//           }
//         }

//       }
//       else{
//         console.log("Not yet rendered");
//       }
//     }

//     const passwordInputFieldreg = React.useRef(null);
//     const usernameInputFieldreg = React.useRef(null);
    

//     const emailInput = React.useRef(null);

//     function registernewuser(){
//       if(usernameInputFieldreg.current && passwordInputFieldreg.current && emailInput.current){
//         const newUser = {
//           username : usernameInputFieldreg.current.value,
//           email: emailInput.current.value,
//           password : passwordInputFieldreg.current.value

//         };

//         console.log(newUser.username,newUser.email,newUser.password);
//         setUserAuthenticationArray((previousArray)=>{return([...previousArray,newUser])});
//         console.log(userAuthenticationArray);
//       }
//     }

//     const showlogin = 0;
//     const showsignup = 0;
    
  
//   return (
//     <>


//       <div className="logo-header">
//         KARTAISLE
//       </div>

//       <div className='login-section'>
//               <div className='login-message'>Log in to Kartaisle</div>

//               <div className='signup-instead'>Don't have an account? 
//               <button className='signup-instead-button'>Sign up</button></div>
//               <div className='username-input-container'>

//                 <input type = 'text' ref={usernameInputField} className='username-input' placeholder='Username'/>
//               </div>

//               <div className='password-input-container'>

//                 <input type = 'password' ref={passwordInputField} className='password-input' placeholder='Password'/>
                


//               <div className='show-button-container'>
//                 <button onClick={handleVisibility} ref={showhidebtn} className='show-password-button'>Show</button>
//               </div>
//               </div>
              
//               {/* <div>
//                 <button onClick={handleVisibility} ref={showhidebtn}>Show</button>
//               </div> */}
              

//               <div className='login-button-container'>
//                 <button onClick={handleLogin} className='login-button' >Login</button>
//               </div>
              


//       </div>
      
      







//       <div className='signup-section'>
//         <div className='signup-message'>Create your free account</div>
//         <div className='login-instead'>
//             Already have an account? 
//             <button className='login-instead-button'>Log in</button>
//         </div>
        
//         <div className='email-input-container-signup'>
//           <input type='email' className='email-input-signup' ref={emailInput} placeholder='you@email.com'/>
//         </div>
        
//         <div className='username-input-container-signup'>
//           <input type = 'text' className='username-input-signup' ref={usernameInputFieldreg} placeholder='username'/>
//         </div>

//         <div className='password-input-container-signup'>
//           <input type = 'password' className='password-input-signup' ref={passwordInputFieldreg} placeholder='Password'/>
//         </div>
        
        
        



//         <div className='login-button-container'>
//           <button onClick={registernewuser} className='register-button-signup'>Register</button>
//         </div>
        
        

//       </div>


     
//     </>
    
//   )
// }



