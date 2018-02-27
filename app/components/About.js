import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from './Header'
import * as actionCreators from '../actions/actionCreators';

class About extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const pStyle = {
      textAlign: 'justify'
    };
    const imgStyle = {
      maxWidth: "700px",
      border: "1px darkgrey"
    };
    return (
      <div className="site-content">
        <article id="main-content">
        <h1>About</h1>
          <p>
          Online deliberation tools are historically not that common in the RIS3 processes. However, the regions that have applied similar tools experienced increased level of stakeholder engagement with relatively low costs.
          </p>
          <p style={pStyle}>
          	<strong>Engaging stakeholders</strong> through <strong>web-based debating platforms</strong> is an effective way to facilitate the <strong>entrepreneurial discovery process</strong> within a region. These platforms allow policymakers to organise discussions, debates and idea generation online, for example, on the region&#8217;s vision, policies and opportunities with all stakeholder groups. Thus, they provide an excellent opportunity for not only increasing stakeholder participation but also the transparency and legitimacy of the RIS3 process and its outcomes. Stakeholder engagement has been done via working groups, online surveys and interviews. While these methods are also important they lack openness and opportunity for open initiative from the stakeholders.
          </p>
          <p>
          For facilitating online discussions, we suggest using one of three applications:
          </p>

          <ol style={pStyle}>
          	<li><strong>Discuto</strong>
          	</li>
          	<li><strong>DebateGraph</strong>
          	</li>
          	<li><strong>S3Engagement</strong>
          	</li>
          </ol>
          <p style={pStyle}>
          	These applications take somewhat different approaches to facilitating discussion with stakeholders. You can inspect and test all of them and select the one that is best suited for your purposes.
          </p>
          <p> The key differences in ease of use and capabilities are: </p>
          <ul>
          	<li><strong>Discuto:</strong> The most user friendly of the three, but includes usage fees, which can make the use of the tool costly for large audiences.
            </li>
            <li> <strong>DebateGraph:</strong> The application can be difficult to set up and install, but offers very flexible options for discussion.
            </li>
            <li>
            	<strong>S3Engagement:</strong> The platform is simple, and lacks many of the features the other external applications have, but is developed as a part of the OnlineS3 project, and as such has no dependency on any external businesses.
            </li>
          </ul>


          <h2 style={pStyle}>Discuto</h2>
          <p style={pStyle}>
          	Discuto is a platform for collaborative decision-making. It supports both private and public discussions on documents, collecting feedback, identifying conflicting views and reaching consensus among stakeholders. This is how to use the tool:
          </p>
          <ol style={pStyle}>
          	<li>Upload a document (e.g. a proposal) onto the platform and start a discussion. The document is automatically divided into sentences and paragraphs.</li>
          	<li>Invite stakeholders to contribute via email.</li>
          	<li>Stakeholders may comment and vote sections of your text.</li>
          	<li>Identify controversial topics and make appropriate changes to reach consensus.</li>
          </ol>
          <p style={pStyle}>
          	<img src="https://www.discuto.io/sites/default/files/diagram.png" />
          </p>
          <p style={pStyle}>
          	This simple process allows facilitating discussions and debates with stakeholders in a quick and open way.
          </p>
          <p style={pStyle}>
          	The basic functionalities of the tool are free but upgrading to a paid subscription provides an access to some other useful functionalities, such as the idea generation process and information pages for your discussions and region. You can check the subscription options <a href="https://www.discuto.io/en/upgrade">here</a>.
          	</p>
          <h2 style={pStyle}>DebateGraph</h2>
          <p style={pStyle}>
          	DebateGraph is a tool that combines reasoning activities with collaborative and iterative reflection, making them more open and clear. The tool is based on argument mapping that enables policy-makers and stakeholders to visualise and share networks of thoughts. Consequently, the tool is great for brainstorming and debating ideas about the regional opportunities to specialise.
          </p>
          <p style={pStyle}>
          	Moreover, visualising the regional problems, issues and ideas result in a valid overview of the regional challenges. Due to the collaborative editing features, the collective knowledge and views can be shared among the stakeholders.
          </p>
          <p style={pStyle}>
          	Additionally, if collaborators detect any information or idea gaps in the map, they may add new ideas to the map. As a result, the argument map becomes more versatile and the regional stakeholders may see what other stakeholders want and suggest.
          </p>
          <p style={pStyle}>This is the summary of how to use DebateGraph:</p>
          <ol>
          <li>Create a debate map on DebateGraph to identify challenges that need to be overcome.</li>
          <li>Create positions and sub-positions of the challenges.</li>
          <li>Write arguments both supportive and opposing.</li>
          <li>Include other scenarios and manage the graphs.</li>
          <li>Rank the arguments and ideas.</li>
          <li>Label the arguments and ideas by different stakeholders.</li>
          <li>Rate the significance and merits of the problems, positions and arguments.</li>
          <li>Pick out the arguments that are seen as weak or strong.</li>
          <li>Analyse, seek and relocate arguments around the map.</li>
          <li>Direct arguments to external locations.</li>
          </ol>
          <p className="et-fb-mce-line-break-holder" style={pStyle}>
          	<img className="wp-image-6415 aligncenter size-large" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/05/debategraph-1024x564.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/05/debategraph-1024x564.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/05/debategraph-300x165.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/05/debategraph-768x423.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/05/debategraph-1080x595.png 1080w" sizes="(max-width: 1024px) 100vw, 1024px" />
          </p>
          <p style={pStyle}>DebateGraph is a completely free online service.</p>

          <img src="/static/img/application_background.png"/>

          <h2 style={pStyle}>S3Engagement</h2>
          <p>
          S3Engagement tool enables inviting stakeholders to collaborate and letting them share and comment on regional issues. This way, stakeholders may participate proactively and bring forward their specific viewpoints.
          </p>
          <p>
          The S3Engagement tool enables regional RIS3 facilitators to engage stakeholders and get feedback on the RIS3 process from them. The tool allows registered users to set up regional platforms and set up discussion areas related to the RIS priorities of the region, for online deliberation with the region’s stakeholders.
          </p>
          <p>
          Beside the comments and input from stakeholders, there is also a voting mechanism in the application. Thus, stakeholders may vote up and down the ideas and suggestions, which provides the facilitators a quick way to see which posts have gotten most interest from the stakeholders.
          </p>
          <p>
          Within each region, any number of different priorities can be created to guide the discussion into issues concerning each individual priority of the area.
          Each region can have any number of stakeholders and administrators.
          </p>

        <h1>Benefits to stakeholders</h1>
        <p>
         Firstly, the applicationS facilitate greater stakeholder engagement and enable a more open stakeholder engagement process. Secondly, the tools allow stakeholders and facilitators to deliberate issues and ideas together. Thus, stakeholders’ opinions matter and they get the feeling of having impact on regional policy-making. Lastly, the tools promote long term collaboration and refinement of regional issues and ideas. At its best, this establishes a long term relationship and collaboration between stakeholders and policy-makers.
        </p>

        </article>

        <aside id='sidebar'>
            <div className="sidebar-button alt"> <a href="http://www.s3platform.eu/wp-content/uploads/2017/06/Guideline_Tool_RIS3_Debate_at_a_glance.pdf" > Download Guide  <i className="fa fa-file-pdf-o" aria-hidden="true"></i> </a></div>
            <div className="sidebar-button">  <a href="/application"> Access to application  <img src="/static/img/access-icon.png" width="20"/> </a></div>
        </aside>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatch1ToProps(dispatch1) {
  return {
    onMount() {
    }
  }
}

export default connect(mapStateToProps, mapDispatch1ToProps)(About);
