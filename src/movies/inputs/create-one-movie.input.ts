import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneMovieInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;
}
