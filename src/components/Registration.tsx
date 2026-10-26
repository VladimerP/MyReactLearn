import { useState } from 'react';


function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordStatus, setPasswordStatus] = useState(false);
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    //для ввода в поля
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setName(event.currentTarget.value);
    };
    const handleEmail = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEmail(event.currentTarget.value);
    };
    const handlePassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.currentTarget.value);
    };
    
    //меняем статус поля пароля
    const handleStatusPassword = () => {
        setPasswordStatus(!passwordStatus);
    };

    const handleFormBase = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        alert("Registration successful!"+ name);
        setSubmitted(true);
    };
 
    return (
        <div>
           <form onSubmit={handleFormBase}>
                <input  
                    type="text"
                    value={name}
                    onChange={handleChange}
                /> 
                <p>Hellow, {name?name:'Guest'}!</p>
                <input  
                    type="email"
                    value={email}
                    onChange={handleEmail}
                /> 
                <div>
                    <input  
                        type={passwordStatus?"text":"password"}
                        value={password}
                        onChange={handlePassword}
                    /> 
                    <input  
                        type="button"
                        value={!passwordStatus?'Show':'Hide'}
                        onClick={handleStatusPassword}
                    /> 
                </div>
                <button type='submit' disabled={(name.trim()&&email.trim()&&password.trim()) ? false:true}>Register</button>
           </form>
        </div>
    );
}

export default Registration;