import React, { Suspense, lazy } from 'react';
const WeatherContainer = lazy(() => import('../../components/WeatherContainer/WeatherContainer'));

const HomePage = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <WeatherContainer />
        </Suspense>

    );
};

export default HomePage;