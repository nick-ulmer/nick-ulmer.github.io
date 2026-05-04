import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import documentPages from '../data/documentPages';

export default function MdxDocumentPage() {
    const { slug } = useParams();

    const currentDocument = documentPages.find(doc =>
        doc.id === (slug ?? 'about')
    );

    useEffect(() => {
        if (currentDocument?.title) {
            window.document.title = currentDocument.title;
        }
    }, [currentDocument?.title]);

    if (!currentDocument) {
        return <p>Document not found.</p>;
    }

    const Page = currentDocument.document;

    if (!Page) {
        return <p>Document component missing.</p>;
    }

    return <Page />;
}