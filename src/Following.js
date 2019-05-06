import React, { Component } from 'react';
import { Card, CardLink, CardBody, CardTitle, CardText, Button } from 'reactstrap'

class Following extends Component {
    render() {
        return (
            <div className="container">
            <Card> <CardBody>
                <CardTitle> <b> Who to follow </b><CradLink href="#"> Refresh</CradLink></CardTitle>
                <CardImg src="#" alt="img"/>
                <CardText> name </CardText>

                <Button outline color="info"> follow</Button>
                <br/>


           </CardBody>
           </Card>
             </div>
            <div>
                <h1>Following</h1>
        
            </div>
        )
    }
}


export default Following
