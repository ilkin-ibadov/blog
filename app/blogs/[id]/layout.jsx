import React from 'react'

export async function generateMetadata({ params, searchParams }) {
    const { id } = await params
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    if (!res.ok) throw new Error("Failed to fetch blog");
    const data = await res.json();

    return {
        title: data.title,
    }
}

const Layout = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout