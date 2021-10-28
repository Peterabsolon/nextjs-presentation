interface IPageProps {
  pets: string[]
}

export default ({ pets }: IPageProps) => {
  return (
    <div>
      <h1>Pets</h1>

      {pets.map((pet) => (
        <div key={pet}>{pet}</div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/pets')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pets: data.pets,
    },
  }
}
