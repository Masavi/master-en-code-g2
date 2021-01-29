import { Component } from 'react';


class ImageCard extends Component {
    /* constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
        }
    } */
    render() {
        return( 
        <>
            <img 
            width="150px" 
            src={this.props.url} alt="img-card"
            />
            {/* <h6>{this.props.url}</h6> */}
        </>
        )
    }
}

export default ImageCard;