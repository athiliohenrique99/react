const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Esse é o titulo do container </h2>
        {children}
        <p>O valor é : {myValue}</p>
    </div>
  )
}

export default Container