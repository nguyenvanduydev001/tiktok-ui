import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboucedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
