import React, { Component } from 'react';
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import sections
import HomeHeader from './HomeHeader';
import Speciality from './Section/Speciality';
import Doctor from './Section/Doctor';
import MedicalFacility from './Section/MedicalFacility';
import Handbook from './Section/Handbook';
import About from './Section/About';
import Homefooter from './Homefooter';
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            // autoplay: true,
        }
        return (
            <>
                <HomeHeader isShowBanner={true} />
                <Speciality
                    settings={settings} />
                <MedicalFacility
                    settings={settings} />
                <Doctor
                    settings={settings} />
                <Handbook
                    settings={settings} />
                <About />
                <Homefooter />
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
