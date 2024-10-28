
import React, { useState } from 'react';
import './departments.css';

const departmentsData = [
  {
    id: '1',
    title: 'Marketing Department',
    image: '../../../m.jpg',
    description: 'Our Marketing Department is dedicated to promoting our products and services to a wider audience. We employ innovative strategies to create brand awareness, product knowledge and drive customer engagement.',
    services: ['Social Media Campaigns', 'Content Marketing', 'Market Research'],
  },
  {
    id: '2',
    title: 'IT Services Department',
    image: '../../../IT.png',
    description: 'The IT Services Department ensures the smooth functioning of our digital infrastructure. We provide comprehensive IT solutions to support the organizations operations and security.',
    services: ['Network Management', 'Software Development', 'Cybersecurity'],
  },
  {
    id: '3',
    title: "Manufacturing Department",
    image: '../../../manif.jpg',
    description: 'The Manufacturing Department is working in areas of Automotive Assembly in Ethiopia.The department is also working to manufacture antibiotics (both human and animal), Enzymes, Blood Products, Hormones including Human Insulin; and Vaccines in collaboration and partnership with international scientific institutes and industries.',
    services: ['', '', ''],
  }
  // Add more department data as needed
];

const Dmt = () => {
  const [activeDepartment, setActiveDepartment] = useState(departmentsData[0].id);

  const onSelectDepartment = (event) => {
    setActiveDepartment(event.target.value);
  };

  return (
    <div className="a-container">
      <h1 className='d-head'>Departments</h1>
      <div className="department-menu">
        <select value={activeDepartment} onChange={onSelectDepartment}>
          {departmentsData.map(department => (
            <option key={department.id} value={department.id}>
              {department.title}
            </option>
          ))}
        </select>
      </div>
      {departmentsData.map(department => (
        <section key={department.id} className={`department-info ${activeDepartment === department.id ? 'active' : ''}`}>
          <h2>{department.title}</h2>
          <div className="d-content">
          <img src={department.image} alt={department.title} />
            <div className="d-left">
              <div className="d-disc">
                <p>{department.description}</p>
              </div>
              <div className='d-list'>
                <h1>our services</h1>
                <ul>
                  {department.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Dmt;