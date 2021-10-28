import { useEffect, useState } from 'react'

export default () => {
  const [pets, setPets] = useState<string[]>([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/pets')
      const data = await res.json()

      setPets(data.pets)
    }

    load()
  }, [])

  return (
    <div>
      <h1>Pets</h1>

      {pets.map((pet) => (
        <div key={pet}>{pet}</div>
      ))}
    </div>
  )
}
