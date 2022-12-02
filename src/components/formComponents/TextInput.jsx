import React from "react";
export const TextInput = ({
    name,
    label,
    value,
    onChange,
    placeholder,
    maxLengthVal = null,
    onKeyPressFn = null,
}) => {
    return (
        <>
            <div className="col-12 col-lg-6">
                <div className="input-group my-2 d-flex flex-column col">
                    <label
                        htmlFor={name}
                        className="form-label"
                    >
                        {label}
                    </label>
                    <input
                        type="text"
                        className="form-control w-100"
                        id={name}
                        name={name}
                        value={value}
                        maxLength={maxLengthVal}
                        onKeyPress={onKeyPressFn}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </>
    );
}
