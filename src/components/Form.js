import React from 'react';

const Form = () => {

    const nameRef = React.useRef();
    const detailsRef = React.useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {
            name: nameRef.current.value,
            details: detailsRef.current.value
        };

        console.log(obj);
        const link = document.createElement('a');
        const url = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`
        link.href = url;
        link.download = 'hemanth.json';
        link.click();
    }

    return (
        <form onSubmit={submitHandler}  >
            <label htmlFor='name'>Name : </label>
            <input type='text' id='name' ref={nameRef} /><br />
            <label htmlFor='details'>Details : </label>
            <input type='text' is='details' ref={detailsRef} /><br />
            <button>Submit</button>
        </form>
    );
}

export default Form;