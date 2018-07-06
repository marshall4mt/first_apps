import React, { Component}  from 'react';
import '../../asset/scss/style.scss';
import { Slide } from 'react-slideshow-image';


class Slideshow extends Component {

    constructor(props){
        super(props);
          this.state = {
            imagesUrl:[
                'http://static.pgwjs.com/img/pg/slider/montreal.jpg',
                'http://static.pgwjs.com/img/pg/slider/shanghai.jpg',
                'http://static.pgwjs.com/img/pg/slider/new-york.jpg',
            ]
          }
    }

    render() {
        return (
            <div>
                <div className="slideshowx">
                <Slide
                    images={this.state.imagesUrl}
                    duration={5000}
                    transitionDuration={1000}
                    />
                </div>

                <h4 className="test">TEST</h4>
            </div>


        );
    }
}

export default Slideshow;