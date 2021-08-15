import image from '../img/banner.jpg';

const Banner = () =>
    <div className="banner">
        <img className="w-100 h-auto" src={image} alt="К весне готовы!" />
        <div className="banner-header">К весне готовы!</div>
    </div>;

export default Banner;