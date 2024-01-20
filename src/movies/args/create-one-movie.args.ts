import { ArgsType, Field } from '@nestjs/graphql';
import { CreateOneMovieInput } from '../inputs/create-one-movie.input';

@ArgsType()
export class CreateOneMovieArgs {
  @Field(() => CreateOneMovieInput, { nullable: false })
  data: CreateOneMovieInput;
}
