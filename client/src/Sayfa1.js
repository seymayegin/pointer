import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import Badge from "@material-ui/core/Badge";
import {State} from './State';
import axios from './Api';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        fontSize: '10px',
        backgroundColor: red[500],
    },
}));


export default function Sayfa1(props) {
    const classes = useStyles();
    const [dersler, setDersler] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await axios.get('kayit/kullanici-ders', {});
        setDersler(res.data.data);
        console.log(res);
    }

    const getOrtalama = ders => (ders.not_vize1+ ders.not_vize2+ ders.not_proje+ ders.not_final)/4;

    const getCard = ders => {
        const kayitlar = require("./dersler.json");

        console.log(kayitlar);
        console.log(ders.ders_id);

        const kayit = kayitlar.filter(val => val.id === ders.ders_id)[0];
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="kod" className={classes.avatar}>
                            {kayit.kodu}
                        </Avatar>
                    }

                    title={kayit.adi}
                    subheader={kayit.bolumu}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div className="row">
                            <div className="col col-sm-6">1.Vize: </div>
                            <div className="col col-sm-6">{ders.not_vize1}</div>
                            <div className="col-sm-6">2.Vize:</div>
                            <div className="col-sm-6">{ders.not_vize2}</div>
                            <div className="col-sm-6">Proje:</div>
                            <div className="col-sm-6">{ders.not_proje}</div>
                            <div className="col-sm-6">Final:</div>
                            <div className="col-sm-6">{ders.not_final}</div>
                            <div className="col-sm-6">Ortalama:</div>
                            <div className="col-sm-6"><Badge badgeContent={getOrtalama(ders)} max={100} color={getOrtalama(ders) > 80 ? 'primary' : "secondary"}></Badge></div>
                        </div>
                    </Typography>
                </CardContent>

            </Card>
        );
    };

    if (State.token == null) props.history.push('/login');

    return (
        <div>
            <div className="row">
                {dersler.map(ders => <div className="col col-sm-4 mt-5">{getCard(ders)}</div>)}
            </div>
        </div>

   );
}