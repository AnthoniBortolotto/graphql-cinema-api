import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MoviesObject {
  @Field(() => Number)
  id: number;
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;

  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;
}
