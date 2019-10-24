import { Cabecalho } from '../../components/Cabecalho/app.js'
import { Container } from '../../components/Container/app.js'
import React, {Fragment} from 'react';
const user = {
    photo:"https://res.cloudinary.com/teepublic/image/private/s--GyiWNp08--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1546345250/production/designs/3860212_0.jpg",
    name:"Diego Castorino",
    nick:"@DiegoCastorino"
}

export function Home(props){
    return (
        <Fragment>
        <Cabecalho >{user}</Cabecalho>
        <Container >{user}</Container>
        </Fragment>
    )
}