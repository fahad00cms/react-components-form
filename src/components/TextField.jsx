import React from 'react';
import FieldConnect from './FieldConnect';

const TextField = ({
    className,
    onChange,
    name,
    type = 'text',
    errors,
    error,
    value,
    label
}) => (
    <div className={className}>
        {label && <label>{label}</label>}
        <input
            type={type}
            name={name}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        />
    </div>
);

export default FieldConnect(TextField);