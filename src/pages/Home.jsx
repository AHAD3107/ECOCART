import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <h1 className="text-2xl text-center mt-10">This is the Home Page</h1>
      </div>
    </>
  );
};

export default Home;
