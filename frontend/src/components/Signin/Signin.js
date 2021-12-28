import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { authAsync, clearAuthValidation } from '../../redux/features/AuthSlice'
import jbImage from './../../images/jb.jpg'

const Signin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuth, message } = useSelector(state => state.auth)

  const [inputForm] = useState({
    email: '',
    password: ''
  })
  const changeHandler = (e) => {
    const { name, value } = e.target
    inputForm[name] = value
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(authAsync(inputForm))
    dispatch(clearAuthValidation())
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/home')
    } else {
      return false
    }
  }, [isAuth, dispatch, navigate])
  return (
    <>
      <SigninContainer>
        <Left>
          <h1>Facebook</h1>
          <h2>Recent Logins</h2>
          <p>Click your picture or add an account.</p>
          <br></br>
          <div>
            <div className="imageUser">
              <img src={jbImage} alt="" width={170} height={170} />
              <p>Jerald</p>
            </div>
            <div className="imageUser">
              <img src={jbImage} alt="" width={170} height={170} />
              <p>Jerald</p>
            </div>
          </div>
        </Left>
        <Right onSubmit={submitHandler}>
          <div>
            <p style={{ color: 'red', fontWeight: '700', marginBottom: '10px' }}>{message}</p>
            <input type="text" placeholder="Email or Phone Number" name="email" onChange={changeHandler} />
            <input type="password" placeholder="Password" name="password" onChange={changeHandler} />
            <input type="submit" value="Log In" className="buttonSignin" />
            <strong>Forget password?</strong>
            <br></br>
            <hr></hr>
            <br></br>
            <input type="button" value="Create New Account" className="buttonSignup" />
          </div>
        </Right>
      </SigninContainer>
      <FooterContainer>
        <footer>
          <ul>
            <li>English Us</li>
            <li>Filipino</li>
            <li>Bisaya</li>
            <li>Español</li>
            <li>日本語</li>
            <li>한국어</li>
            <li>中文(简体)</li>
            <li>العربية</li>
            <li>Português (Brasil)</li>
            <li>Français (France)</li>
            <li>Deutsch</li>
            <li><i className="fas fa-plus"></i></li>
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <li>Sign Up</li>
            <li>Log In</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Watch</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Facebook Pay</li>
            <li>Jobs</li>
            <li>Oculus</li>
            <li>Portal</li>
            <li>Instagram</li>
            <li>Bulletin</li>
            <li>Local</li>
            <li>Fundraisers</li>
            <li>Services</li>
            <li>Voting Information Center</li>
            <li>Groups</li>
            <li>About</li>
            <li>Create Page</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Ad choices</li>
            <li>Terms</li>
            <li>Help</li>
          </ul>
          <br></br>
          <strong>Meta c 2021</strong>
        </footer>
      </FooterContainer>
    </>
  )
}

export default Signin

const SigninContainer = styled.div`
  padding: 92px 132px;
  display: flex;
  justify-content: center;
  width: 75%;
  margin: auto;
`

const Left = styled.div`
  flex: 50%;
  flex-direction: column;
  padding-left: 100px;
  h1 {
    color: #1877F2;
    font-weight: 700;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
  }

  img {
    border-radius: 10px;
    margin-right: 10px;
  }

  > div {
    display: flex;
    flex-direction: row;
  }

  > div .imageUser {
    background: #ffff;
    text-align: center;
    margin-right: 10px;
  }
`

const Right = styled.form`
  flex: 25%;
  background: #ffff;
  border-radius: 5px;
  margin-top: 50px;

  > div {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  input {
    padding: 15px;
    font-size: 17px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: none;
    border: 1px solid #e0e4e9;
  }

  strong {
    text-align: center;
    color: #1877F2;
    font-size: 14px;
    letter-spacing: 0.1ch;
  }

  .buttonSignin {
    color: #fff;
    cursor: pointer;
    background: #1877F2;
  }

  .buttonSignup {
    margin: auto;
    width: 60%;
    color: #fff;
    cursor: pointer;
    background: #42B72A;
    font-weight: 700;
  }
`

const FooterContainer = styled.div`
  background: #ffff;
  height: 23vh;
  position: fixed;
  bottom: 0;
  width: 100%;

  footer {
    padding: 20px 0px;
    width: 60%;
    margin: auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  ul li {
    font-size: 13px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: gray;
  }
`