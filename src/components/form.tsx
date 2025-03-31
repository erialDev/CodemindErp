import React, { useState } from "react";
import stylesform from "@/styles/form.module.css";
import Image from "next/image";

const CustomForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={stylesform.card_principal}>

            <section className={stylesform.card_izq}>
                <div className={stylesform.card_text}>
                    <p>Bienvenido</p>
                </div>
                <div className={stylesform.card_image}>
                    <Image
                        src="/logoCodemind.svg"
                        alt="logo"
                        width={400}
                        height={300}
                        className={stylesform.image}
                    />
                </div>
                <div className={stylesform.card_register}>
                    <p>
                        ¿No tienes una cuenta?
                    </p>

                    <a><strong> Registrate</strong></a>
                </div>
            </section>

            <section className={stylesform.card_der}>
                <div className={stylesform.card_form}>
                    <div className={stylesform.card_login}>
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <form className={stylesform.form} autoComplete="on">
                        <label htmlFor="">Email o Usuario:</label>
                        <input type="email" name="" id="" placeholder="Ingrese su correo" autoComplete="email" />

                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="" id="" placeholder="Ingrese su contraseña" autoComplete="current-password" />
                        <div className={stylesform.card_opciones}>
                            <div className={stylesform.card_chk}>
                                <input type="checkbox" id="chk" defaultChecked className={stylesform.chk} />
                                <label htmlFor="chk" className={stylesform.chklabel}></label>
                                <span className={stylesform.chktext}>Recuerdame</span>
                            </div>
                        </div>
                        <div className={stylesform.card_button} ><button type="submit" className={stylesform.button_login}>Ingresar</button></div>
                        <div className={stylesform.cardRecordPassword}>
                            <a
                                href="#"
                                className={stylesform.card_opcion}
                            >
                                Olvidé mi contraseña
                            </a>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default CustomForm;
