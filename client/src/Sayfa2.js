import React from 'react';
import {State} from './State';

export default function Sayfa1(props) {

    if (State.token == null) props.history.push('/login');

   return (
        <div>
            Sayfa - 2
        </div>
    );
}