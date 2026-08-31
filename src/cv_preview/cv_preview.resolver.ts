import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CvPreviewService }  from './cv_preview.service';
import { UserProfile } from './models/userprofile.module';


@Resolver(() => UserProfile)
export class CvPreviewResolver {
  constructor(private readonly cvPreviewService: CvPreviewService) {}

  @Query(() => [UserProfile], { name: 'userProfile' })
  async getUserProfiles() {
    return this.cvPreviewService.findAll();
  }
}