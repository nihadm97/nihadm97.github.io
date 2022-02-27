import React from 'react';
import Title from '../title/Title';

const InfoItem = ({ infoTitle, infoValue }) => (
    <li className="mb-2">
        <div className="row">
            <div className="col-4 font-weight-bold">{infoTitle}</div>
            <div className="col-8">{infoValue}</div>
        </div>
    </li>
);

class InfoList extends React.Component{

    state = {
        allInfo: [
            {
                infoTitle: 'Age',
                infoValue: 24,
            },
            {
                infoTitle: 'Languages',
                infoValue: 'Bosnian, English, Germany',
            },
            {
                infoTitle: 'Nationality',
                infoValue: 'Bosnian',
            },
            {
                infoTitle: 'Address',
                infoValue: 'Olivera Ibrahimovića 35, Stupsko Brdo, Sarajevo 71000',
            },
            {
                infoTitle: 'Title',
                infoValue: 'Bachelor of Mathematics and Informatics',
            },
        ]
    }

    render(){
        return(
            <>
                <Title>About</Title>
                <ul className="list-unstyled p-3">
                    {
                        this.state.allInfo.map((item, index) => (
                            <InfoItem key={index} {...item} />
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default InfoList;