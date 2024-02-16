interface SampleSurveyType {
    id: number;
    code: string;
    name: string;
    description: string;
    instructions: string;
    thankyou: string;
    copyright: string;
    questions: Array<{[x: string]: any}>;
}

export const SAMPLE_SURVEY_QUESTIONS_JSON: SampleSurveyType = {
    "id": 1,
    "code": "sample",
    "name": "Sample Survey",
    "description": "For Testing Question Types and Features",
    "instructions": "Take your time. Look around. See that there are many types of questions. Answer the questions to see how they work.",
    "thankyou": "Thank you for exploring our amazing features. We look forward to working with you soon!",
    "copyright": "&copy; 2020 a/A Forms, Inc. Sample survey is for illustrative purposes only. All rights reserved.",
    "questions": [{
        "stem": "What is your reason for considering a survey?",
        "type": "mcq",
        "includeOther": true,
        "options": [{
            "text": "Employee Engagement",
            "label": "",
            "value": 1
        },
        {
            "text": "Team Dynamics",
            "label": "",
            "value": 2
        },
        {
            "text": "Student Safety",
            "label": "",
            "value": 3
        },
        {
            "text": "Parent Involvement in Schooling",
            "label": "",
            "value": 4
        }
        ]
    },
    {
        "stem": "Are you planning to use this tool?",
        "type": "mcq",
        "options": [{
            "text": "Yes",
            "label": "",
            "value": 1
        },
        {
            "text": "No",
            "label": "",
            "value": -1
        },
        {
            "text": "Don't Know",
            "label": "",
            "value": 0
        }
        ]
    },
    {
        "stem": "Why or Why Not?",
        "type": "cr",
        "lines": 3,
        "size": "moderate",
        "charlimit": 250,
        "optional": false,
        "pagebreak": true
    },
    {
        "type": "section",
        "title": "Follow Up",
        "instructions": "Please let us know how to connect with you."
    },
    {
        "stem": "What is your first name?",
        "type": "cr",
        "size": "narrow",
        "lines": 1,
        "charlimit": 25,
        "optional": true
    },
    {
        "stem": "What is your email address?",
        "type": "cr",
        "size": "wide",
        "lines": 1,
        "charlimit": 100,
        "optional": true
    },
    {
        "stem": "Additional Feedback",
        "type": "cr",
        "lines": 25,
        "size": "full",
        "charlimit": 500,
        "optional": true
    }
    ]
}

export const SPI_SURVEY_QUESTIONS_JSON = {
    "id": 2,
    "code": "inventory",
    "name": "Sensory Preferences Inventory",
    "description": "",
    "instructions": "Answer each question using the scale provided.",
    "thankyou": "Thank you for completing the a/A Sensory Preferences Inventory.",
    "autoreport": "inventory-results",
    "copyright": "&copy; 2020 a/A Forms, Inc. All rights reserved.",
    "questions": [
        {
            "code": "section1",
            "type": "section",
            "instructions": "To improve accuracy, answer each question quickly with your first 'gut instinct'. You will not be able to go back and change answers after clicking next."
        },
        {
            "code": "q1",
            "type": "likert",
            "stem": "I learn the most when the lesson engages my sense of <em>sight</em>.",
            "scale": "Agreement"
        },
        {
            "code": "q2",
            "type": "likert",
            "stem": "I learn the most when the lesson engages my sense of <em>hearing</em>.",
            "scale": "Agreement"
        },
        {
            "code": "q3",
            "type": "likert",
            "stem": "I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.",
            "scale": "Agreement",
            "pagebreak": true
        },
        {
            "code": "q4",
            "type": "likert",
            "stem": "I find it easiest to remember things I see rather than things I hear or do.",
            "scale": "Agreement"
        },
        {
            "code": "q5",
            "type": "likert",
            "stem": "I find it easiest to remember things I hear rather than things I see or do.",
            "scale": "Agreement"
        },
        {
            "code": "q6",
            "type": "likert",
            "stem": "I find it easiest to remember things I do rather than things I see or hear.",
            "scale": "Agreement",
            "pagebreak": true
        },
        {
            "code": "q7",
            "type": "likert",
            "stem": "I would rather look at photos than listen to music or workout (physical exercise).",
            "scale": "Agreement"
        },
        {
            "code": "q8",
            "type": "likert",
            "stem": "I would rather listen to music than look at photos or workout (physical exercise).",
            "scale": "Agreement"
        },
        {
            "code": "q9",
            "type": "likert",
            "stem": "I would rather workout (physical exercise) than look at photos or listen to music.",
            "scale": "Agreement",
            "pagebreak": true
        },
        {
            "code": "q10",
            "type": "likert",
            "stem": "The lessons I remember best are those in which I had to use my sense of sight.",
            "scale": "Agreement"
        },
        {
            "code": "q11",
            "type": "likert",
            "stem": "The lessons I remember best are those in which I had to use my sense of hearing.",
            "scale": "Agreement"
        },
        {
            "code": "q12",
            "type": "likert",
            "stem": "The lessons I remember best are those in which I had to use my sense of touch, smell or taste.",
            "scale": "Agreement",
            "pagebreak": true
        },
        {
            "code": "q13",
            "type": "likert",
            "stem": "When I get a new device, I usually read the instructions to learn how to operate it.",
            "scale": "Agreement"
        },
        {
            "code": "q14",
            "type": "likert",
            "stem": "When I get a new device, I usually ask someone to explain verbally how to operate it.",
            "scale": "Agreement"
        },
        {
            "code": "q15",
            "type": "likert",
            "stem": "When I get a new device, I usually try a hands-on approach to figure out how to operate it.  ",
            "scale": "Agreement",
            "pagebreak": true
        }
    ]
}

export const ROUTE_PATHS = {
    HOME: '/',
    SURVEY: '/survey',
    SENSORY_PREFERENCES: '/sensory-preferences'
}

export const HOME_HEADER_NAV_LABELS = {
    HOME: 'Home',
    SURVEY: 'Sample Survey',
    SENSORY_PREFERENCES: 'Sensory Preferences'
}

export const QUESTION_TYPES = {
    MCQ: 'mcq',
    TEXTFIELD: 'cr',
    LIKERT: 'likert',
    SECTION: 'section'
}