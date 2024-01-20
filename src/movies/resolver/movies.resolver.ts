import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneMovieArgs } from '../args/create-one-movie.args';

@Resolver('Movies')
export class MoviesResolver {
  @Query(() => String)
  async movies() {
    return 'Hello World!';
  }
  @Mutation(() => String)
  async createOneMovie(@Args() args: CreateOneMovieArgs) {
    console.log(args);
    return 'Criado com sucesso!';
  }
}
