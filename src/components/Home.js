import React, { useEffect, useRef } from "react";
import PureCounter from "@srexi/purecounterjs";
import "./Home.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);
  const clientSectionRef = useRef(null);

  useEffect(() => {
    // Initialize PureCounter for Organic Reach and Watch Hours
    new PureCounter({
      selector: ".purecounter[data-purecounter-id='organic-reach']", // Selector targeting Organic Reach counter
    });

    new PureCounter({
      selector: ".purecounter[data-purecounter-id='watch-hours']", // Selector targeting Watch Hours counter
    });

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }, 500); // Adjust the delay in milliseconds as needed
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
      // Disconnect observer on unmount
      observer.disconnect();
    };
  }, []);

  const setSectionRef = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const handleScroll = () => {
    const clientSection = clientSectionRef.current;
    if (clientSection) {
      const { top } = clientSection.getBoundingClientRect();
      if (top < window.innerHeight * 0.8) {
        clientSection.classList.remove("section-hidden");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };
  return (
    <div>
      <Nav />

      <section id="home" className="home">
        <div className="container home-container">
          <div className="home-left" ref={setSectionRef}>
            <h1>Grow your business with Akeshya</h1>
            <p>
              We are a team of talented website designers, developers & digital
              marketeers.
            </p>
            <button className="home-left-button">Get Started</button>
          </div>
          <div className="home-right">
            <img
              src="https://akeshya.com/assets/img/hero-img.png"
              alt="Profile"
              className="home-image"
            />
          </div>
        </div>
      </section>

      <section id="client" className="client section-hidden" ref={setSectionRef}>
        <div className="client-back-images ">
          <img
            src="https://akeshya.com/assets/img/clients/client-1.png"
            alt="Client 1"
            className="client-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-2.png"
            alt="Client 2"
            className="client-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-3.png"
            alt="Client 3"
            className="client-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-4.png"
            alt="Client 4"
            className="client-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-5.png"
            alt="Client 5"
            className="client-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-6.png"
            alt="Client 6"
            className="client-image1"
          />
        </div>
      </section>

      <section id="about" ref={setSectionRef} className="section-hidden">
        <div className="about-title">
          <hr className="horizontal-line" />
          <h1>ABOUT US</h1>
          <hr className="horizontal-line" />
        </div>
        <div className="about-container">
          <div className="about-left-side">
            <p>
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <p>
              <i className="ri-check-double-line"></i> We started with a simple
              idea: do what is best for the client.
            </p>
            <p>
              <i className="ri-check-double-line"></i> Our methodical and
              individual approach to each project delivers the finest possible
              results for your media.
            </p>
            <p>
              <i className="ri-check-double-line"></i> Our day-to-day work is to
              solve your problems utilizing the most up-to-date, practical
              adaptive technology, and we have a lot of fun doing it.
            </p>
          </div>
          <div className="about-right-side" ref={setSectionRef}>
            <p>
              We're professional, but we're also friendly, and we'll always pay
              attention to your concerns. We expect to work with innovative
              people that have an open mind and are dedicated to making every
              idea a reality. We want to hear from you if you're interested in
              SEO, have Web Development ideas, or require a graphic designer who
              can match your goals.
            </p>
            <button className="about-right-button">Learn More</button>
          </div>
        </div>
      </section>

      <section className="about section-hidden" ref={setSectionRef}>
        <div className="section-about">
          <img
            src="https://akeshya.com/assets/img/counts-img.svg"
            alt="About Us"
            className="about-image"
          />
          <div className="count-box-container">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="3835039"
                data-purecounter-duration="2"
                className="purecounter"
                data-purecounter-id="organic-reach"
              ></span>
              <p>
                <strong>Organic Reach</strong> (Global)
              </p>
            </div>
            <div className="count-box">
              <i className="bi bi-clock"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="14081"
                data-purecounter-duration="2"
                className="purecounter"
                data-purecounter-id="watch-hours"
              ></span>
              <p>
                <strong>Watch Hours</strong> (Asia)
              </p>
            </div>
          </div>
          <div className="count-box-container">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="85"
                data-purecounter-duration="3"
                className="purecounter"
              >
                85
              </span>
              <p>
                <strong>campaigns</strong>
              </p>
            </div>
            <div className="count-box">
              <i className="bi bi-globe"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="17"
                data-purecounter-duration="1"
                className="purecounter"
              >
                17
              </span>
              <p>
                <strong>Excellent CTR %</strong> (Asia)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="services-wrapper">
        <section
          id="services"
          className="services section-hidden"
          ref={setSectionRef}
        >
          <div className="services-container ">
            <div className="services-title">
              <hr className="horizontal-line" />
              <h1>SERVICES</h1>
              <hr className="horizontal-line" />
            </div>
            <p className="services-text">
              Akeshya will serve as your consultant and development partner to
              help you turn your idea into a reality.
            </p>
          </div>

          <div className="service-container section-hidden"
          ref={setSectionRef} >
            <div className="service-row">
              <i className="bx bxl-dribbble"></i>
              <h3>Design</h3>
              <p>
                Our web design services can assist you in reclaiming your
                company's online image. Your business will flourish on the
                Internet thanks to the combination of style and technology we
                provide, as well as our experience.
              </p>
            </div>
            <div className="service-row">
              <i className="bx bx-file"></i>
              <h3>Development</h3>
              <p>
                Our development team can construct platforms to help your
                business thrive by creating powerful customized solutions
                tailored to your particular requirements. Akeshya makes use of
                established and effective web development tools.
              </p>
            </div>
            <div className="service-row">
              <i className="bx bx-world"></i>
              <h3>Marketing</h3>
              <p>
                A beautiful website is the foundation of effective marketing.
                Our customers achieve success where it counts—in the real
                world—by combining our proven approach with our passion for
                improving conversions and increasing ROI.
              </p>
            </div>
            <div className="service-row">
              <i className="bx bx-tachometer"></i>
              <h3>Support</h3>
              <p>
                Since the beginning, we at Akeshya have specialized in website
                maintenance. We recognize the significance of having your
                business online 24 hours a day, seven days a week, and we've
                created a system to ensure that we're always available.
              </p>
            </div>
          </div>
        </section>

      <section  className="process process-hidden"
          ref={setSectionRef}
>

      <div className="process-title">
            <hr className="horizontal-line" />
            <h1>OUR PROCESS</h1>
            <hr className="horizontal-line" />
          </div>
        <p className="process-text">Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</p>

        <div className='process-container section-hidden' ref={setSectionRef}>
          <div className='process-row'>
            <h2>1. Planning</h2>
            <p>We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.</p>
          </div>
          <div className='process-row'>
            <h2>2. Design</h2>
            <p>We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.</p>
          </div>
          <div className='process-row'>
            <h2>3. Development</h2>
            <p>We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.</p>
          </div>
          <div className='process-row'>
            <h2>4. Marketing</h2>
            <p>We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.</p>
          </div>
        </div>
      </section>


        <section className="features section-hidden" ref={setSectionRef}>          
          <div className="features-title">
            <hr className="horizontal-line" />
            <h1>OUR CORE FEATURES</h1>
            <hr className="horizontal-line" />
          </div>
          <p className="features-text">
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </p>
          <div className="features-container section-hidden" ref={setSectionRef} >
            <div className="features-box">
              <i className="ri-window-line"></i>
              <h4>
                <a href="">Web design</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-code-box-line"></i>
              <h4>
                <a href="">Development</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-creative-commons-by-line"></i>
              <h4>
                <a href="">Branding</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-play-circle-line"></i>
              <h4>
                <a href="">Media buying</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-search-eye-line"></i>
              <h4>
                <a href="">Search engine</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-todo-line"></i>
              <h4>
                <a href="">Brand strategy</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-map-pin-line"></i>
              <h4>
                <a href="">Local search marketing</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-bar-chart-grouped-line"></i>
              <h4>
                <a href="">Lead Tracking & Management</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-contacts-book-line"></i>
              <h4>
                <a href="">Contact management</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-disc-line"></i>
              <h4>
                <a href="">Media management</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-calendar-event-line"></i>
              <h4>
                <a href="">Social scheduling</a>
              </h4>
            </div>
            <div className="features-box">
              <i className="ri-advertisement-fill"></i>
              <h4>
                <a href="">Ad retargeting</a>
              </h4>
            </div>
          </div>
        </section>

        <section className="contact section-hidden"  ref={setSectionRef}>         
           <div id="contact" className="contact">
            <div className="contact-title">
              <hr className="horizontal-line" />
              <h1>CONTACT US</h1>
              <hr className="horizontal-line" />
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-layout">
              <div className="contact-page">
                <h1>Akeshya</h1>
                <p>
                  Designers, developers & marketeers capable of delivering
                  solutions according to your needs.
                </p>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-info">
                <i className="ri-map-pin-line"></i>
                <p>
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>
              <div className="contact-info">
                <i className="ri-mail-send-line"></i>
                <p>info@akeshya.com</p>
              </div>
              <div className="contact-info">
                <i className="ri-phone-line"></i>
                <p>+91 94942 40922</p>
              </div>
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    required
                    className="contact-form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="contact-form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

