import image from '../img/banner.jpg';

const Banner = () =>
    <div className="banner">
        <img className="w-100 h-auto" src={image} alt="К весне готовы!" />
        <h2 className="banner-header">К весне готовы!</h2>
    </div>;

export default Banner;