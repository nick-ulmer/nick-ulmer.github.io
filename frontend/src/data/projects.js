import gamedevProjects from './projects/gamedevProjects';
import softwareProjects from './projects/softwareProjects';
import frontendProjects from './projects/frontendProjects';
import datascienceProjects from './projects/datascienceProjects';

/*const projects = [
    ...gamedevProjects,
    ...softwareProjects,
    ...frontendProjects,
    ...datascienceProjects,
];

export default projects;*/

const otherProjects = [
    ...gamedevProjects,
    ...softwareProjects,
    ...frontendProjects,
    ...datascienceProjects,
];

const modules = import.meta.glob('./projects/*.mdx', {
    eager: true,
});

export const mdxProjects = Object.entries(modules).map(([path, module]) => {
    const fileName = path.split('/').pop();          // about.mdx
    const id = fileName.replace('.mdx', '');         // about

    return {
        id,
        ...module.object,
        document: module.default,
    };
});

const projects = [
    ...mdxProjects,
    ...otherProjects,
]

export default projects;