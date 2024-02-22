import React from 'react'
import BaseTextField from '../text-field';
import BaseRadioButtonsGroup from '../radio-group';
import { CONSTANTS } from '../../libs';
import BaseSection from '../section';

const ComposeDynamicField = (props: any) => {
    switch (props.type) {
        case CONSTANTS.QUESTION_TYPES.MCQ:
            return <BaseRadioButtonsGroup {...props} />;
        case CONSTANTS.QUESTION_TYPES.LIKERT:
            const options = CONSTANTS.LIKERT_OPTIONS;
            props = { ...props, options };
            return <BaseRadioButtonsGroup {...props} />;
        case CONSTANTS.QUESTION_TYPES.TEXTFIELD:
            return <BaseTextField {...props} />;
        case CONSTANTS.QUESTION_TYPES.SECTION:
            return <BaseSection {...props} />
        default:
            return null;
    }
}

export default ComposeDynamicField