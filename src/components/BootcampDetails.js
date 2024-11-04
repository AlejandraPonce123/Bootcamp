import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const BootcampDetails = () => {
    const { id } = useParams();
    const [bootcamp, setBootcamp] = useState(null);

    useEffect(() => {
        const fetchBootcamp = async () => {
            const { data } = await supabase.from('bootcamps').select('*').eq('id', id).single();
            setBootcamp(data);
        };
        fetchBootcamp();
    }, [id]);

    return (
        <div>
            <h2>{bootcamp?.name}</h2>
            <p>{bootcamp?.description}</p>
        </div>
    );
};

export default BootcampDetails;
