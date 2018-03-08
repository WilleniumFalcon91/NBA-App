import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates';

class NewsSlider extends Component {
    state = {
        articles : []
    }

    componentWillMount() {
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then( response => {
            this.setState({
                articles:response.data
            })
        })
    }


    render() {
        return (
            <div> 
                <SliderTemplates data={this.state.articles} type="featured"/>
            </div>
        )
    }
}

export default NewsSlider;