import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1696912158241-be58ad220dcc?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1549389055-008961ff0002?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1601398354075-6eb348d21661?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
        return (
        <div className='info-box'>
            <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info?.humidity > 70 ? RAIN_URL : info?.temp > 30 ? HOT_URL : info?.temp !== undefined ? COLD_URL : INIT_URL}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography  variant="h5" component="div">
                        {info.city}            {info.humidity > 70 ? <ThunderstormIcon /> : info.temp > 30 ?  <WbSunnyIcon />: <AcUnitIcon /> }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>Max Temp: {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.description}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small" 
                        color="primary"
                        href="https://github.com/nakulKumar10010/ForecastNow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub Repo
                    </Button>
                    <Button 
                        size="small" 
                        color="primary" 
                        href="https://www.linkedin.com/in/nakul2004" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LinkedIn Profile
                    </Button>
                </CardActions>
            </Card>
            </div>
        </div>
    );
}
