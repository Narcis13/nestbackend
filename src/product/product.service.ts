import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductCreateInput) {
    this.databaseService.$queryRaw`SELECT 1`;
    return this.databaseService.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return this.databaseService.product.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.databaseService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where: { id },
    });
  }
}
