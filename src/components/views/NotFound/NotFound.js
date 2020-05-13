import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCraetor } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>NotFound nie istnieje</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

//const mapStateToProps = state => ({
//  someProp:reduxSelector(state),
//});

//const mapDispatchToProps = dispatch => ({
//  someAction: arg => dispatch(reduxActionCraetor(arg)),
//});

//const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { 
  Component as NotFound,
  //Container as NotFound,
  Component as NotFoundComponent,
};