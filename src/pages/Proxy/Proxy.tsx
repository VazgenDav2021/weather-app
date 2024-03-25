import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const Proxy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        const city = data.address.city;
        const date = dayjs().format("DD-MM")
        navigate(`/${city}/${date}`);
      });
    } else {
      navigate('Yerevan');
    };

  }, []);

  return null;
};

export default Proxy;