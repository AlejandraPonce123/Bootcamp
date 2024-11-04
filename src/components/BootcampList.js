import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const BootcampList = () => {
    const [bootcamps, setBootcamps] = useState([]);

    useEffect(() => {
        const fetchBootcamps = async () => {
            const { data } = await supabase.from('bootcamps').select('*');
            setBootcamps(data);
        };
        fetchBootcamps();
    }, []);

    const enrollToBootcamp = async (bootcampId) => {
        const user = supabase.auth.user();
        if (user) {
            await supabase
                .from('enrollments')
                .insert({ user_id: user.id, bootcamp_id: bootcampId });
            alert('You have enrolled in the bootcamp!');
        } else {
            alert('Please log in to enroll.');
        }
    };

    return (
        <div>
            <h2>Available Bootcamps</h2>
            <ul>
                {bootcamps.map((bootcamp) => (
                    <li key={bootcamp.id}>
                        <h3>{bootcamp.name}</h3>
                        <p>{bootcamp.description}</p>
                        <button onClick={() => enrollToBootcamp(bootcamp.id)}>Enroll</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BootcampList;
