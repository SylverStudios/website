import React from 'react';
import { Row, Col, Panel, Image, Button } from 'react-bootstrap';

const GridRowPost = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    publishDate: React.PropTypes.string.isRequired,
    imageLocation: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string,
  },

  render: function() {
    var button;
    if (this.props.link) {
      button = <Button bsStyle="link" href={this.props.link}> I'm in! </Button>
    }

    return (
      
      <Row>
        <Col xs={6} md={4}>
          <Image src={this.props.imageLocation} href="http://google.com" rounded />
        </Col>

        <Col xs={6} md={8}>
          {this.props.publishDate}
          <Panel header={this.props.title} bsStyle="primary">
            {this.props.text}
            {button}
          </Panel>
        </Col>
      </Row>

    );
  },

});

export default GridRowPost;
