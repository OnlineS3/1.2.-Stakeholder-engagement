import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CategoryElement from './CategoryElement.js';
import EditCategoryContainer from './EditCategoryContainer.js';
import AddCategoryContainer from './AddCategoryContainer.js';
import * as actionCreators from '../../actions/actionCreators';


class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onMount();
  }


  render(){
    var categories, admin;
    if(this.props.params && this.props.params.areaName){
      categories = this.props.categories[this.props.params.areaName];
      if(this.props.areas && this.props.areas[this.props.params.areaName])
        admin = this.props.areas[this.props.params.areaName].admin;
    } else {
      categories = null;
      admin = false;
    }

    var header = (
      <div className="row">
        <div className="col">
          <h2>Priorities</h2>
        </div>
      </div>
    )

    if(this.props.params.areaName){
      if(!categories || categories.length === 0){
        header = (
          <div className="row">
            <div className="col">
              <h2>No priorities defined in selected region</h2>
            </div>
          </div>
        )
      }
    } else {
      header = (
        <div className="row">
          <div className="col">
            <p>To get started, please click the "access a region" button above.</p>
          </div>
        </div>
      )
    }

    return (
      <div className="row">
        <div className="col">
          {header}
          {admin &&
            <div className="row">
              <div className="col">
                <p>These priorities let you divide issues to discuss with shareholders into concrete topics related to the development priorities in the area. <br/>
                  For example Public health & security, Service innovation, or Resource efficiency </p>
              </div>
            </div>
          }

        { categories && categories.filter(category => {return category !== null}).sort((category1, category2) => category1.id - category2.id).map((category) => {
          if(!category.editing){
            return <CategoryElement
              key={category.id}
              area={this.props.params.areaName}
              id={category.id}
              title={category.title}
              description={category.description}
              url={`/region/${this.props.params.areaName}/${category.id}`}>
            </CategoryElement>
          } else {
            return <EditCategoryContainer
              key={category.id}
              area={this.props.params.areaName}
              id={category.id}
              title={category.title}
              description={category.description}
              url={`/region/${this.props.params.areaName}/${category.id}`}>
            </EditCategoryContainer>
          }
        })}
        {admin &&
          <AddCategoryContainer params={this.props.params} update={this.addNew}></AddCategoryContainer>
        }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    areas: state.areas
    //categories: state.areas.selected ? state.categories[state.areas.selected.name] : []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
