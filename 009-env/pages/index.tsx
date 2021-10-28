console.log('NEXT_API_URL', process.env.NEXT_API_URL)

export default () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        API_URL: <span>{process.env.NEXT_PUBLIC_API_URL}</span>
      </div>
    </div>
  )
}
