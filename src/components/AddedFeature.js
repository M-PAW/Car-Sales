import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/PrimaryActions';

const AddedFeature = props => {

console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onClickFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return { props: state }
};


export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
