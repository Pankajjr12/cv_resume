
import React, { Component } from "react";

import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  state = {
    resumeData: null,
    loading: true,
    error: ""
  };

  componentDidMount() {
    // Google Analytics (legacy Universal Analytics)
    // Keep only if you still use this tracking property.
    // ReactGA.initialize("UA-110570651-1");
    // ReactGA.pageview(window.location.pathname);

    this.getResumeData();
  }

  async getResumeData() {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/resumeData.json`
      );

      if (!response.ok) {
        throw new Error("Unable to load resume data");
      }

      const data = await response.json();

      this.setState({
        resumeData: data,
        loading: false
      });
    } catch (error) {
      console.error("Resume data error:", error);

      this.setState({
        loading: false,
        error: error.message
      });
    }
  }

  render() {
    const { resumeData, loading, error } = this.state;

    if (loading) {
      return (
        <div className="app-loading">
          <div className="loader"></div>
          <p>Loading portfolio...</p>
        </div>
      );
    }

    if (error || !resumeData) {
      return (
        <div className="app-error">
          <h2>Unable to load portfolio</h2>
          <p>{error || "Please try again later."}</p>
          <button onClick={() => {
            this.setState({ loading: true, error: "" });
            this.getResumeData();
          }}>
            Retry
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <Header data={resumeData.main} />

        <main>
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />

          {/* Contact component */}
          <Contact data={resumeData.main} />
        </main>

        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
