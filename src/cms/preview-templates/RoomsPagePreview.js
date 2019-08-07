import React from 'react';
// import PropTypes from 'prop-types';
import { RoomsPageTemplate } from '../../templates/rooms-page';

const RoomsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <RoomsPageTemplate
        title={data.title}
        overview={data.overview}
        price={data.price}
        roomimage={data.roomimage}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

// IndexPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

export default RoomsPagePreview
