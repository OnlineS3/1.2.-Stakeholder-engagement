import React from 'react';
import { Link } from 'react-router';


const ApplicationMenuView = ({props}) => {
  return (
    <section className="content-section">
      <div className="responsive-layout">
        <div className="responsive-layout__column">
          <a href="http://www.s3platform.eu/wp-content/uploads/2017/06/Guideline_Tool_RIS3_Debate_at_a_glance.pdf"><button className="button button--menu button--alt">Download guide</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://discuto.io" target="_blank"><button className="button button--menu">Discuto</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="http://debategraph.org/" target="_blank"><button className="button button--menu">Debategraph</button></a>
        </div>
        <div className="responsive-layout__column">
          <a href="/application/S3engagement/" target="_blank"><button className="button button--menu">S3engagement</button></a>
        </div>
      </div>
    </section>
  )

}

// <a href="/logout">Logout</a>


export default ApplicationMenuView;
