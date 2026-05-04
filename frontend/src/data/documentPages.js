/*

    This code grabs all of the document pages from the
    documentPages directory of the same directory
    to populate the documentPages object.

*/

import mdxProjects from "./projects"

const modules = import.meta.glob('./documentPages/*.mdx', {
    eager: true,
});

const normalDocumentPages = Object.entries(modules).map(([path, module]) => {
    const fileName = path.split('/').pop();          // about.mdx
    const id = fileName.replace('.mdx', '');         // about

    return {
        id,
        title: module.title ?? id,
        document: module.default,
    };
});

const documentPages = [
    ...normalDocumentPages,
    ...mdxProjects,
];

export default documentPages;