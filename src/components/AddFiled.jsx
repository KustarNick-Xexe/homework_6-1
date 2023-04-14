import React, { useRef } from 'react';

const AddField = ({ onFormSubmit }) => {
    const city = useRef();
    const zone = useRef();

    const handleInputChange = (event) => {
        event.preventDefault();

        onFormSubmit(city.current.value, zone.current.value);

        city.current.value = '';
        zone.current.value = '';
    };

    return (
            <form className="flex items-center justify-center relative">
                <div className="mb-6 mr-12">
                    <label htmlFor="name" className="block mb-2  text-gray-700">Название</label>
                    <input 
                        type="text" id="city" name="city" className="w-full border border-black p-2" 
                        ref={ city }/>
                </div>
                <div className="mb-6 mr-12">
                    <label htmlFor="email" className="block mb-2 text-gray-700">Временная зона</label>
                    <input 
                        type="text" id="zone" name="zone" className="w-full border border-black p-2" 
                        ref={ zone }/>
                </div>
                <div>
                    <button 
                        className=" bg-white text-black  border border-black py-2 px-8 absolute bottom-6"
                        onClick={ handleInputChange }>Добавить</button>
                </div>
            </form>
    );
}

export default AddField;