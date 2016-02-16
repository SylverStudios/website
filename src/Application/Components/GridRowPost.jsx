import React from 'react';
import { Row, Col, Panel, Image, Button } from 'react-bootstrap';

const GridRowPost = React.createClass({
  propTypes: {
    imageLocation: React.PropTypes.string.isRequired,
    link: React.PropTypes.string,
    linkText: React.PropTypes.string,
    publishDate: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  },
  getDefaultProps() {
    return {
      linkText: `I'm in!`,
    };
  },

  render() {
    let button;
    if (this.props.link) {
      button = <Button bsStyle="link" href={this.props.link}> {this.props.linkText} </Button>;
    }

    return (

      <Row className="grid-row-post-component">
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
