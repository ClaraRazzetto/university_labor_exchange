import { useState } from 'react';

const usePutRequest = () => {
    const [ loadingPutRequest, setLoadingPutRequest] = useState(false);
    const [ putRequestError, setPutRequestError] = useState(null);

    const sendPutRequest = async (url, data) => {
        try {
            setLoadingPutRequest(true);
            setPutRequestError(null);

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            setLoadingPutRequest(false);
            const responseData = await response.json();

            return responseData;
        } catch (error) {
            setLoadingPutRequest(false); 
            setPutRequestError(error.message || 'Hubo un problema en la solicitud PUT');
        }
    };

    return {sendPutRequest, loadingPutRequest, putRequestError}
};

export default usePutRequest;