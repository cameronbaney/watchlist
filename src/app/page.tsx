import Movie from './components/movie/movie';

const apiKey = process.env.VITE_TMDB_READ_ACCESS_TOKEN;
const options = {method: 'GET', headers: {
  accept: 'application/json',
  Authorization: `Bearer ${apiKey}`,
}};

export default async function Home({searchParams}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const {query} = await searchParams;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${query}`;
  const popularUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  const data = await fetch(query ? searchUrl : popularUrl, options)
  const movies = await data.json()
  console.log(movies);

  if (!movies?.results?.length) {
    return `${query} No movie found`
  }
  return (
    <div className="grid grid-cols-8 gap-4 gap-y-8 p-4">
      {movies.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
