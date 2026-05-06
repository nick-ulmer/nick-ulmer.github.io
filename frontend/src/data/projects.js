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
]

export default projects;