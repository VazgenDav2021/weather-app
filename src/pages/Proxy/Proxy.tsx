import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Proxy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("Yerevan")
  });

  return null;
};

export default Proxy;