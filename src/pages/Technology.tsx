import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Technology: React.FC = () => {
  // Use useParams to get the `id` from the URL
  const { id } = useParams<{ id: string }>();

  return (
    <div>
        <Navigation/>
        <h1>Technology</h1>
        <p>Technology ID: {id}</p>
    </div>
  );
};

export default Technology;