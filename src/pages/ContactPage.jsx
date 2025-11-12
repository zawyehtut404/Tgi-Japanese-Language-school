import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function ContactPage() {
  const location = useLocation();
  const FORMSPREE_URL = 'https://formspree.io/f/mvgqowab';
  const initialSubject = location.state?.subject || 'https://maps.app.goo.gl/tXRAa7kk7Rd5fJPB9';

  // State to manage the submission status
  const [submissionStatus, setSubmissionStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus({ submitting: true, success: false, error: false });

    const form = e.target;
    const formData = new FormData(form);

    fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setSubmissionStatus({ submitting: false, success: true, error: false });
        form.reset();
      } else {
        response.json().then(data => {
          // You can use the 'data' object here to show more specific errors if you want
          setSubmissionStatus({ submitting: false, success: false, error: true });
        });
      }
    }).catch(error => {
      setSubmissionStatus({ submitting: false, success: false, error: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | TGi Japanese Language School</title>
        <meta name="description" content="Get in touch with TGi Japanese Language School..." />
      </Helmet>

      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="text-gray-600 mt-2">We'd love to hear from you. Please fill out the form below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                  />
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="you@example.com"
                  />
                </div>
                {/* Subject */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    defaultValue={initialSubject}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Subject"
                  />
                </div>
                {/* Message */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submissionStatus.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:bg-gray-400"
                >
                  {submissionStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {/* Success and Error Messages */}
                {submissionStatus.success && (
                  <div className="mt-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your message has been sent.</span>
                  </div>
                )}
                {submissionStatus.error && (
                  <div className="mt-4 text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-2"><strong>Address:</strong> No.22, 1st Floor (B), Zayarthiri Street, Zayarthiri Condo, Hledan, Kamayut Township, Yangon, Myanmar</p>
                <p className="mb-2"><strong>Phone:</strong> 09 793020075 / 09 771009953</p>
                <p><strong>Email:</strong> pyitheinsoe.japan@gmail.com</p>
              </div>
              <div className="rounded-lg shadow-md overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.0556362393536!2d96.12763641706515!3d16.828322297407357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19566123a94bb%3A0x138658550ad1c00e!2zVEdJIOGAguGAu-GAleGAlOGAuuGAmOGArOGAnuGArOGAheGAgOGArOGAuOGAnuGAhOGAuuGAkOGAlOGAuuGAuOGAgOGAu-GAseGArOGAhOGAuuGAuCAo4YGBKQ!5e1!3m2!1sen!2smm!4v1762920270075!5m2!1sen!2smm" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;