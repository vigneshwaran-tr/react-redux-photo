import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select2 from 'react-select2-wrapper';
import './App.css';
import 'react-select2-wrapper/css/select2.css';

class App extends Component {



  render() {
    
    return (
      <div >
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="http://www.codingmart.com">
            CodingMart Technologies
        </a>
        </nav>
        <div className="container">
          <div className="margintr">
            <h4>Multiple Photo Upload</h4>
            <label >upload photo</label>
            <input id="file" type="file" onChange={(e) => (this.props.imageChange(e))} required multiple />
            {
              this.props.img.map((data, index) => (
              <div key={index} class="ui card">
                <div class="image">
                  <img src={data.imgs}
                    //alt={`image${index}`}
                    width="100px"
                    height="100px"
                  />
                </div>
                <div class="content"><span style={{ marginRight: `10${'px'}` }}>Name</span>
                  <input type="text"
                    value={data.name}
                    index={index}
                    name="name"
                    disabled={data.iDisabled}
                    onChange={(e) =>(this.props.nameChange(e.target.value,index))}
                  />
                </div>
                <div class="description">
                  <span style={{ marginRight: `20${'px'}`, marginLeft: `15${'px'}` }}>Tags</span>
                  <Select2
                    multiple
                    disabled={data.iDisabled}
                    value={data.tags}
                    ref="tags"
                    style={{ width: `175${'px'}` }}
                    onSelect={(e) =>{this.props.optionChange(this.refs.tags.el.val(),index)}}
                    data={['bug', 'feature', 'documents', 'discussion']}
                    options={
                      {
                        placeholder: 'search by tags',
                        tags: "true"
                      }
                    }
                  />
                </div>
                <div class="extra content" style={{ marginTop: `10${'px'}` }}>
                  <input
                    type="button"
                    value="save"
                    onClick={() =>{this.props.saveChange(index)}}
                    disabled={data.sDisabled}
                    class="btn btn-primary"
                  />
                  {" "}
                  <input
                    type="button"
                    value="edit"
                    onClick={() =>{this.props.editChange(index)}}
                    disabled={data.eDisabled}
                    class="btn btn-danger"
                  />
                </div>
              </div>
              
            ))}
          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
 
  return {
    img: [...state.img]
  };
}

const mapDispatchToProps = dispatch => {

  return {
    imageChange: (e) => dispatch({ type: 'IMAGECHANGE', value: e }),
    nameChange:(value,index) => dispatch ({type : 'NAMECHANGE',i:index,val:value}),
    optionChange:(data,index) => dispatch ({type : 'OPTIONCHANGE',i:index,tagsdata:data}),
    saveChange: (index) =>dispatch ({type:'SAVECHANGE',i:index}),
    editChange: (index) =>dispatch ({type:'EDITCHANGE',i:index})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);