import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from './Link/Link';
import { connect } from 'react-redux';

class LinkList extends Component {
  filterLinkList = (filterType) => {
    switch (filterType) {
      case 'MOST_VOTED':
        return this.props.linkList.sort((l1, l2) => l2.points - l1.points);
      case 'LESS_VOTED':
        return this.props.linkList.sort((l1, l2) => l1.points - l2.points);
      default:
        return this.props.linkList.sort(
          (l1, l2) => l2.created_time - l1.created_time
        );
    }
  };

  // PAGINATION
  paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  render() {
    const newLinkList = this.filterLinkList(this.props.activeFilter);

    const pageList = this.paginate(
      newLinkList,
      this.props.pageSize,
      this.props.currentPage + 1
    ).map((link) => <Link key={link.id} link={link} />);

    return <div>{pageList}</div>;
  }
}

LinkList.propTypes = {
  linkList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
