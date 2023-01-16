import CardItem from "../Cards/CardItem";


const FavoriteList = () => {
    const favoriteApps = JSON.parse(localStorage.reduxState).apps.favApps;
    return (
        <>
        {favoriteApps.map(app => 
            <CardItem
            key={app.appId}
            app={app}
            />)}
        </>
    )
};

export default FavoriteList;