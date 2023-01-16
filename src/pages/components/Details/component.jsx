import { useParams, NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

const Details = () => {
    let { appId } = useParams();
    let [, hash] = appId.split('=');
    const apps = JSON.parse(localStorage.reduxState).apps.data;
    const detailedApp = apps.find(( { appId }) => appId === hash);
    const summ = detailedApp.reviewSummary.toString().split('<br>')
    
    return (
        <div>
            <div>
                <img src={detailedApp.imgUrl} alt="poster" />
                <h1>{detailedApp.title}</h1>
                <p>
                    <span>{detailedApp.released}</span>
                    <span>{detailedApp.price}</span>
                </p>
                <p>The raiting is <b>{summ[0]}</b></p>
                <p>{summ[1]}</p>
            </div>
            <NavLink to={`/`}>
                <IconButton>
                    <ArrowBackIcon/>
                    Back
                </IconButton>
            </NavLink>
        </div>
    )
}

export default Details;