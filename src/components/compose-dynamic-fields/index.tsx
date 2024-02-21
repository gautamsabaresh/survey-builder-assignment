import React from 'react'
import BaseTextField from '../text-field';
import BaseRadioButtonsGroup from '../radio-group';
import { CONSTANTS } from '../../libs';
import BaseSection from '../section';

const ComposeDynamicField = (props: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        props.onChange(value);
    };
    switch (props.type) {
        case CONSTANTS.QUESTION_TYPES.MCQ:
            return <BaseRadioButtonsGroup {...props} onChange={handleChange}/>;
        case CONSTANTS.QUESTION_TYPES.TEXTFIELD:
            return <BaseTextField {...props} onChange={handleChange}/>;
        case CONSTANTS.QUESTION_TYPES.SECTION:
            return <BaseSection {...props}/>
        default:
            return null;
    }
}

export default ComposeDynamicField