import React, { useState } from "react";
import stylesform from "@/styles/form.module.css";
import Image from "next/image";

const CustomForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={`container-fluid ${stylesform.container}`}>
            <div className="row">
                {/* Sección izquierda con imagen */}
                <section className={`col-md-6 p-0 d-none d-md-block ${stylesform.cardIzq}`} >
                    <Image
                        width={0}
                        height={0}
                        src="/image.jpg"
                        alt="Imagen"
                        layout="fill"
                        objectFit="cover"
                    />
                </section>

                {/* Sección derecha con contenido */}
                <section className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={{ height: "100vh", zIndex: 2 }}>
                    <div className="text-center">
                        <h2>Sección derecha</h2>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CustomForm;
