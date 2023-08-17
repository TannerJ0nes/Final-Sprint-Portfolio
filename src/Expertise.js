// src/Expertise.js
import React from 'react';
import './Expertise.css';

function Expertise() {
  const expertiseItems = [
    {
      icon: './JS.png',
      title: 'JavaScript',
      description: 'Experienced in building interactive and dynamic web applications with JavaScript.Familiar with server-side development using Node.js and Express framework.',
    },
    {
      icon: './React.jpg',
      title: 'React',
      description: 'Proficient in developing UI components and user interfaces using React library.',
    },
    {
      icon: './HTML.jpg', 
      title: 'HTML/CSS',
      description: 'Skilled in creating responsive and visually appealing web designs using HTML and CSS.',
    },
    {
      icon: './Python.png', 
      title: 'Python',
      description: ' Proficient in Python programming with experience in building applications, scripts, and automation tools.',
    },
    // Add more expertise items as needed
  ];

  return (
    <section className="expertise">
      <h2>My Expertise</h2>
      <div className="expertise-blocks">
        {expertiseItems.map((item, index) => (
          <div key={index} className="expertise-block">
            <div className="expertise-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
