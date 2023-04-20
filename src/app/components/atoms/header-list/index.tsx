export type MenuItem = {
    menu : string
}
export default function HeaderList ({menu}:MenuItem) :JSX.Element{
    
    return<li>{menu}</li>
}