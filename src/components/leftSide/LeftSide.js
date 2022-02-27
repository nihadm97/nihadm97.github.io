import React from 'react';
import Avatar from '../avatar/Avatar';
import './LeftSide.scss';
import CV from "./Nihad_Mehmedovic_CV.doc"


const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am</p>
                    <h1 className="o-font-lg ml-2 o-text-purple">Nihad Mehmedović</h1>
                </div>
                <p className="text-center text-white">I am a Bachelor of Mathematics and Informatics
                . I can provide clean code and also make websites  more interactive with web animations.</p>
                <div className="row mb-5 justify-content-center">
                    <a href={CV} download className="d-block m-3 text-white o-btn text-center py-2 position-relative">DOWNLOAD CV</a>
                    <a href="/contact" className="d-block m-3 text-white o-btn text-center py-2 position-relative">CONTACT ME</a>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;