import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {

  constructor(private readonly configServece: ConfigService) {
    super({
      datasources: {
        db: {
          url: configServece.get('DATABASE_URL')
        }
      }
    })
  }
}
