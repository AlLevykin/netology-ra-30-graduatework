import image from '../img/banner.jpg';

const Banner = () =>
    <div className="banner">
        <img className="img-fluid" src={image} alt="К весне готовы!" />
        <h2 className="banner-header">К весне готовы!</h2>
    </div>;

export default Banner;