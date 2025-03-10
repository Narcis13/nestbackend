import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [UsersModule, DatabaseModule, ProductModule, FileUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
