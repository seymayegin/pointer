import React from 'react';
import Duyuru from "./Duyuru";
import {State} from './State';

export default function Home(props) {

    if (State.token == null) props.history.push('/login');

    return (
        <div>
            <Duyuru/>

        </div>
    );
}
