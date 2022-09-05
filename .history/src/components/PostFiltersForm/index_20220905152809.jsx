import React, { useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const {onSubmit}=props;
    const [searchTerm, setSearchTerm]=useState('');



    return (
        <div>
            <input>
            </input>

        </div>
    );
}

export default PostFiltersForm;