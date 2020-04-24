import React, { useState } from 'react';
import LinkList from './LinkList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = (props) => {
  const [filter, setFilter] = useState('');

  return (
    <React.Fragment>
      <div className="o-app__container">
        <NavLink className="o-app__newLinkButton" to="/new-link">
          <div className="o-app__plusBlock">+</div>
          <div className="o-app__desc">Submit a Link</div>
        </NavLink>

        <hr />

        <select
          name="filter_linkList"
          id="filter_linkList"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">Order By</option>
          <option value="MOST_VOTED">Most Voted(Z->A)</option>
          <option value="LESS_VOTED">Less Voted(A->Z)</option>
        </select>

        <LinkList activeFilter={filter} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

export default connect(mapStateToProps)(Main);
