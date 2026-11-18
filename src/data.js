export const navLinks = [
  { label: 'Home', href: '#hero', num: '01' },
  { label: 'About me', href: '#about', num: '02' },
  { label: 'Projects', href: '#projects', num: '03' },
]

export const socialLinks = {
  github: 'https://github.com/Rose1',
  linkedin: 'https://linkedin.com/in/rosario-ancco-peralta/',
  email: 'mailto:rosarioanccoperalta@gmail.com',
  resume: `${import.meta.env.BASE_URL}resume.pdf`, // pon tu PDF real en la carpeta public/
}

export const education = {
  degree: 'Software Engineer',
  school: 'Universidad Nacional San Antonio Abad del Cusco',
}

export const technicalSkills = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Tensorflow', 'R', 'Git', 'Docker']

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'German', level: 'A1' },
]

export const softSkills = ['Teamwork', 'Efficient Communication', 'autodidact', 'Problem Solving', 'Adaptability']

// PLACEHOLDER — reemplaza con tus roles, fechas y logros reales
export const experience = [
    {
        company: 'Machine Learning Engineer',
        role: 'AnyoneAI',
        date: 'Dec 2025 — May 2026',
        bullets: ['Developed supervised machine learning models using real-world datasets.', 
                'Built data preprocessing and feature engineering pipelines in Python.',
                'Applied model evaluation techniques including cross-validation and hyperparameter tuning.',
                'Performed exploratory data analysis to identify patterns and actionable insights.',
                'Worked with large datasets to solve analytical and predictive problems. ',
                'Skills: Python, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook.'],
    },
    {
        company: 'Zoluxiones S.A.C.',
        role: 'Software Engineer',
        date: 'Mar 2021 — Dec 2022',
        bullets: ['Designed and maintained software products for Scotiabank Mexico and Scotiabank Chile.', 
                'Designed prototypes in Figma.',
                'Wrote code and unit tests.',
                'Skills: Java, HTML/CSS, PEGA, Figma, Scrum Methodology.'],
    },
    {
        company: 'Smart Cities Peru',
        role: 'Front end developer intern',
        date: 'Oct 2019 — Jul 2020',
        bullets: ['Designed and maintained software products for educational startups in Peru.',
            'Built educational software to help students attend online classes during the pandemic.',
            'Designed prototypes in Figma.',
            'Skills: TypeScript, Angular, GraphQL, Figma, Scrum Methodology'],
    },
]

export const projects = [
  {
    title: 'Bostion House Price Prediction',
    description: 'End-to-end pipeline: data cleaning, training and deployment via API with Docker.',
    tags: ['Python', 'scikit-learn', 'Numpy', 'Pandas', 'Seaborn', 'Docker', 'Flask', 'Heroku'],
    link: 'https://boston-house-price-prediction-e71049787be4.herokuapp.com/'
  },
  {
    title: 'Text Classification',
    description: 'NLP model trained on self-collected and cleaned data.',
    tags: ['NLP', 'PyTorch', 'Streamlit'],
  },
]