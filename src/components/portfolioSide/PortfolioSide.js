import React, { Suspense } from 'react';
import Title from '../title/Title';
import CardList from '../cardList/CardList';
import SkeletonLoader from './../skeletonLoader/SkeletonLoader';
import { portfolios } from './../../@fake-db/db/portfolios-db';
import withCustomScroll from './../../hoc/withCustomScroll';
import './PortfolioSide.scss';

const Card = React.lazy(() => import('../card/Card'));

class PortfolioSide extends React.Component{

    state = {
        portfolios
    }

    render(){
        return(
            <>
                <Title>Projects</Title>
                <h4>EvidencijaAPP (records APP for professors)</h4>
                <a target="_blank" href='https://github.com/nihadm97/evidencijaapp-react.git'>Download frontend</a><br></br><br></br>
                <a target="_blank" href='https://github.com/nihadm97/evidencijaapp-django-backend.git'>Download backend</a><br></br><br></br>
                <h4>DrawingAPP</h4>
                <a target="_blank" href='https://github.com/nihadm97/DrawingAPP-ReactJS.git'>Download</a><br></br><br></br>
                <h4>Ćilim game</h4>
                <a target="_blank" href='https://github.com/nihadm97/--cilim-game-javascript.git'>Download</a>
            </>
        );
    }
}

export default withCustomScroll(PortfolioSide);