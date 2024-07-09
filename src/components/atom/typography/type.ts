

interface TypographyPropsType {
  text:string
  tag:keyof JSX.IntrinsicElements
  className?:string
  children?:React.ReactNode
  style?:React.CSSProperties
}

export default TypographyPropsType