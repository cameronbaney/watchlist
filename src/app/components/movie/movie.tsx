import Image from "next/image";
import { type Movie } from '@/types/movie';

interface Props {
  movie: Movie;
}

const formattedDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function Movie({ movie }: Props) {
  return (
    <div key={movie.id}>
      {movie.poster_path && (
        <Image
          className="mb-2"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={500}
          height={500}
          alt={`Movie post for ${movie.title}`}
        />
      )}
      <h2 className="text-lg font-bold">{movie.title}</h2>
      <p>{formattedDate(movie.release_date)}</p>
    </div>
  );
}
