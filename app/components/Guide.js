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
    const imgStyle = {
      maxWidth: "700px",
      border: "1px darkgrey"
    };
    const pStyle = {
      textAlign: 'justify'
    };
    return (
      <div className="site-content">
        <h1>
          Discuto
        </h1>
        <p className="" style={pStyle}>
        	Using Discuto is fairly simple:
        </p>
        <p className="" style={pStyle}>
        	1. Go to
        	<a href="http://discuto.io/" target="_blank" rel="noopener noreferrer">discuto.io</a>
        	 and register for a free account.
        </p>
        <p className="" style={pStyle}>
        	2. Once you have logged in, click on “Create discussion” on the top bar.
        </p>
        <p className="" style={pStyle}>
        	3. Upload your idea/suggestion as a text document (.doc, .docx, .html, .rtf or .odt file). Make sure to mark all the headers in the document.
        </p>
        <p className="et-fb-mce-line-break-holder" style={pStyle}>
        	<img className="wp-image-6716 aligncenter size-full" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto2.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto2.png 1908w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto2-300x168.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto2-768x429.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto2-1024x572.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto2-1080x603.png 1080w" sizes="(max-width: 1908px) 100vw, 1908px" />
        </p>
        <p className="" style={pStyle}>
        	4. The tool automatically divides the document into headers and paragraphs. The document will be ready for feedback immediately.
        </p>
        <p className="et-fb-mce-line-break-holder" style={pStyle}>
        	<img className="wp-image-6718 aligncenter size-large" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto3-1024x844.png" alt=""  srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto3-1024x844.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto3-300x247.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto3-768x633.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto3-1080x890.png 1080w" sizes="(max-width: 1024px) 100vw, 1024px" />
        </p>
        <p className="" style={pStyle}>
        	5. Click the sharing button on top of the page and share your document with stakeholders.
        </p>
        <p className="" style={pStyle}>
        	<img className="wp-image-6719 aligncenter size-full" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto6.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto6.png 1908w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto6-300x168.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto6-768x429.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto6-1024x572.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto6-1080x603.png 1080w" sizes="(max-width: 1908px) 100vw, 1908px" />
        </p>
        <p className="" style={pStyle}>
        	6. Let your stakeholders vote and comment the document.
        </p>
        <p className="et-fb-mce-line-break-holder" style={pStyle}>
        	<img className="wp-image-6720 aligncenter size-full" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto5.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/discuto5.png 1908w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto5-300x168.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto5-768x429.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto5-1024x572.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/discuto5-1080x603.png 1080w" sizes="(max-width: 1908px) 100vw, 1908px" />
        </p>
        <p className="" style={pStyle}>
        	7. Identify controversial issues based on votes and comments and change the content accordingly.
        </p>
        <p style={pStyle}>
        	8. After you are done with the debate, download the document (click the gear icon in the top-right corner).
        </p>
        <p>Furthermore, you can edit many discussion settings such as the duration and visibility of the document discussions (click the gear icon in the top-right corner). You can find more information on the tool at
        	<a href="https://www.discuto.io/en/basic-page/how-it-works" target="_blank" rel="noopener noreferrer">discuto.io/en/basic-page/how-it-works</a>.
        </p>
        <h1>
        	Debategraph
        </h1>
        <p>1. Go to
        	<a href="http://debategraph.org/" target="_blank" rel="noopener noreferrer">debategraph.org</a> and register for a free account.
        </p>
        <p>
        	2. Once logged in, create a new map by selecting (Map -> Start a new map) from the top bar. The tool will ask for a title and a summary. These can be related to a specific regional challenge, for example.
        </p>
        <p>
        	<img className="wp-image-6723 alignnone size-full" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph1.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph1.png 1920w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph1-300x167.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph1-768x426.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph1-1024x569.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph1-1080x600.png 1080w" sizes="(max-width: 1920px) 100vw, 1920px" />
        </p>
        <p>
        	3. Once your map is initialised, you can start adding ideas and comments to it. To do this, click a node on the graph and click the &#8220;Add Idea&#8221; button on the bottom bar. The tool will require a title, a summary and the idea type (for example, counter/supporting argument).
        </p>
        <p>
        	<img className="wp-image-6724 aligncenter size-full" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph2.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph2.png 1920w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph2-300x167.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph2-768x426.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph2-1024x569.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph2-1080x600.png 1080w" sizes="(max-width: 1920px) 100vw, 1920px" />
        </p>
        <p>
        	4. You can change the view options of the map through the &#8220;View&#8221; menu.
        </p>
        <p>
        	<img className="wp-image-6725 aligncenter size-full" style={imgStyle} src="http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph5.png" alt="" srcset="http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph5.png 1920w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph5-300x167.png 300w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph5-768x426.png 768w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph5-1024x569.png 1024w, http://www.s3platform.eu/wp-content/uploads/2017/06/debategraph5-1080x600.png 1080w" sizes="(max-width: 1920px) 100vw, 1920px" />
        </p>
        <p>
        	5. Invite stakeholders to edit the map by sending them an email. You can do this by clicking the Community tab on the top-right corner.
        </p>
        <p>
        	6. Discuss the challenge and the ideas with stakeholders in to reach a resolution.
        </p>
        <p> A short introductory video can be viewed <a href"https://www.youtube.com/watch?v=32InMNjO4tQ">here</a> to further clarify the usage of Debategraph.</p>
        <h1>S3Engagement OVERVIEW</h1>
        <p>
          This application is meant for discussion about the priorities of a RIS3 facilitating governal nation or region. In the application, the facilitator of the RIS3 process creates their own workspace that will be visible only for the stakeholders they invite to collaborate. This workspace is referred in the application as a "region", matching to the geographical area responsible for the RIS3 process.
        </p>
        <p>
          Inside each of these regions, the facilitators of that region, referred to as "administrators" in the application, define smaller priorities for which they want discussion to be centered on. These priorities should match the RIS3 specialisation focuses, defined in a smart specialisation strategy for the region. If no previous smart specialisation strategy exists, the priorities can set up as more open ended, or based on a previous local strategy.
        </p>

        <h2> FOR USERS </h2>
        <p> The following directions are for stakeholders of the area that are invited to participate in the discussion of the region by the region's administrators. This invite should be received by email, and include an invitation code for joining the region. </p>
          <h3>LOGGING IN</h3>
            <img style={imgStyle} src="/static/img/fig1.png"></img>
          <ol>
            <li> Select Login from the upper corner, and enter your login details or create a new account from the prompt that opens. </li>
          </ol>

          <h3> JOINING A REGION WITH AN INVITE CODE </h3>
          <ol>
            <li> From the region menu select “Join a region" </li>
              <img style={imgStyle} src="/static/img/fig2.png"></img>
            <li> Enter the invitation key you have received from an administrator of the region. You will be granted access to contribute to the conversation in the region. </li>
          </ol>
          <h3> PARTICIPATING IN DISCUSSION </h3>
          <ol>
            <li> Select a region to participate in from the region menu </li>
            <li> Select a priority you want to comment on from the available options </li>
              <img style={imgStyle} src="/static/img/fig3.png"></img>
            <li> Post a new comment from the input fields at the bottom of the page, or reply to an existing comment </li>
              <img style={imgStyle} src="/static/img/fig5.png"></img>
            <li> Vote comments you find to be of particular quality up, and vote down comments you don’t feel contribute to the conversation </li>
          </ol>

        <h2> FOR ADMINISTRATORS </h2>
        <p> The following instructions are for administrators of a region, to help them manage the discussion related to the priorities related to their RIS3 strategies.</p>

        <h3> CREATING A REGION </h3>
        <ol>
          <li> Click the region menu from the upper left corner, and from the menu select “Create a new region". These regions are meant for the use of individual regions or nations, on the level the RIS3 strategy is formed. </li>
            <img style={imgStyle} src="/static/img/fig6.png"></img>
          <li> Enter the name for your region in the popup that opens, and click Add </li>
        </ol>
        <h3> INVITING USERS AND ADMINISTRATORS TO COLLABORATE IN A REGION </h3>
        <ol>
          <li> From the region menu select “Invite users to [YOUR REGION NAME]” </li>
        <img style={imgStyle} src="/static/img/fig7.png"></img>
          <li> Copy the invite code for users from the popup, and share it with your target audience, for example by e-mail. </li>
          <li> Copy the invite code for administrators of your region, and share it with people you trust to govern the discussion in your region. </li>
            <img style={imgStyle} src="/static/img/fig8.png"></img>
        </ol>
        <h3> CREATING PRIORITIES FOR DISCUSSION </h3>
        <ol>
          <li> Select a region you are an administrator of from the region menu </li>
          <li> Fill in the title of the priority and a description of the kind of discussion you want to happen related to the priority in question </li>
            <img style={imgStyle} src="/static/img/fig9.png"></img>
        </ol>

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

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
