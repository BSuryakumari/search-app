import React, { useState } from 'react';
import axios from 'axios';

function InterestForm() {
    const [formData, setFormData] = useState({
        principal: '',
        rate: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/calculate', formData);
            alert(`Calculated Interest: ${response.data.interest}`);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="principal" type="number" value={formData.principal} onChange={handleChange} placeholder="Principal" />
            <input name="rate" type="number" value={formData.rate} onChange={handleChange} placeholder="Rate (%)" />
            <input name="time" type="number" value={formData.time} onChange={handleChange} placeholder="Time (years)" />
            <button type="submit">Calculate</button>
        </form>
    );
}

export default InterestForm;
