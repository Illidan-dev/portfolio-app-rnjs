import { Dimensions } from "react-native";

const Layout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

const Colors = {
    theme: '#24685b',
    white: '#fff',
    greyish: '#a4a4a4'
};


const skillIcons = [
    {
        icon: "language-html5",
        name: "HTML",
        stars: 5
    },
    {
        icon: "language-css3",
        name: "CSS",
        stars: 5
    },
    {
        icon: "language-php",
        name: "PHP",
        stars: 5
    },
    {
        icon: "language-javascript",
        name: "JAVASCRIPT",
        stars: 5
    },
    {
        icon: "nodejs",
        name: "NODEJS",
        stars: 4
    },
    {
        icon: "react",
        name: "REACTJS",
        stars: 3
    },
    {
        icon: "vuejs",
        name: "VUEJS",
        stars: 3
    },
    {
        icon: "jquery",
        name: "JQUERY",
        stars: 5
    },
];


const projects = [
    {
        name: "Dew Rainmeter",
        icon: "airballoon",
    },
    {
        name: "Yula Assistant",
        icon: "microphone",
    },

    {
        name: "Bucket Trace",
        icon: "shopping-music",
    },


];


const network = [
    {
        url: 'https://www.linkedin.com/in/lucas-ferreira-web-dev/',
        icon: 'linkedin',
        name: 'Linkedin'
    },
    {
        url: 'https://github.com/Illidan-dev',
        icon: 'github',
        name: 'Github'
    },
    {
        url: 'mailto:lucasferreira_work@hotmail.com?subject=Contato%Através%app.%Port.',
        icon: 'email',
        name: 'E-mail'
    },
]

export { Layout, Colors, skillIcons, projects, network };