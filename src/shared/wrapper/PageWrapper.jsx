const PageWrapper = ({title, children}) => {
    return (
        <main>
           {title && <h2>{title}</h2>}
            {children}
        </main>
    )
}

export default PageWrapper;