import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';
import Movie from './components/Movie/Movie';
import Blog from './components/Blog/Blog';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/photos" component={Photos}/>
                    <Route path="/movie" component={Movie}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/friends" component={Friends}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
