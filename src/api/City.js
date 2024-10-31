import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const City = () => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [cityToastShown, setCityToastShown] = useState(false);
    const [contactToastShown, setContactToastShown] = useState(false);

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                console.log(response.data);
                setCity(response.data.city);
            } catch (error) {
                setError('Failed to fetch data');
                console.error('Error fetching location:', error);
            }
        };

        fetchCity();
    }, []);

    useEffect(() => {
        // Mostrar el toast con la ciudad después de 7 segundos solo si no se ha mostrado antes
        const timer = setTimeout(() => {
            if (city && !cityToastShown) {
                toast(<CustomToast city={city} />, {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setCityToastShown(true); // Marca el toast de la ciudad como mostrado
            }
        }, 7000); // 7 segundos

        // Limpiar el temporizador si el componente se desmonta antes de que el toast se muestre
        return () => clearTimeout(timer);
    }, [city, cityToastShown]); // Dependencia en 'city' y 'cityToastShown'

    useEffect(() => {
        // Mostrar el mensaje de contacto cada 30 segundos solo si no se ha mostrado antes
        const intervalId = setInterval(() => {
            if (!contactToastShown) {
                toast("I wish you are enjoying my portfolio 😁", {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setContactToastShown(true); // Marca el toast de contacto como mostrado
            }
        }, 25000); // 25 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [contactToastShown]); // Dependencia en 'contactToastShown'

    return (
        <div>
            <ToastContainer
                draggablePercent={60}
                theme='dark'
            />
        </div>
    );
};

// Componente personalizado para el toast de la ciudad
const CustomToast = ({ city }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <span role="img" aria-label="globe" style={{ fontSize: '24px', marginRight: '10px' }}>🌍</span>
        <span>Greetings to {city}!</span>
    </div>
);

export default City;
