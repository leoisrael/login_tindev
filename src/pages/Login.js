import React from 'react';      //importacao obrigatoria em todo arquivo js do react
import './Login.css';           //importando o estilo da pagina

import logo from '../assets/logo.svg';  //importa a imagem do logo

export default function Login() {       //"export defailt" ja deixa esse arquivo disponivel para ser importado em outro ponto
                                        //a function é onde todo o html vai entrar no js
    return (                            //a funcao deve retornar o codigo html
        <div className="login-container">    
            <form>
                <img src={logo} alt="Tindev"/>
                <input placeholder='Digite seu usuario no Github' />
                <button type='submit'>Enviar</button>
            </form>                    
        </div>
    );
}