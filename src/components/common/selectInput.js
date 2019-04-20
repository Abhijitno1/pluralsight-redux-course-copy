import React, {PropTypes} from 'react';

const SelectInput = ({name, label, options, defaultOption, value, onChange, error}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) wrapperClass += ' has-error';
    label = label || name;
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select name={name} className="form-control" value={value} onChange={onChange}>
                    {defaultOption && <option value="">{defaultOption}</option>}
                    {options.map((option, index) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default SelectInput;