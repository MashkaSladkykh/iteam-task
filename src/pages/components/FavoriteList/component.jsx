import Back from "../Back";
import CardItem from "../Cards/CardItem";
import Header from '../Header';
import Search from '../Search';

const FavoriteList = () => {
    const favoriteApps = JSON.parse(localStorage.reduxState).apps.favApps;
    console.log(JSON.parse(localStorage.reduxState).apps)
    return (
        <>
        <Header/>
        <Search/>
        {favoriteApps.map(app => 
            <CardItem
            key={app.appId}
            app={app}
            />)}
        <Back/>
        </>
    )
};

export default FavoriteList;