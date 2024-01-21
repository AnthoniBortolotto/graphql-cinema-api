import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneMovieArgs } from '../args/create-one-movie.args';
import { MoviesService } from '../services/movies.service';
import { MoviesObject } from '../objects/movies.object';

@Resolver('Movies')
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  //return  [{ id: 1, title: \"Wonka\", description: \"Um filme com a origem do Willy Wonka\", createdAt: 2024-01-21T20:38:59.926Z, updatedAt: 2024-01-21T20:38:59.926Z }]
  @Query(() => [MoviesObject])
  async movies(): Promise<MoviesObject[]> {
    return this.moviesService.getMovies();
  }
  @Mutation(() => String)
  async createOneMovie(@Args() args: CreateOneMovieArgs) {
    console.log(args);
    await this.moviesService.addOneMovie(
      args.data.title,
      args.data.description,
    );
    return 'Criado com sucesso!';
  }
}
