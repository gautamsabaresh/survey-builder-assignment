import React from 'react'
import PropTypes from 'prop-types'
import BaseTextField from '../text-field';
import BaseRadioButtonsGroup from '../radio-group';
// @ts-ignore
// TODO: add type to props
const ComposeDynamicField = props => {
    // TODO: construct props to be passed on and handle types of fields
    return (
        <>
            <div>
                <div>ComposeDynamicField</div>
                <BaseTextField />
                <BaseRadioButtonsGroup />
            </div>
        </>
    )
}

ComposeDynamicField.propTypes = {}

export default ComposeDynamicField