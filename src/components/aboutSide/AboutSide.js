import React from 'react';
import InfoList from '../info/InfoList';
import Services from '../services/Services';
import withCustomScroll from './../../hoc/withCustomScroll';

class AboutSide extends React.Component{
    render(){
        return(
            <>
                <InfoList />
                <Services />
            </>
        );
    }
}

export default withCustomScroll(AboutSide);