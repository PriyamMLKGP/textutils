import React, { Component } from 'react';

export class About extends Component {
  render() {
    return <div>
        <div className="card my-3 text-center container" style={{backgroundColor:this.props.mode==='dark'?'black':'white',border:'2px solid blue'}}>
        {/* here either you use the import image or require function to get the image */}
        <img src={require('./myimage.jpeg')} style={{width: "200px",alignSelf:'center'}} className="card-img-top" alt="Founder's Image"/>
        <div className="card-body">
            <h5 className="card-title">Creater of Website -Priyam Goenka</h5>
            <p className="card-text">Platform made for news enthusiast looking into the importance of News in our life.</p>
        </div>
        <ul className="list-group list-group-flush" style={{color:this.props.mode==='dark'?'white':'black'}}>
            <li style={{backgroundColor:this.props.mode==='dark'?'black':'white',color:this.props.mode==='dark'?'white':'black'}} className="list-group-item">Enjoys Headlines</li>
            <li  style={{backgroundColor:this.props.mode==='dark'?'black':'white',color:this.props.mode==='dark'?'white':'black',borderTop:'2px solid blue'}} className="list-group-item">Get Updated on each news</li>
            <li  style={{backgroundColor:this.props.mode==='dark'?'black':'white',color:this.props.mode==='dark'?'white':'black',borderTop:'2px solid blue'}} className="list-group-item">Happy Learning</li>
        </ul>
        </div>
    </div>;
  }
}

export default About;