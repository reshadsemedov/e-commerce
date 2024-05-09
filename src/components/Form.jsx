import { Form, Link, useSearchParams } from "react-router-dom"
import styles from '../styles/LoginForm.module.css';
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useState } from "react";

export default function LoginForm() {

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const [eyeOn, setEyeOn] = useState(true);

    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
        gender: ''
    })
    

    function handleEye() {
        setEyeOn(eye => !eye);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(validation) {
            console.log("Yes")
        }
        else {
            console.log("No")
        }

    }
    function handleChange(identifier, value) {
        setInputValues((prev) => ({
            ...prev,
            [identifier]: value
        }))
    }
    const isValidEmail = inputValues.email.includes('@');
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()/\\{}\[\]]).{10,}$/.test(inputValues.password);
    const validation = isValidEmail && isValidPassword;
    

    return <section>
        <h1 className={styles.headerTitle}>Salam ,</h1>
        <p className={styles.headerText}>Trendyol-a daxil ol və ya hesab yarat, endirimləri qaçırma!</p>
        <div className={styles.sectionForm}>
            <Form method='POST' className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.box}>
                    <h1 className={styles.title}>{isLogin ? 'Daxil ol' : 'Abune ol'}</h1>
                    <div className={styles.para}>
                        <label htmlFor="email" className={styles.label}>E-poçt</label>
                        <input type="text" className={styles.input} name="email" id="email" required onChange={(event) => handleChange('email', event.target.value)}/>
                    </div>
                    <div className={styles.para}>
                        <label htmlFor="password" className={styles.label}>Parol</label>
                        <div className={styles.inputPasswordContainer}>
                            <input type={eyeOn ? 'password' : 'text'} className={styles.input} name="password" id="password" required minLength={10} onChange={(event) => handleChange('password', event.target.value)}/>
                            <span className={styles.eye}>{ !eyeOn ? <FiEye onClick={handleEye}/> : <FiEyeOff onClick={handleEye}/>}</span>
                        </div>
                        {isLogin ? <Link to=""><p>Parolumu unutdum</p></Link> : ""}
                    </div>
                    {!isLogin && <small className={styles.small}>Şifrəniz ən azı 10 simvoldan ibarət olmalıdır. O, 1 böyük, 1 kiçik hərf və rəqəmlərdən ibarət olmalıdır.</small>}
                    {!isLogin && <div>
                        <p>
                            <input type="radio" name="gender" id="qadin" required onChange={(event) => handleChange('gender', event.target.value)}/>
                            <label htmlFor="" style={{fontSize: "14px", fontWeight: "600"}}>Qadın</label>
                        </p>
                        <p>
                            <input type="radio" name="gender" id="kisi" required onChange={(event) => handleChange('gender', event.target.value)}/>
                            <label htmlFor="" style={{fontSize: "14px", fontWeight: "600"}}>Kişi</label>
                        </p>
                    </div>}
                    <p className={styles.buttons}>
                        <button disabled={!validation} className={!validation ? styles.disabledButton : styles.workedButton}>{isLogin ? 'Daxil ol' : 'Abune ol'}</button>
                        {!isLogin && <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} className={styles.passLink}>{isLogin ? 'Abune ol' : 'Daxil ol'}</Link>}
                    </p>
                </div>
            </Form>
        </div>
    </section>
}