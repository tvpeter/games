import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { genres } = useGenres()
  return (
    <ul>
      {genres.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
