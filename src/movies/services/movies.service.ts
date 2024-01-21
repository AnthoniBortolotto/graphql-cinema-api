import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/database/entities/movie.entity';
import { Repository } from 'typeorm';
import { MoviesObject } from '../objects/movies.object';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private moviesRepository: Repository<Movie>,
  ) {}

  async getMovies(): Promise<MoviesObject[]> {
    return this.moviesRepository.find();
  }

  async addOneMovie(title: string, description: string) {
    const movie = this.moviesRepository.create({ title, description });
    return this.moviesRepository.save(movie);
  }
}
