import * as Yup from 'yup';

export const formValues = {
    title: '',
    file: '',
    bg_image: '',
    content: '',
    excerpt: '',
    score: 0,
    director: '',
    actors: [],
    status: 'draft',
    category: ''
}

export const validation = () => (
    Yup.object({
        title: Yup.string()
            .required('Sorry, the title is required'),
        file: Yup.string(),
        bg_image: Yup.string()
            .required("Image Url needed, upload pls..."),
        content: Yup.string()
            .required('Sorry, the content is required')
            .min(50, 'That is it? ... write some more'),
        excerpt: Yup.string()
            .required('Sorry, the excerpt is required')
            .max(500, 'Sorry, max characters reached'),
        score: Yup.number()
            .required('Sorry, the score is required')
            .min(0, '0 is minimum')
            .max(100, '100 is maximum'),
        director: Yup.string()
            .required('Sorry, the director is required'),
        actors: Yup.array()
            .required('Must have actors')
            .min(3, 'Minimum of 3 entries required'),
        status: Yup.string()
            .required('Sorry, the status is required'),
        category: Yup.string()
            .required('Sorry, the category is required')
    })
)