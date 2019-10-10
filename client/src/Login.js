import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from './Api'
import {State} from './State';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

export default function Login(props) {

    const [userName,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const [hata,setHata] = useState(null);

    const classes = useStyles();

    async function giris () {
        try {
            const res = await axios.post('users/authenticate', {kullaniciAdi: userName, sifre: password});
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.sonuc.token.access_token}`;

            State.user = res.data.sonuc.user;
            State.token = res.data.sonuc.token;
            props.history.push('/');
        }catch (e) {
            setHata(e.response.data.hata);
        }
    }

   return (
       <Grid
           container
           direction="column"
           justify="center"
           alignItems="center"
       >

           <Grid item xs={12}>
               <TextField
                   id="standard-name"
                   label="Kullanıcı Adı"
                   className={classes.textField}
                   value={userName}
                   onChange={e => setUsername(e.target.value)}
                   margin ="normal"
                   error = {(userName == null || userName.length > 0) ? false : true}
                   onKeyPress={(event) => {if (event.key === "Enter") {giris();}}}
               />
           </Grid>
           <Grid item xs={12}>
               <TextField
                   id="standard-password-input"
                   label="Şifre"
                   className={classes.textField}
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   type="password"
                   autoComplete="current-password"
                   margin="normal"
                   error = {(password == null || password.length > 0) ? false : true}
                   onKeyPress={(event) => {if (event.key === "Enter") {giris();}}}
               />
           </Grid>
           <Grid item xs={12}>
               <Button variant="contained" color="primary" disabled={!(userName && password)} onClick={() => giris()} >
                    <span>GİRİŞ</span>
               </Button>

           </Grid>
           <Grid item xs={12}>{hata}</Grid>

       </Grid>




    );
}