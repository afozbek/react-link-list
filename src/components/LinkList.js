import React, { Component } from 'react';

import Link from './Link';
import { connect } from 'react-redux';

class LinkList extends Component {
  filterLinkList = (filterType) => {
    switch (filterType) {
      case 'MOST_VOTED':
        return this.props.linkList.sort((l1, l2) => l2.points - l1.points);
      case 'LESS_VOTED':
        return this.props.linkList.sort((l1, l2) => l1.points - l2.points);
      default:
        return this.props.linkList;
    }
  };

  render() {
    const newLinkList = this.filterLinkList(
      this.props.activeFilter
    ).map((link) => <Link key={link.id} link={link} />);

    return <div>{newLinkList}</div>;
  }
}

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
