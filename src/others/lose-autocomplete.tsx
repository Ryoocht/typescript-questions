
type IconSize = LooseAutoComplete<'sm' | 'lg'>

type LooseAutoComplete<T extends string> = T | Omit<string, T>

interface IconProps {
    size: IconSize
}

const Icon = ({size}: IconProps) => {
    return <></>
}

const LoseAutocomplete = () => {
  return (
    <Icon size=""/>
  )
}

export default LoseAutocomplete