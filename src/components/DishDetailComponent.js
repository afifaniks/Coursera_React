import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {
    constructor (props) {
        super(props);

    }

    renderDish(dish) {
        return (        
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>);
    }

    renderComments (comments) {
        const coms = comments.map((c) => {
            return (
              <li>
                <p>{c.comment}</p>
                <p>-- {c.author}, {c.date}</p>
              </li>  
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>

                <ul className="list-unstyled">
                    {coms}
                </ul>
            </div>);
    }

    render () {
        if (this.props.selectedItem != null) {
            return ( 
                <div className="row">
                    {this.renderDish(this.props.selectedItem)}
                    {this.renderComments(this.props.selectedItem.comments)}
                </div>);
        } else {
            return <div></div>
        }

    }

}

export default DishDetail;