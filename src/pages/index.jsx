import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import '../styles/mainpage.css';

const MainPage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div class="mainPage">
                <div class="sidebar">
                    <img src="profile.jpg" alt="Profile" />
                    <p>
                        Hello! My name is Michael Gillett. I am a recent graduate with a degree in Computer Science looking for a Software Developer job. I made this
                        website using React.js and Typescript, with the hosting done through AWS Amplify.
                        <br />
                        <br />
                        Twitter: <a href="https://www.twitter.com/MichaelDotPy">@MichaelDotPy</a>
                        <br />
                        Github: <a href="https://www.github.com/gillemic">github.com/gillemic</a>
                        <br />
                        Linkedin: <a href="https://www.linkedin.com/in/gillemic/">https://www.linkedin.com/in/gillemic/</a> 
                    </p>
                </div>
                <div class="mainPage-body">
                    <p>This is some dummy text to simulate posts n stuff</p>
                    <p>This is another</p>
                </div>
            </div>
        </div>
       
    );
}

export default MainPage;