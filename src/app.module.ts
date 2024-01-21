import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/configs/typeorm.config.js';
import { MoviesResolver } from './movies/resolver/movies.resolver';
import { MoviesService } from './movies/services/movies.service.js';
import { Movie } from './database/entities/movie.entity.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Movie]),
  ],
  providers: [MoviesResolver, MoviesService],
})
export class AppModule {}
