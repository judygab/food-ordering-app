export const Button = ({ children, variant, onClick, className, ...props }) => {

    const color = variant === 'primary' ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-red-700 hover:bg-red-800';

    return (
        <button className={`${color} text-white py-2 px-4 rounded`} onClick={onClick}>
            {children}
        </button>
    )
}