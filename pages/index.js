import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className="index">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="container">
          <div className="row">
            <div className="col s12 m10 l12">
              <h5 className="flow-text">Hello, prinitingPineapple 🖨🍍 here.</h5>
              <p className="flow-text">
               I have recently taken up an interest in JavaScript. Not sure what took me this long, but this jouney has just begun, and I am ready to grow 🐍⃗🐉! Thanks for stopping by. 🙏
              </p>
              <p className="flow-text">Oh yeah, here are some pineapples.</p>
              <img className="responsive-img z-depth-3" src={prefixLink('/images/pineapples.jpg')} />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m10 l12 center-align">
              <a href="https://github.com/printingpineapple">
                <i className="fa fa-github fa-2x"></i>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/techieJesse">
                <i className="fa fa-twitter fa-2x"></i>
              </a>&nbsp;&nbsp;&nbsp;
              <a href="mailto:printingpineapple@gmail.com">
                <i className="fa fa-envelope fa-2x"></i>
              </a>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
