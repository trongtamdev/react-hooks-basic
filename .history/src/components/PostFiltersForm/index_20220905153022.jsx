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

    function handleSearchTermChange(e){
        setSearchTerm(e.ta)
    }

    return (
        <div>
            <form>
                <input
                type="text"
                value={searchTerm}
                onChange={} 
                >
                </input>
            </form>

        </div>
    );
}

export default PostFiltersForm;