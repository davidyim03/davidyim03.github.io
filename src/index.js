import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CourseWork from "./pages/Coursework.jsx";
import Projects from "./pages/Projects.jsx";

import BlogPost from './components/BlogPost/BlogPost';

import * as serviceWorker from "./serviceWorker";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/StyledComponents/StyledComponents.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./components/StyledComponents/Theme";

import Posts from '../src/posts/Posts';

// Google Analytics
import ReactGA from "react-ga4";

class App extends Component {

    render () {

        if(window.location.hostname !== "localhost") {
            
            // Google Analytics ID goes here.
            let trackingId = "123";

            ReactGA.initialize(trackingId);
            ReactGA.pageview('/home');
        }


        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <AnimatePresence>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/coursework" element={<CourseWork />} />

                        {Posts.map((post) => (
                            <Route
                            key={post.route}
                            path={`/${post.route}`}
                            element={
                                <BlogPost
                                title={post.title}
                                date={post.date}
                                image={post.image}
                                content={post.content}
                                />
                            }
                            />
                        ))}

                        {/* Fallback route */}
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                    </AnimatePresence>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

serviceWorker.unregister();
const root = createRoot(document.getElementById('root'));
root.render(<App />);