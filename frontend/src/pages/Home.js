import React from "react";

function Home() {
  return (
    <div className="container text-center mt-4">
      {/* Banner Section */}
      <div className="banner-container">
        <img 
          src="./ban.webp" 
          alt="Banner" 
          className="img-fluid banner-img"
        />
        <div className="banner-text">
          <h1 className="display-4 text-white fw-bold">Welcome to MyApp</h1>
          <p className="lead text-white">Your one-stop solution for seamless user management.</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-5">
        <h2 className="fw-bold">Why Choose Us?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4 className="fw-bold">🚀 Fast & Secure</h4>
              <p>Experience top-notch security and blazing-fast performance.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4 className="fw-bold">💡 User Friendly</h4>
              <p>Designed with simplicity and ease of use in mind.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4 className="fw-bold">🔒 Privacy First</h4>
              <p>Your data is encrypted and never shared with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
