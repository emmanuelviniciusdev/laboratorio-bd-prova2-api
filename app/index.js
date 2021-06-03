const express = require('express')
const cors = require('cors')
const Esportes = require('./database/models/Esportes')

const app = express().use(express.json()).use(cors())

app.post('/cadastrar-os-5-primeiros-esportes', async (req, res) => {
    try {
        /**
         * Gera um array com os esportes.
         */
        const esportes = Array.from({ length: 5 }).map((_, index) => ({
            modalidade: `Modalidade ${index + 1} 🏀`,
            tipo: `Tipo ${index + 1}`,
            distancia: index + 1.5,
            sexo: (index + 1) % 2 === 0 ? 'feminino' : 'masculino',
            local: (index + 1) % 2 === 0 ? 'Tóquio 🇯🇵' : 'Rio de Janeiro 🇧🇷',
        }))

        /**
         * Cria a tabela "esportes" no banco de dados.
         */
        await Esportes.sync()

        /**
         * Insere os esportes no banco de dados.
         */
        for (const esporte of esportes) {
            await Esportes.create(esporte)
        }

        res.status(201)
        res.json('[ ✅ ] Esportes inseridos com sucesso!')
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json(err)
    }
})

/**
 * Cadastra um esporte.
 */
app.post('/esporte', async (req, res) => {
    try {
        const novoEsporte = await Esportes.create(req.body)

        res.status(201)
        res.json(novoEsporte)
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json(err)
    }
})

/**
 * Retorna todos os esportes cadastrados.
 */
app.get('/esportes', async (req, res) => {
    try {
        const todosOsEsportes = await Esportes.findAll()

        res.status(200)
        res.json(todosOsEsportes)
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json(err)
    }
})

app.listen(3001, () => console.log(`Servidor rodando na porta 3001`))
