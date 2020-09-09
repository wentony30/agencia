import React from 'react'
import './styles.css';

const Inicio = () => (
    <div className="fundo">
        <div className="container h-100 px-5">
            <div className="row h-100 align-items-center">
                <div className="col-6">
                    <div className="conteudo">
                        <h2 className="titulo">Websites and Advertising That Skyrocket your Sales & Profits</h2>
                        <p className="p-inicio">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                        <div className="mt-5">
                            <a href="#" className="quero-site">Quero um Site</a>
                            <a href="#" className="saiba-mais">Saiba Mais</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center">(imagem)</div>
            </div>
        </div>
    </div>
);

export default Inicio;