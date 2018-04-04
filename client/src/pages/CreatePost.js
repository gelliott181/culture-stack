import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

export default class CreatePost extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
        <section className="ui two column double stackable grid vertically divided container segment">

            <div className="column">
                <div className="ui horizontal divider">
                    <h2>Submit your post</h2>
                </div>
                    <img className="ui image" src="./img/default_placeholder.png" />
                
                <div className="ui form">
                    <div className="field">
                        <input name="myFile" type="file" placeholder="Upload your image or audio"/>
                    </div>
                </div>
            </div>
            
            <div className="column">
                <form className="ui form">
                    <div className="field">
                        <h4 className="ui dividing header">Photo Details</h4>
                        <div className="three fields">
                            <div className="field">
                                <input type="text" name="aperture" placeholder="Aperature" />
                            </div>
                            <div className="field">
                                <input type="text" name="iso" placeholder="ISO" />
                            </div>
                            <div className="field">
                                <input type="text" name="shutter speed" placeholder="Shutter Speed" />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Gear</label>
                        <div className="fields">
                            <div className="twelve wide field">
                                <input type="text" name="camera" placeholder="Camera" />
                            </div>
                            <div className="four wide field">
                                <input type="text" name="lens" placeholder="Lens" />
                            </div>
                        </div>
                    </div>
                
                    <h4 className="ui dividing header">Post Details</h4>
                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="title" placeholder="Title" />
                        </div>
                        <div className="ui form">
                            <div className="inline fields">
                                <label htmlFor="fruit">Submission Type</label>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="fruit" checked="" tabIndex="0" className="hidden" />
                                        <label>Question</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="fruit" tabIndex="0" className="hidden" />
                                        <label>Post</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui form">
                            <div className="field">
                                <label>Description</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="ui divider hidden"></div>
                        <div className="field">
                            <h4 className="ui dividing header">Tags</h4>
                            <select name="skills" multiple="" className="ui fluid dropdown">
                                <option value="">Skills</option>
                                <option value="angular">Angular</option>
                                <option value="css">CSS</option>
                                <option value="ember">Ember</option>
                                <option value="html">HTML</option>
                                <option value="javascript">Javascript</option>
                                <option value="meteor">Meteor</option>
                                <option value="node">NodeJS</option>
                            </select>
                        </div>
                        <div className="ui divider hidden"></div>
                    <div className="ui button" tabIndex="0">Submit Post</div>
                </form>
            </div>
        </section>
    )
  }
}
