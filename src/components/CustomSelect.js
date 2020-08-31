import React from 'react'

const CustomSelect = (props) => {
    return (
        <div className="form-group m-auto col-md-6">
            <select 
                value={props.value} 
                onChange={props.handleChange}
                className="form-control"
            >
                <option value="la vega,do">La Vega</option>
                <option value="jarabacoa,do">Jarabacoa</option>
                <option value="moca,do">Moca</option>
                <option value="puerto plata,do">Puerto Plata</option>
                <option value="santiago de los caballeros,do">Santiago</option>
                <option value="santo domingo,do">Santo Domingo</option>
                <option value="Bonao,do">Bonao</option>
                <option value="mao,do">Mao</option>
            </select>
        </div>
    )
};

export default CustomSelect;