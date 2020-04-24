import React, { Component } from 'react';

import Link from './Link';
import { connect } from 'react-redux';

class LinkList extends Component {
  render() {
    const linkList = this.props.linkList.map((link) => (
      <Link
        key={link.id}
        id={link.id}
        text={link.text}
        url={link.url}
        created={link.created}
        points={link.points}
      />
    ));

    return <div>{linkList}</div>;
  }
}

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);
