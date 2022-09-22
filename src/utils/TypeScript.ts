export interface IFilm {
  id?: string;
  title?: string;
  release_date: string;
  director: string;
  producer: string;
  episode_id: string;
  characters: string | string[];
}

export interface IAlert {
  loading?: boolean;
  success?: string | string[];
  errors?: string | string[];
}
