import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const tabInfo = {
  home: {
    panelHeader: "Home",
    panelContent: "Welcome to the home page.",
    links: [],
  },
  games: {
    panelHeader: "Games",
    panelContent: "Check out the links to our games below!",
    links: [{ title: 'Supervirus', link: 'http://samgqroberts.com/games/supervirus'}],
  },
  videos: {
    panelHeader: "Videos",
    panelContent: "Great ideas combined with mediocre editing for your viewing pleasure.",
    links: [{ title:"Sam's Vine", link:'https://vine.co/u/1126746091921248256'},
            { title:"Aaron's Vine", link:'https://vine.co/u/1023073943265157120'}
            ],
  },
  sam: {
    panelHeader: "Sam",
    panelContent: "Sam might want to say something about himself here. Kinda weird that this page is on his website already, but I'll give him the link.",
    links: [{title:'Git', link:'https://github.com/samgqroberts'},
            {title: 'Personal Site', link: "http://samgqroberts.com"}],
  },
  aaron: {
    panelHeader: "Aaron",
    panelContent: "Aaron is an awesome developer.",
    links: [{ title:'Git', link:'https://github.com/Miguel4president'}],
  },
  sylverStudios: {
    panelHeader: "Sylver Studios",
    panelContent: "Sylver Studios is a new company just bursting into the startup world (once we get the rights to that name and domain). We have dreams and aspirations.",
    links: [],
  },

};


const MainContent = React.createClass({
  getInitialState() {
    return {
      activeTab: 'home',
    };
  },

  render() {
    const activeTab = this.props.activeTab;
    const data = tabInfo[activeTab];

    return (
      <div id="main-content" className="row main-content">
        <div className="col-md-2"></div>
        
        <div className="col-md-8">
          <Panel header={data.panelHeader} bsStyle="primary">
            {data.panelContent}
            <ul>
              {
                data.links.map(function(linkInfo) {
                  return <li key={linkInfo.title}><Button bsStyle="link" href={linkInfo.link}> {linkInfo.title} </Button></li>;
                })
              }
            </ul>
          </Panel>
        </div>
        
        <div className="col-md-2"/>
      </div>
    );
  },
});

export default MainContent;