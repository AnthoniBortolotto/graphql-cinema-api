import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/database/entities/movie.entity';
import { MoviesResolver } from '../resolver/movies.resolver';
import { MoviesService } from '../services/movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
