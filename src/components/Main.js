import React, { useState } from 'react';
import LinkList from './LinkList';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from './Pagination';

const Main = ({ linkList }) => {
  const [filter, setFilter] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const changeFilter = (e) => {
    setFilter(e.target.value);

    setCurrentPage(0);
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
          onChange={changeFilter}
        >
          <option value="ALL">Order By</option>
          <option value="MOST_VOTED">Most Voted(Z->A)</option>
          <option value="LESS_VOTED">Less Voted(A->Z)</option>
        </select>

        <LinkList
          activeFilter={filter}
          pageSize={pageSize}
          currentPage={currentPage}
        />

        {linkList.length > pageSize ? (
          <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            totalElements={linkList.length}
            changePage={(pageNumber) => setCurrentPage(pageNumber)}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

export default connect(mapStateToProps)(Main);
