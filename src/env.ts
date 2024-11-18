import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)

/*
 Basicamente o envSchema tenta realizar um parse das variáveis de ambiente
 que estão no arquivo ".env" sendo acessadas pelo "procces.env" que estejam
 na configuração descritas pelo envSchema.
 Ou seja, se "DATABASE_URL" é uma string e é uma URL.
 Dessa forma, é possível acessar a varável de ambiente no projeto.

 Note: Não foi instalar o pacote Dotenv para isso, e sim, o pacote Zod para
 trabalhar com as variáveis de ambiente.
*/
