
type ButtonProps = {
    backgroundColor: string,
    color: string,
    string: string
}

const Button  = ({backgroundColor, color, string}:ButtonProps) => {
    return <button style={{backgroundColor, color}}>{string}</button>
}

export default Button