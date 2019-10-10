import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import Badge from "@material-ui/core/Badge";
import {State} from './State';

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

const varsayilan = [{kodu:'MAT101',adi:'Matematik',bolumu:'Bilgisayar Mühendisliği',notlar:[75,60,60,60]},
    {kodu:'MAT101',adi:'Matematik',bolumu:'Bilgisayar Mühendisliği',notlar:[75,60,60,60]},
    {kodu:'MAT101',adi:'Matematik',bolumu:'Bilgisayar Mühendisliği',notlar:[75,60,60,60]},
    {kodu:'MAT101',adi:'Matematik',bolumu:'Bilgisayar Mühendisliği',notlar:[75,60,60,60]}];

export default function Sayfa1(props) {
    const classes = useStyles();
    const [dersler,] = useState(varsayilan);

    const getCard = ders => {
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="kod" className={classes.avatar}>
                            MAT101
                        </Avatar>
                    }

                    title="Matematik"
                    subheader="Bilgisayar Mühendisliği"
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div className="row">
                            <div className="col col-sm-6">1.Vize: </div>
                            <div className="col col-sm-6">75</div>
                            <div className="col-sm-6">2.Vize:</div>
                            <div className="col-sm-6">60</div>
                            <div className="col-sm-6">Proje:</div>
                            <div className="col-sm-6">60</div>
                            <div className="col-sm-6">Final:</div>
                            <div className="col-sm-6">60</div>
                            <div className="col-sm-6">Ortalama:</div>
                            <div className="col-sm-6"><Badge badgeContent={100} max={100} color="secondary"></Badge></div>
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