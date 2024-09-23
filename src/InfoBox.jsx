import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({ info }) {
    const Hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_URL = "https://images.unsplash.com/photo-1613083093144-bfa5c3eb8337?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_URL = "https://images.unsplash.com/photo-1489781879256-fa824b56f24f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cloudy_URL = "https://images.unsplash.com/photo-1499956827185-0d63ee78a910?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="Infobox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? Rain_URL : info.cloud > 70 ? Cloudy_URL : info.temp > 22 ? Hot_URL : Cold_URL}
                    title={info.weather.toUpperCase()}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city.toUpperCase()}&nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.cloud > 70 ? <CloudIcon/> : info.temp > 22 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg; C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Clouds = {info.cloud}%</p>
                        <p>Min Temp = {info.tempMin}&deg; C</p>
                        <p>Max Temp = {info.tempMax}&deg; C</p>
                        <p>The weather can be describe as {info.weather} and feels like {info.feelsLike}&deg; C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}