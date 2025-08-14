import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      // Handle login
      if (formData.name && formData.email && formData.phone) {
        window.clevertap.delayEvents(true)
        // window.clevertap.setOffline(true);
        window.clevertap.event.push('CT-HELLO');
        // CleverTap user login
        window.clevertap.onUserLogin.push({
          "Site": {
            "Name": formData.name,
            "Email": formData.email,
            "Phone": formData.phone,
          }
        });
        window.clevertap.event.push('CT-TEST');
        window.location.href = '/'; // Redirect to home page
        // navigate('/');
        // window.clevertap.setOffline(false);

        // window.clevertap.blockRequests(false)
      } else {
        alert('Please fill in all fields.');
      }
    } else {
      // Handle signup
      if (formData.name && formData.email && formData.phone && formData.password && formData.confirmPassword) {
        if (formData.password === formData.confirmPassword) {
          // CleverTap user login for signup as well
          window.clevertap.onUserLogin.push({
            "Site": {
              "Name": formData.name,
              "Email": formData.email,
              "Phone": formData.phone,
            }
          });
          
          window.location.href = '/'; // Redirect to home page
          // navigate('/');
        } else {
          alert('Passwords do not match.');
        }
      } else {
        alert('Please fill in all fields.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1234567890 (with country code)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>        
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-700 text-sm"
          >
            ← Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;