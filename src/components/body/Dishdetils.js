import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap'
import LoadComment from './LoadComment'
const Dishdetils = ({dish}) => {
  return (
    <div>
          <Card className="my-2">
            <CardImg
            alt="Card image cap"
            src={dish.image}
            style={{
              height: 'auto'
            }}
            top
            width="100%"
        />
        <CardBody style={{textAlign:'left'}}>
          <CardTitle tag="h5">
            {dish.name}
          </CardTitle>
          <CardText>
            {dish.description}
          </CardText>
          <CardText>
            Price:{dish.price}
          </CardText>
          <hr/>
          <LoadComment comments={dish.comments}/>
        </CardBody>
      </Card>
    </div>
  )
}

export default Dishdetils