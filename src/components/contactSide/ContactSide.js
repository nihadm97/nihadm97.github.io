import React from 'react';
import Title from './../title/Title';
import withCustomScroll from './../../hoc/withCustomScroll';

const ContactItem = ({ title, body }) => (
    <li className="d-flex flex-column mb-3">
        <span className="o-font-sm mb-1 o-text-purple">{title}</span>
        <span className="o-font-xs">{body}</span>
    </li>
);

class ContactSide extends React.Component {

    state = {
        fullName: '',
        email: '',
        message: '',
        ContactItems: [
            {id: 1, title: 'E-mail', body: 'nihadm97@outlook.com'},
            {id: 2, title: 'Address', body: 'Olivera Ibrahimovića 35, Stupsko Brdo, Sarajevo 71000'},
            {id: 3, title: 'Phone', body: '+38763/684-864'},
            {id: 4, title: 'Math and programming instructions', body: 'Available'},
        ]
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({fullName: '', email: '', message: ''});
    }

render(){
    return(
        <>
            <Title>Contact Me</Title>
            <ul className="list-unstyled o-grid">
                {
                    this.state.ContactItems.map(item => (
                        <ContactItem key={item.id} {...item} />
                    ))
                }
            </ul>
        </>
    );
}

}

export default withCustomScroll(ContactSide);