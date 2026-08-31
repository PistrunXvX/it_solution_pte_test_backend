import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CvPreviewService {
    constructor(private readonly prisma: PrismaService) {};

    async findAll() {
        return this.prisma.userProfile.findMany({
            include: {
                skills: true,
                projects: true,
                experiences: true,
            },
        });
    }
}
