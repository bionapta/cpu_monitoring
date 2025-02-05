import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    if (message.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Form submitted', { name, email, message });
    }
  };

  return (
    <div className="main-content">
      <main className="container mx-auto p-4">
        <section className="my-8 p-4 bg-gray-100">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          {/* Container menggunakan flex */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Formulir */}
            <div className="w-full md:w-1/2">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Tell Us Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Input Your E-mail Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="What Do You Want Us To Hear?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs italic">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <button
                    className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Google Maps */}
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.658188970502!2d107.6042860740358!3d-6.931395367846042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64e89c98293%3A0x6a4ef5b4900b270e!2sPT%20Scada%20Prima%20Cipta!5e0!3m2!1sen!2sid!4v1738751656956!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
