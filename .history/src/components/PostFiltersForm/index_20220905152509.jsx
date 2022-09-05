import React from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const {onSubmit}=props;
    const [searchTerm, set]



    return (
        <div>

        </div>
    );
}

export default PostFiltersForm;