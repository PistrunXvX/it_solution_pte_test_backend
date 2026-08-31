import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Skill } from './skill.module';
import { Experience } from './experience.module';
import { Project } from './project.module';

@ObjectType()
export class UserProfile {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  shortDescription: string;

  @Field()
  githubLink: string;

  @Field()
  linkedinLink: string;

  @Field()
  itchioLink: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];

  @Field()
  updatedAt: Date;

  @Field()
  createdAt: Date;
}