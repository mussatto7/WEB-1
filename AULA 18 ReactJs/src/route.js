import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//importação dos componentes criados
import Main from './Pages/Main';
import Contato from './Pages/Contato';
import Cadastro from './Pages/Cadastro';

function Routes() {
    return(
        //build das rotas pelo navegador
        //switch faz a comparaçao entre os componentes
        //route define a rota
        <BrowserRouter>
            <Switch>                
                <Route path="/main" exact component={Main}/>
                <Route path="/contato" component={Contato}/>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;