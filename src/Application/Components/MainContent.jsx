import React from 'react';
import { Panel, Button, Well, Grid } from 'react-bootstrap';
import GridRowPost from './GridRowPost';


const tabInfo = {
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

var firstPostText = `Hey there lucky reader and welcome to Sylver Studios.
Check out some of our links and await new content. We are doing a mad rush to get all of our cool toys 'production ready.'
Don't forget to play our first release - Supervirus.`;


const MainContent = React.createClass({
  getInitialState() {
    return {
      activeTab: 'home',
    };
  },

  render() {
    const activeTab = this.props.activeTab;
    const data = tabInfo[activeTab];

    if (activeTab == 'home') {
      return (
        <div id="main-content" className="row main-content">
          <div id="header">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Well>
                Welcome Home! You can find updates and new content here, so check back often.
              </Well>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div id="blog-content">
            <Grid>
              <GridRowPost 
                title='Initial Commit!' 
                publishDate='2/14/16' 
                imageLocation='/assets/SupervirusPicSmaller.png' 
                text={firstPostText}
                link="http://samgqroberts.com/games/supervirus"  />
            </Grid>
          </div>
        </div>
      );
    }

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