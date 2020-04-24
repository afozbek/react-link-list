import React, { useState, useEffect } from 'react';
import LinkList from './LinkList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = (props) => {
  const [linkList, setNewLinkList] = useState(props.linkList);
  const [filter, setFilter] = useState('');

  const handleFilter = (e) => {
    setFilter(e.target.value);

    switch (filter) {
      case 'MOST_VOTED':
        setNewLinkList(props.linkList.sort((l1, l2) => l2.points - l1.points));
        break;
      case 'LESS_VOTED':
        setNewLinkList(props.linkList.sort((l1, l2) => l1.points - l2.points));
        break;
      default:
        setNewLinkList(props.linkList);
        break;
    }
  };

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
          onChange={handleFilter}
        >
          <option disabled selected>
            Order By
          </option>
          <option value="MOST_VOTED">Most Voted(Z->A)</option>
          <option value="LESS_VOTED">Less Voted(A->Z)</option>
        </select>

        <LinkList />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

export default connect(mapStateToProps)(Main);
