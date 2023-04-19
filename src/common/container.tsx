type IContainer = { 
    children: React.ReactNode,
    className?: string
}

const Container = ({children, className}: IContainer) => {
    return (
        <div className={`container px-4 md:m-auto ${className}`}>
            {children}
        </div>
    )
}
export default Container