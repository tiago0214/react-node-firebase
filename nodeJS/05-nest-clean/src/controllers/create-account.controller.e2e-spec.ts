import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('create account E2E', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST] /accounts', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123123123',
    })

    expect(response.statusCode).toBe(201)

    const userOnDataBase = await prisma.user.findUnique({
      where: {
        email: 'jhondoe@example.com',
      },
    })

    expect(userOnDataBase).toBeTruthy()
  })
})
