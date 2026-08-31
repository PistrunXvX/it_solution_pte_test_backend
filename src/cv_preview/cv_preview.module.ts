import { Module } from '@nestjs/common';
import { CvPreviewResolver } from './cv_preview.resolver';
import { CvPreviewService } from './cv_preview.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CvPreviewResolver, CvPreviewService, PrismaService]
})
export class CvPreviewModule {}
