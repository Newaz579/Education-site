import React from 'react';

const Blog = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Most Important Question About Web Development</h1>
            <h3> what is cors?</h3>
            <p>
                CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
            </p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>
                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>
            <h3> How does the private route work?</h3>
            <p>
                PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
            </p>
            <h3>What is Node? How does Node work?</h3>
            <p>
                Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.
            </p>
            <p>
                Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user. HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind.
            </p>
        </div>
    );
};

export default Blog;