import { useParams } from 'react-router-dom';
import Back from '../Back';
import Header from '../Header';
import Search from '../Search';

const Details = () => {
    let { appId } = useParams();
    let [, hash] = appId.split('=');
    const apps = JSON.parse(localStorage.reduxState).apps.data;
    const detailedApp = apps.find(( { appId }) => appId === hash);
    const summ = detailedApp.reviewSummary.toString().split('<br>')
    
    return (
        <div>
            <Header/>
            <Search/>
            <div className='details'>
                <img src={detailedApp.imgUrl} alt="poster" className='details_poster'/>
                <h1 className='details_title'>{detailedApp.title}</h1>
                <p className='details_info'>
                    <span>{detailedApp.released}</span>
                    <span>{detailedApp.price}</span>
                </p>
                <p className='details_raiting'>The raiting is <b>{summ[0]}</b></p>
                <p className='details_summ'>{summ[1]}</p>
            </div>
            <Back/>
        </div>
    )
}

export default Details;